import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo-yizuz.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2C1810] shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center flex-shrink-0">
              <img 
                src={logo} 
                alt="Logo Yizuz Cáfe" 
                className='size-12'
                width="48" 
                height="48"
              />
              <Link to="/" className="text-2xl font-bold text-[#E6B17E] hover:text-[#D4976A] transition-colors">
                Yizuz Cáfe
              </Link>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E6B17E] hover:text-[#D4976A] focus:outline-none"
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className="items-center hidden md:flex">
            <div className="flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium text-[#E6B17E] hover:text-[#D4976A] transition-colors">
                Home
              </Link>
              <Link to="/nosotros" className="text-lg font-medium text-[#E6B17E] hover:text-[#D4976A] transition-colors">
                Nosotros
              </Link>
              <Link to="/cafes" className="text-lg font-medium text-[#E6B17E] hover:text-[#D4976A] transition-colors">
                Nuestros Cafés
              </Link>
              <Link to="/contactanos" className="text-lg font-medium text-[#E6B17E] hover:text-[#D4976A] transition-colors">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#2C1810]">
        <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-[#E6B17E] hover:text-[#D4976A] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/nosotros"
            className="block px-3 py-2 text-base font-medium text-[#E6B17E] hover:text-[#D4976A] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            to="/cafes"
            className="block px-3 py-2 text-base font-medium text-[#E6B17E] hover:text-[#D4976A] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Nuestros Cafés
          </Link>
          <Link
            to="/contactanos"
            className="block px-3 py-2 text-base font-medium text-[#E6B17E] hover:text-[#D4976A] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
