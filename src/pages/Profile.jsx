import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  if (!user) return null;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Perfil de Usuario</h1>
        
        <div className="space-y-4">
          <div className="border-b pb-3">
            <p className="text-sm text-gray-600">Nombre de usuario</p>
            <p className="text-lg font-medium text-gray-800">{user.name}</p>
          </div>
          
          <div className="border-b pb-3">
            <p className="text-sm text-gray-600">Email</p>
            <p className="text-lg font-medium text-gray-800">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Fecha de registro</p>
            <p className="text-lg font-medium text-gray-800">
              {new Date(user.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
