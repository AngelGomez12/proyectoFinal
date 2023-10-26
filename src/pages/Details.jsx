import { useParams, useNavigate } from "react-router-dom";
import { Carrousel } from "../components/Carrousel";
export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <section className="h-screen w-full flex justify-center items-center flex-col bg-neutral">
      <div className="w-4/5 mt-6">
        <div className="flex justify-between w-full mb-5">
          <div>
            <h1 className="text-4xl font-bold">Retroexcavadora</h1>
            <h3>Hitachi Us Zaxis 135</h3>
          </div>
          <button
            className="rounded h-12  flex items-center gap-4 border-2 px-4"
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
        <div className="flex gap-4 justify-center">
          <img src="../public/img/Rectangle-16.png" alt="Retroexcavadora" />
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-4 justify-center">
              <img src="../public/img/Rectangle-17.png" alt="Retroexcavadora" />
              <img src="../public/img/Rectangle-18.png" alt="Retroexcavadora" />
            </div>
            <div className="flex items-center gap-4 justify-center">
              <img src="../public/img/Rectangle-19.png" alt="Retroexcavadora" />
              <img src="../public/img/Rectangle-20.png" alt="Retroexcavadora" />
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
          <h2 className="text-primary text-2xl">
            Descripción general del Equipo
          </h2>
          <p>Precio: 1000$</p>
          <p>
            La retroexcavadora estándar de 60-89 CV (John Deere 310 / Case 580)
            es la máquina preferida para la mayoría de los proyectos de
            movimiento de tierras, como la excavación, el relleno, la carga y la
            excavación de zanjas. La retroexcavadora estándar es una herramienta
            de excavación variada, ideal para la construcción en general y para
            obras industriales o agrícolas, y puede realizar tareas de
            excavación profunda y es una de las máquinas de movimiento de
            tierras más alquiladas en el sector de la construcción. Diseñada
            para transportar objetos pesados, es una herramienta esencial para
            cualquier proyecto a gran escala.
          </p>
          <ul>
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
