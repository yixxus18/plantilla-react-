import { lazy, Suspense, memo } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaCoffee, FaHeart } from 'react-icons/fa';
import coffe from '../assets/coffe-bg.webp';
const SocialNavbar = lazy(() => import('../components/SocialNavbar'));
const MapSection = lazy(() => import('../components/MapSection'));

const LoadingSpinner = () => (
  <div className="flex justify-center py-20 bg-white/90">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#2C1810]"></div>
  </div>
);

const Home = memo(() => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <SocialNavbar />
      </Suspense>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src={coffe.replace('.jpg', '.webp')}
            alt="Café de especialidad"
            className="object-cover w-full h-full"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative flex items-center justify-center h-full px-4 text-center sm:px-6">
          <div className="max-w-4xl">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-7xl sm:mb-6">
              Donde cada taza cuenta una historia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#E6B17E] mb-6 sm:mb-8">
              Descubre el arte del café artesanal en cada sorbo
            </p>
            <Link 
              to="/cafes"
              className="inline-block bg-[#E6B17E] text-[#2C1810] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D4976A] transition-colors"
            >
              Descubre nuestros cafés
            </Link>
          </div>
        </div>
      </div>
      <div className="py-12 sm:py-20 bg-white/90">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-12">
            <div className="text-center">
              <div className="bg-[#2C1810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-[#E6B17E] text-2xl" />
              </div>
              <h2 className="text-xl font-bold text-[#2C1810] mb-2">Café de origen</h2>
              <p className="text-[#4A3728]">Seleccionado cuidadosamente de las mejores regiones cafeteras de Chiapas.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#2C1810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCoffee className="text-[#E6B17E] text-2xl" />
              </div>
              <h2 className="text-xl font-bold text-[#2C1810] mb-2">Tostado artesanal</h2>
              <p className="text-[#4A3728]">Cada grano tostado a la perfección para resaltar sus mejores cualidades.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#2C1810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-[#E6B17E] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#2C1810] mb-2">Pasión por el café</h3>
              <p className="text-[#4A3728]">Dedicación y amor en cada paso del proceso, de la semilla a la taza.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-[#2C1810]">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-white">
            La experiencia del café perfecto
          </h2>
          <p className="text-xl text-[#E6B17E] mb-8 max-w-2xl mx-auto">
            Visítanos y descubre por qué nuestro café es diferente. 
            Una experiencia única que despertará tus sentidos.
          </p>
        </div>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <MapSection />
      </Suspense>
    </>
  );
});

Home.displayName = 'Home';

export default Home;