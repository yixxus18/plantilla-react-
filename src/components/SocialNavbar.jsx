import { memo } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialNavbar = memo(() => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-[#2C1810]/80 p-2 sm:p-3 rounded-l-lg shadow-lg z-50">
      <div className="flex flex-col space-y-3 sm:space-y-4">
        <a 
          href="https://www.facebook.com/jesus.orozco.31105674/" 
          className="text-[#E6B17E] hover:text-[#D4976A] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visita nuestro Facebook"
        >
          <FaFacebook className="text-xl sm:text-2xl" />
        </a>
        <a 
          href="https://www.instagram.com/yizuz23/" 
          className="text-[#E6B17E] hover:text-[#D4976A] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Síguenos en Instagram"
        >
          <FaInstagram className="text-xl sm:text-2xl" />
        </a>
        <a 
          href="https://wa.me/528711055582" 
          className="text-[#E6B17E] hover:text-[#D4976A] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contáctanos por WhatsApp"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
        </a>
      </div>
    </div>
  );
});

SocialNavbar.displayName = 'SocialNavbar';

export default SocialNavbar;
