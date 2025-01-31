import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contactanos = () => {
  return (
    <div className="bg-[#F5E6D3] min-h-screen">
      <div className="px-8 py-12 mx-auto max-w-7xl sm:px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-6">
            Contáctanos
          </h1>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto mb-12"></div>
          <p className="text-lg text-[#4A3728] max-w-2xl mx-auto">
            Si tienes alguna duda o deseas realizar una consulta, no dudes en contactarnos. 
            Estamos aquí para asistirte.
          </p>
        </div>
        <div className="flex items-center justify-center md:grid-cols-1">
          <div className="items-center p-8 bg-white rounded-lg shadow-lg ">
            <h2 className="text-2xl font-bold text-[#2C1810] mb-8">Información de Contacto</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-[#8B4513] text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-[#2C1810] mb-1">Dirección</h3>
                  <a 
                    href="https://maps.app.goo.gl/oAdMvQELCspWp8cw5" 
                    target="_blank" 
                    className="text-[#4A3728] hover:text-[#8B4513] transition-colors"
                  >
                    Cerrada Loretto #186 Fraccionamiento Las Puertas, 27086 Torreón, Coah.
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-[#8B4513] text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-[#2C1810] mb-1">Correo Electrónico</h3>
                  <a 
                    href="mailto:yisuskroom@gmail.com" 
                    className="text-[#4A3728] hover:text-[#8B4513] transition-colors"
                  >
                    yisuskroom@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaPhone className="text-[#8B4513] text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-[#2C1810] mb-1">Teléfono</h3>
                  <a 
                    href="tel:+528711055582" 
                    className="text-[#4A3728] hover:text-[#8B4513] transition-colors"
                  >
                    +52 (871) 105-5582
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;