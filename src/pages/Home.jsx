import { useState } from "react";
import Categorie from "../components/Categorie";
import ProductsList from "../components/Home/ProductsList/ProductsList";
import ProductSearch from "../components/Home/Search/ProductSearch";
import CartProvider from "../contexts/ProductsList";
import Datepicker from "react-tailwindcss-datepicker";

export const Home = () => {
  const [filter, setFilter] = useState("");
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    /* console.log("newValue:", newValue); */
    setValue(newValue);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    <main className="flex flex-col scroll-smooth">
      <div
        id="hero-home"
        className="hero min-h-fit"
        style={{
          backgroundImage: "url(../../public/img/bg-image-hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-primary-content mt-28 mb-20 sm:mb-40">
          <div className="max-w-2xl">
            <h1 className="mb-3 text-3xl sm:text-4xl font-extrabold text-white">
              Renta de Maquinaria Pesada
            </h1>
            <h3 className="mb-8 text-xl sm:text-2xl font-bold">
              La solución perfecta para tu proyecto
            </h3>

            <div className="join">
              <CartProvider>
                <ProductSearch onFilterChange={handleFilterChange} />
              </CartProvider>
            </div>
            <div className="flex items-center bg-[#1E293B] sm:join-item rounded h-12">
              <Datepicker
                placeholder={"En qué fechas?"}
                /* inputClassName="w-full rounded-md focus:ring-0 dark:placeholder:text-green-100" */
                /* containerClassName="" */
                separator={" → "}
                displayFormat={"DD/MM/YY"}
                primaryColor={"yellow"}
                value={value}
                onChange={handleValueChange}
              />
            </div>
            <button className="btn sm:join-item sm:rounded-r-full text-primary">
              Buscar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                  fill="#FFE100"
                />
              </svg>
            </button>

            <p className="my-4">
              Usa la maquinaria que necesitas, cuando la necesitas y sin
              necesidad de comprarla
            </p>
          </div>
        </div>
      </div>
      <CartProvider>
        <ProductsList filter={filter} />
      </CartProvider>
      <div id="catSection" className=" flex flex-col items-center py-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-20">
          Explora nuestras opciones por categorías
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
