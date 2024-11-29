// ** Agregar el uso de cookies para el token de autenticación
import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies"; 
import PropTypes from 'prop-types';
// ** Config
import { postData } from "./utils/fetchData";
import authConfig from "./configs/authConfig";

const defaultProvider = {
  user: { 
    id: 1, 
    nombre: 'Usuario Demo', 
    email: 'demo@example.com',
    role: 'admin',
    created_at: '2023-06-01T00:00:00.000Z',
  },
  //user: null,
  loading: false,
  //loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => null
  //logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);

  useEffect(() => {
    const initAuth = async () => {
      const cookies = parseCookies(); 
      const storedToken = cookies[authConfig.storageTokenKeyName];

      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await postData(authConfig.meEndpoint, {}, {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json'
        });
        
        const userData = response.user || response;
        
        if (!userData || !userData.id) {
          console.log("No se encontró información de usuario válida");
          handleLogout();
        } else {
          setUser(userData);
        }
      } catch (error) {
        console.error("Error during auth check:", error);
        handleLogout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const handleLogin = async (params, errorCallback) => {
    try {
      console.log("Intentando iniciar sesión con:", params);
      
      const loginData = {
        email: params.email,
        password: params.password
      };

      const response = await postData(authConfig.loginEndpoint, loginData, {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      });
      
      console.log("Respuesta del servidor:", response);
      
      if (response?.token || response?.access_token) {
        const token = response.token || response.access_token;
        setCookie(null, authConfig.storageTokenKeyName, token, {
          maxAge: 60 * 60 * 24 * 365, // 1 año
          path: '/',
        });
        
        // Si el usuario viene en la respuesta del login, se utiliza para actualizar el estado
        if (response.user) {
          setUser(response.user);
        } else {
          // Si no viene el usuario en la respuesta del login, obtenerlo del endpoint /me
          const userResponse = await postData(authConfig.meEndpoint, {}, {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          });
          setUser(userResponse.user || userResponse);
        }
        return response;
      } else {
        console.error("Respuesta sin token:", response);
        throw new Error("No se recibió un token de acceso");
      }
    } catch (err) {
      console.error("Error en login:", err);
      if (errorCallback) {
        const errorMessage = err.message || "Error de autenticación";
        errorCallback(errorMessage.includes("401") ? "Credenciales inválidas" : errorMessage);
      }
      throw err;
    }
  };

  const handleLogout = () => {
    setUser(null);
    destroyCookie(null, authConfig.storageTokenKeyName, {
      path: "/",
    });
    window.location.href = "/";
  };

  const values = {
    user,
    loading,
    setUser,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export { AuthContext, AuthProvider };