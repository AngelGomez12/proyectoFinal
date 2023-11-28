/* eslint-disable react/no-unknown-property */
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackBtn from "../components/BackBtn";
import Carrousel from "../components/Carrousel";
import Datepicker from "react-tailwindcss-datepicker";

export const Reservation = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}products/${id}`
        );
        const productData = await response.json();
        setData(productData);
      } catch (error) {
        console.error("Error al cargar specs", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <section className="h-min w-full flex justify-center items-center flex-col bg-neutral ms:h-screen">
      <div className="mx-16 h-full mt-36 mb-24 w-4/5">
        <div className="flex justify-between w-full mb-5">
          <div>
            <h1 className="text-2xl font-bold">{data && data.name}</h1>
            <p className="text-xl">{data && data.productType.description}</p>
          </div>
          <BackBtn />
        </div>
        <div
          id="Product_Images"
          className="max-h-[600px] sm:h-[400px] mb-8 sm:mb-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 md:gap-16 h-full">
            {data && (
              <>
                {data.productImages.slice(0, 1).map((imagenProducto, index) => (
                  <React.Fragment key={index}>
                    <figure className="sm:w-1/2 sm:h-full h-[200px] overflow-hidden object-center rounded-md">
                      <img
                        className="min-w-full min-h-full object-cover"
                        src={`data:image/jpeg;base64, ${imagenProducto.productImage}`}
                        alt="Imagen Destacada Maquinaria Pro"
                      />
                    </figure>
                  </React.Fragment>
                ))}

                <div className="flex flex-col sm:w-1/2 gap-4 items-center">
                <h3 className="text-primary text-2xl font-bold my-4 w-full text-center mt-0">
                        Reserva esta Máquina
                      </h3>
                  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-lg py-2">
                    <form className="card-body justify-between">
                      <Datepicker
                        disabledDates={[
                          {
                            startDate: "2023-11-23",
                            endDate: "2023-11-26",
                          },
                          {
                            startDate: "2023-12-01",
                            endDate: "2023-12-05",
                          },
                        ]}
                        value={value}
                        onChange={handleValueChange}
                        i18n={"es"}
                        popoverDirection="down"
                        placeholder={"Cuáles fechas?"}
                        separator={" → "}
                        displayFormat={"DD/MM/YY"}
                        primaryColor={"yellow"}
                        startWeekOn="mon"
                        showFooter={true}
                        configs={{
                          footer: {
                            cancel: "Cancelar",
                            apply: "Aplicar",
                          },
                        }}
                      />

                      <div className="form-control mt-4">
                        <label htmlFor="">Algo a tener en cuenta?</label>
                        <textarea
                          type="text"
                          placeholder="Ejemplo: Indicación para dirección de entrega"
                          /*    value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            } */
                          className="textarea textarea-bordered textarea-md w-full placeholder:text-secondary-content"
                        ></textarea>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn text-neutral bg-primary md:hover:text-primary m-auto min-w[240px]">
                          Reservar Ahora
                          <span className="material-symbols-outlined">
                            assignment_turned_in
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-8">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  <span className="material-symbols-outlined">close_small</span>
                </button>
              </form>
              {data && data.productImages.length > 0 && (
                <Carrousel data={data && data.productImages} />
              )}
            </div>
          </dialog>
        </div>
      </div>
    </section>
  );
};
