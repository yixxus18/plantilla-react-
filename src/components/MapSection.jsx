const MapSection = () => {
  return (
    <div className="py-20 bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2C1810] mb-4">Encuéntranos</h2>
          <p className="text-xl text-[#4A3728]">Ven a visitarnos y disfruta de la mejor experiencia de café</p>
        </div>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.4084037317874!2d-103.4084344!3d25.5291275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdbd386bc2f7b%3A0x8f7ddee9bf4f8d86!2sCerrada%20Loretto%20186%2C%20Las%20Puertas%2C%2027086%20Torre%C3%B3n%2C%20Coah.!5e0!3m2!1ses-419!2smx!4v1710371151439!5m2!1ses-419!2smx"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-[#4A3728]">
            Cerrada Loretto #186 Fraccionamiento Las Puertas, 27086 Torreón, Coah.
          </p>
          <p className="text-lg text-[#4A3728] mt-2">
            Horario: Lunes a Domingo de 8:00 AM a 8:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapSection; 