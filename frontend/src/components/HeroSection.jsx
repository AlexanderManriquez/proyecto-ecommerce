const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white p-8 flex flex-col md:flex-row">
      {/* Reemplazar por un carrusel que muestre diferentes productos */}
      <img
        className="w-full md:w-3/5 rounded-lg mb-4 md:mb-0"
        src="https://cdn.pixabay.com/photo/2015/03/16/18/17/businessman-676354_1280.jpg"
        alt="Accesorios para look de oficinista"
      />
      <div className="flex flex-col justify-around md:ml-8">
        <h1 className="text-4xl drop-shadow-md">Bienvenido a La Tienda</h1>
        <p className="mt-4 drop-shadow-sm">Todo lo que buscas está aquí.</p>
        <div className="flex items-center mt-4">
          <h2 className="text-2xl mr-2 drop-shadow-md">Tenemos envíos a todo Chile</h2>
          <img
            className="w-8 h-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png"
            alt="Bandera de Chile"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
