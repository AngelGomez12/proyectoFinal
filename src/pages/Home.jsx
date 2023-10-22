import Categorie from "../components/Categorie";

import ProductsList from "../components/Home/ProductsList/ProductsList";
import CartProvider from "../contexts/ProductsList";

export const Home = () => {
  return (
    <main className="flex flex-col">
      <div
        id="hero-home"
        className="hero min-h-fit"
        style={{
          backgroundImage: "url(../../public/img/bg-image-hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-primary-content mt-28 mb-20">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-4xl font-extrabold">
              Renta de Maquinaria Pesada
            </h1>
            <h3 className="mb-5 text-2xl font-bold">
              La solución perfecta para tu proyecto
            </h3>
            <div className=" input-bordered w-72 bg-neutral-900/70 flex items-center m-auto px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscá aquí Máquinas"
                className="input input-ghost w-full"
              />
            </div>
            <p className="mb-5 mt-44">
              Obtén el equipo que necesitas, cuando lo necesitas y sin necesidad
              de comprarlo
            </p>
            <div className="flex flex-col">
              <button className="btn btn-link text-primary-content mx-auto">
                Explora por categorías
              </button>
            </div>
          </div>
        </div>
      </div>
      <CartProvider>
        <ProductsList />
      </CartProvider>
      <div
        id="catSection"
        className="bg-primary flex flex-col items-center py-24"
      >
        <h2 className="text-3xl font-bold text-black mb-20">
          Encuentra lo que necesitas
        </h2>

        <div id="catNav" className="flex flex-wrap gap-6 mx-8 justify-center">
          <Categorie
            title="Construcción"
            subtitle="Lorem ipsum dolor sit amet consectetur."
            image="../../public/img/construccion.jpg"
          />
          <Categorie
            title="Agrícola / Forestal"
            subtitle="Lorem ipsum dolor sit amet consectetur."
            image="../../public/img/agro.jpg"
          />
          <Categorie
            title="Carga Útil"
            subtitle="Lorem ipsum dolor sit amet consectetur."
            image="../../public/img/carga.jpg"
          />
          <Categorie
            title="Infraestructura"
            subtitle="Lorem ipsum dolor sit amet consectetur."
            image="../../public/img/civil.jpg"
          />
        </div>
      </div>
    </main>
  );
};
