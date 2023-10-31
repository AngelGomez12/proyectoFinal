import { useParams, useNavigate } from "react-router-dom";
import { Carrousel } from "../components/Carrousel";
import useApi from "../hooks/hookApi";
import { useEffect } from "react";
export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { data, fetchData } = useApi(
    `${import.meta.env.VITE_BACKEND_URL}productos/${id}`,
    {}
  );

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <section className="h-min w-full flex justify-center items-center flex-col bg-neutral ms:h-screen">
      <div className=" mx-16 h-full mt-44 m-5 ms:w-4/5 ms:mt-6 lg:mt-24">
        <div className="flex justify-between w-full mb-5">
          <div>
            <h1 className="text-4xl font-bold">{data && data.nombre}</h1>
            <h3>Hitachi Us Zaxis 135</h3>
          </div>
          <button
            className="hidden rounded h-12  ms:flex lg:flex items-center gap-4 border-2 px-4"
            onClick={goBack}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
                fill="#CDCED0"
              />
            </svg>
            Volver atras
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {data &&
            data.imagenProductos.map((imagenProducto, index) => {
              return (
                <img
                  key={index}
                  src={imagenProducto.ruta}
                  alt="Retroexcavadora"
                  className="w-1/2 sm:w-2/5 md:w-1/2 lg:w-1/2"
                />
              );
            })}

          <img src="../public/img/Rectangle-16.png" alt="Retroexcavadora" />
          <div className="flex flex-col gap-4 items-center m-4">
            <div className="flex items-center gap-4 justify-center">
              <img
                className="w-1/2 sm:w-2/5 md:w-1/2 lg:w-1/2"
                src="../public/img/Rectangle-17.png"
                alt="Retroexcavadora"
              />
              <img
                className="w-1/2 sm:w-2/5 md:w-1/2 lg:w-1/2"
                src="../public/img/Rectangle-18.png"
                alt="Retroexcavadora"
              />
            </div>

            <div className="flex items-center gap-4 justify-center flex-wrap">
              <img src="../public/img/Rectangle-19.png" alt="Retroexcavadora" />
              <img
                className="hidden ms:block lg:block"
                src="../public/img/Rectangle-20.png"
                alt="Retroexcavadora"
              />
            </div>
            <button
              className="rounded h-12 border-2 w-72"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Ver todas las imagenes
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <Carrousel />
              </div>
            </dialog>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-primary text-4xl font-bold my-4">
            Descripción general del Equipo
          </h2>
          <p className="mb-4 text-xl">Precio: ${data && data.precio} </p>
          <p>{data && data.descripcion}</p>
          <ul className="ml-2 mt-2 list-disc">
            <li>
              Ideal para la mayoría de los proyectos de movimiento de tierras
            </li>
            <li>De 60 a 90 CV</li>
            <li>Diseñado para mover objetos pesados</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
