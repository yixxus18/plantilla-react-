import SocialNavbar from '../components/SocialNavbar';

const Nosotros = () => {
  return (
    <>
      <SocialNavbar />
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-12">
        <div className="mb-8 text-center sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1810] mb-4 sm:mb-6">
            Nuestra Historia
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#8B4513] mx-auto mb-6 sm:mb-8"></div>
        </div>
        <div className="grid items-center gap-8 p-4 mb-8 rounded-lg shadow-xl md:grid-cols-2 sm:gap-12 sm:mb-16 bg-white/90 sm:p-8">
          <div className="space-y-6">
            <p className="text-lg text-[#4A3728] leading-relaxed">
              En Yizuz Café, nuestra pasión por el café comenzó hace más de una década en las hermosas tierras altas de Chiapas. Cada taza que servimos cuenta una historia de dedicación, tradición y amor por el arte del café.
            </p>
            <p className="text-lg text-[#4A3728] leading-relaxed">
              Trabajamos directamente con pequeños productores locales, asegurando no solo la mejor calidad en cada grano, sino también un impacto positivo en las comunidades cafeteras.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-xl h-96">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt="Nuestra Historia" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-12">
        <div className="grid items-center gap-8 p-4 mb-8 rounded-lg shadow-xl md:grid-cols-2 sm:gap-12 sm:mb-16 bg-white/90 sm:p-8">
          <div className="relative order-last overflow-hidden rounded-lg shadow-xl h-96 md:order-first">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              alt="Compromiso con la Calidad" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-[#4A3728] leading-relaxed">
              En Yizuz Café, nos comprometemos con la excelencia en cada paso del proceso. Desde la selección cuidadosa de los granos hasta el tostado artesanal, buscamos preservar los sabores únicos que hacen especial a cada cosecha.
            </p>
            <p className="text-lg text-[#4A3728] leading-relaxed">
              Creemos que el café no es solo una bebida, sino una experiencia que conecta a las personas. Por eso, cada taza está diseñada para inspirar momentos de conexión y disfrute.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;