import SocialNavbar from '../components/SocialNavbar';

const Cafes = () => {
  return (
    <>
      
      <SocialNavbar />
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-12">
        <div className="mb-8 text-center sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1810] mb-4 sm:mb-6">
            Descubre nuestra variedad de cafés
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#8B4513] mx-auto mb-6 sm:mb-8"></div>
        </div>

        {/* Café Arábica */}
        <div className="grid items-center gap-8 p-4 mb-8 rounded-lg shadow-xl md:grid-cols-2 sm:gap-12 sm:mb-16 bg-white/90 sm:p-8">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl sm:h-96">
            <img 
              src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=800&auto=format&q=75&fit=crop&fm=jpg&cache=force"
              alt="Café Arábica" 
              className="object-cover w-full h-full"
              loading="lazy"
              width="800"
              height="600"
              />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl text-[#2C1810] font-semibold">Café Arábica</h2>
            <p className="text-base sm:text-lg text-[#4A3728] leading-relaxed">
              Considerado el café más fino del mundo, el Arábica se caracteriza por su sabor suave y aromático. 
              Con notas a frutas y bayas, tiene una acidez brillante y un cuerpo delicado.
            </p>
            <p className="text-base sm:text-lg text-[#4A3728] leading-relaxed">
              Cultivado en altitudes elevadas, contiene menos cafeína que otras variedades, 
              lo que resulta en una experiencia de café más refinada y menos intensa.
            </p>
          </div>
        </div>

        {/* Café Libérica */}
        <div className="grid items-center gap-8 p-4 mb-8 rounded-lg shadow-xl md:grid-cols-2 sm:gap-12 sm:mb-16 bg-white/90 sm:p-8">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl text-[#2C1810] font-semibold">Café Libérica</h2>
            <p className="text-base sm:text-lg text-[#4A3728] leading-relaxed">
              El café Libérica es conocido por sus granos grandes y su sabor único y distintivo.
              Ofrece notas a frutas silvestres y un aroma floral característico.
            </p>
            <p className="text-base sm:text-lg text-[#4A3728] leading-relaxed">
              Esta variedad es más resistente a las plagas y puede crecer a bajas altitudes,
              lo que la hace especialmente valiosa en ciertas regiones productoras.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl sm:h-96">
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&q=75&fit=crop&fm=jpg&cache=force"
              alt="Café Libérica" 
              className="object-cover w-full h-full"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>

        {/* Café Robusta */}
        <div className="grid items-center gap-8 p-4 mb-8 rounded-lg shadow-xl md:grid-cols-2 sm:gap-12 sm:mb-16 bg-white/90 sm:p-8">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl sm:h-96">
            <img 
              src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=800&auto=format&q=75&fit=crop&fm=jpg&cache=force"
              alt="Café Robusta" 
              className="object-cover w-full h-full"
              loading="lazy"
              width="800"
              height="600"
              
            />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl text-[#2C1810] font-semibold">Café Robusta</h2>
            <p className="text-base sm:text-lg text-[#4A3728] leading-relaxed">
              El Robusta es conocido por su sabor fuerte y su alto contenido de cafeína.
              Produce una taza de café con cuerpo completo y notas a nueces y chocolate.
            </p>
            <p className="text-base sm:text-lg text-[#4A3728] leading-relaxed">
              Es especialmente apreciado en mezclas de espresso, donde su robustez
              y crema abundante contribuyen a una experiencia de café intensa.
            </p>
          </div>
        </div>

        {/* Café Excelsa */}
        <div className="grid items-center gap-8 p-4 mb-8 rounded-lg shadow-xl md:grid-cols-2 sm:gap-12 sm:mb-16 bg-white/90 sm:p-8">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl text-[#2C1810] font-semibold">Café Excelsa</h2>
            <p className="text-base sm:text-lg text-[#4A3728] leading-relaxed">
              El Excelsa ofrece un perfil de sabor complejo y único, con notas 
              tanto afrutadas como tostadas que crean una experiencia misteriosa.
            </p>
            <p className="text-base sm:text-lg text-[#4A3728] leading-relaxed">
              A pesar de representar solo un pequeño porcentaje de la producción mundial,
              es apreciado por añadir complejidad y profundidad a las mezclas de café.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl sm:h-96">
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&q=75&fit=crop&fm=jpg&cache=force"
              alt="Café Excelsa" 
              className="object-cover w-full h-full"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Cafes;