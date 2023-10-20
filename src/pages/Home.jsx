import Categorie from "../components/Categorie";

export const Home = () => {
  return (
    <>
      <div
        id="hero-home"
        className="hero min-h-fit"
        style={{
          backgroundImage: "url(../../public/img/bg-image-hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content mt-28 mb-20">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-4xl font-extrabold">
              Renta de Maquinaria Pesada
            </h1>
            <h3 className="mb-5 text-2xl font-bold">
              La solución perfecta para tu proyecto
            </h3>
            <p className="mb-5 mt-44">
              Obtén el equipo que necesitas, cuando lo necesitas y sin necesidad
              de comprarlo
            </p>
            <div className="flex flex-col">
              <button className="btn btn-primary mx-auto">
                Ver Máquinas Disponibles
              </button>
              <button className="btn btn-link mx-auto">
                Explora por categorías
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="catSection" className="bg-yellow-500 flex flex-col items-center py-24">

      <h2 className="text-3xl font-bold text-black mb-20">
            Encuentra lo que necesitas
            </h2>

        <div id="catNav" className="flex flex-wrap gap-6 mx-8 justify-center">

        <Categorie title="Construcción" subtitle="Lorem ipsum dolor sit amet consectetur." image="../../public/img/construccion.jpg" />
        <Categorie title="Agrícola / Forestal" subtitle="Lorem ipsum dolor sit amet consectetur." image="../../public/img/agro.jpg" />
        <Categorie title="Carga Útil" subtitle="Lorem ipsum dolor sit amet consectetur." image="../../public/img/carga.jpg" />
        <Categorie title="Infraestructura" subtitle="Lorem ipsum dolor sit amet consectetur." image="../../public/img/civil.jpg" />

        </div>
      </div>
    </>
  );
};
