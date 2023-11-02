import Categorie from "../components/Categorie";

import ProductsList from "../components/Home/ProductsList/ProductsList";
import CartProvider from "../contexts/ProductsList";

export const Home = () => {
  return (
    <>



<div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: "url(../../public/img/login-bg.jpg)",
        }}
      >
        <div className="hero-content hero-overlay flex-col lg:flex-row-reverse bg-opacity-80">

            <div id="logo"
        className="max-w-md min-w-[320px] flex items-center absolute gap-2 top-[15vh]">
            <svg
            className="h-full z-50"
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            >
            <path
                d="M53.0616 52.8C54.7896 52.8 56.2616 54.272 56.2616 56C56.2616 57.728 54.7896 59.2 53.0616 59.2H14.6616C12.9336 59.2 11.4616 57.728 11.4616 56C11.4616 54.272 12.9336 52.8 14.6616 52.8H53.0616ZM53.0616 48H14.6616C10.2776 48 6.66164 51.616 6.66164 56C6.66164 60.384 10.2776 64 14.6616 64H53.0616C55.1834 64 57.2182 63.1571 58.7185 61.6569C60.2188 60.1566 61.0616 58.1217 61.0616 56C61.0616 53.8783 60.2188 51.8434 58.7185 50.3431C57.2182 48.8429 55.1834 48 53.0616 48ZM61.0616 28.8H51.4616V16H35.4616L25.8616 28.8V44.8H64.2616L61.0616 28.8ZM30.7896 28.8L37.0616 20.8H45.0616V28.8H30.7896ZM25.0936 4.512L9.09364 0L0.261637 31.456C-0.826363 35.552 1.57364 39.808 5.70164 40.96L9.41364 41.984L19.9416 32.928L7.52564 29.472L13.5416 7.872L22.4696 10.368C24.2616 11.296 28.1336 13.888 30.5656 17.184L33.8616 12.8H35.2696C31.2376 7.712 25.3816 4.672 25.0936 4.512Z"
                fill="#FFE100"
            />
            </svg>
            <div className="flex flex-col gap-0">
            <h1 className="text-4xl font-extrabold text-white">Maquinaria Pro</h1>
            <p className="text-2xl text-white font-light">Trabajo pesado a un clic</p>
            </div>
        </div>
          <div className="text-center lg:text-left mx-8">
            <h1 className="text-5xl font-bold">Entrá Ahora!</h1>
            <p className="py-6 w-72 font-bold">
              Descubrí como podrás hacer <br />
              <span className="text-accent">
                todo el trabajo pesado en un clic!
              </span>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Ingresá tu email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="Ingresá tu contraseña"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Olvidaste tu contraseña?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-base-100 hover:bg-yellow-500">
                  INICIAR SESIÓN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>





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
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                  fill="#CDCED0"
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
    </>
  );
};
