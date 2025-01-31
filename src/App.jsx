import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Cafes from './pages/Cafes';
import Contactanos from './pages/Contactanos';


const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
        <Route
          path="/nosotros"
          element={
              <Nosotros />
          }
        />
        <Route
          path="/cafes"
          element={
              <Cafes />
          }
        />
        <Route
          path="/contactanos"
          element={
              <Contactanos />
          }
        />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <div className=''>
      <Router>
      <AppRoutes />
    </Router>
    </div>
  );
};

export default App;