import { useParams, useNavigate } from "react-router-dom";
import { Carrousel } from "../components/Carrousel";
import { useEffect, useState } from "react";
export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error al cargar specs", error);
      });
  }, []);

  return (
    <section className="h-min w-full flex justify-center items-center flex-col bg-neutral ms:h-screen">
      <div className=" mx-16 h-full mt-44 m-5 ms:w-4/5 ms:mt-6 lg:mt-24 w-4/5">
        <div className="flex justify-between w-full mb-5">
          <div>
            <h1 className="text-4xl font-bold">{data && data.name}</h1>
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
        <div className="flex flex-col gap-4 items-center m-4 w-full">
          <div className="flex gap-4 w-full justify-center items-center">
            {data && (
              <>
                {data.productImages.slice(0, 1).map((imagenProducto, index) => (
                  <img
                    className="min-h-full w-1/2"
                    key={index}
                    src={`data:image/jpeg;base64, ${imagenProducto.productImage}`}
                    alt="Retroexcavadora"
                  />
                ))}

                <div className="flex flex-col items-center gap-4 justify-center">
                  <div className="flex h-1/2 gap-4">
                    {data.productImages
                      .slice(1, 3)
                      .map((imagenProducto, index) => (
                        <img
                          className="w-1/2 sm:w-2/5 md:w-1/2 lg:w-1/2 max-h-80 min-h-min"
                          key={index}
                          src={`data:image/jpeg;base64, ${imagenProducto.productImage}`}
                          alt="Retroexcavadora"
                        />
                      ))}
                  </div>
                  <div className="flex items-center gap-4 justify-center">
                    {data.productImages
                      .slice(3, 5)
                      .map((imagenProducto, index) => (
                        <img
                          className="w-1/2 sm:w-2/5 md:w-1/2 lg:w-1/2 max-h-80 min-h-min"
                          key={index}
                          src={`data:image/jpeg;base64, ${imagenProducto.productImage}`}
                          alt="Retroexcavadora"
                        />
                      ))}
                  </div>
                  <button
                    className="rounded h-12 border-2 w-72"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Ver todas las imagenes
                  </button>
                </div>
              </>
            )}
          </div>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <Carrousel data={data} />
            </div>
          </dialog>
        </div>
        <div className="mt-4">
          <p className="mb-4 text-xl">
            Precio por hora: ${data && data.price}{" "}
          </p>
          <h2 className="text-primary text-4xl font-bold my-4">
            Descripción general del Equipo
          </h2>
          <p>{data && data.description}</p>
          <h2 className="text-primary text-4xl font-bold my-4">
            Características de Máquina
          </h2>
          <ul className="ml-2 mt-2 list-disc">
            {data &&
              data.specs.map((spec, index) => {
                return <li key={index}>{spec.description}</li>;
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};
