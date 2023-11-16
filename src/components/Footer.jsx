import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">Maquinaria</header>
          <a className="link link-hover">Construcción</a>
          <a className="link link-hover">Agrícola / Forestal</a>
          <a className="link link-hover">Carga Útil</a>
          <a className="link link-hover">Infraestructura</a>
        </nav>
        <nav>
          <header className="footer-title">Empresa</header>
          <Link to="/" className="link link-hover">
            Inicio
          </Link>
          <a className="link link-hover">Contacto</a>
          <a className="link link-hover">Renta de Maquinaria</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Aviso legal</a>
          <a className="link link-hover">Política de privacidad</a>
          <a className="link link-hover">Política de cookies</a>
          <a className="link link-hover">Accesibilidad</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M19.8981 19.8C20.5461 19.8 21.0981 20.352 21.0981 21C21.0981 21.648 20.5461 22.2 19.8981 22.2H5.49811C4.85011 22.2 4.29811 21.648 4.29811 21C4.29811 20.352 4.85011 19.8 5.49811 19.8H19.8981ZM19.8981 18H5.49811C3.85411 18 2.49811 19.356 2.49811 21C2.49811 22.644 3.85411 24 5.49811 24H19.8981C20.6938 24 21.4568 23.6839 22.0194 23.1213C22.582 22.5587 22.8981 21.7957 22.8981 21C22.8981 20.2044 22.582 19.4413 22.0194 18.8787C21.4568 18.3161 20.6938 18 19.8981 18ZM22.8981 10.8H19.2981V6H13.2981L9.69811 10.8V16.8H24.0981L22.8981 10.8ZM11.5461 10.8L13.8981 7.8H16.8981V10.8H11.5461ZM9.41012 1.692L3.41011 0L0.098114 11.796C-0.309886 13.332 0.590114 14.928 2.13811 15.36L3.53011 15.744L7.47811 12.348L2.82211 11.052L5.07811 2.952L8.42611 3.888C9.09811 4.236 10.5501 5.208 11.4621 6.444L12.6981 4.8H13.2261C11.7141 2.892 9.51812 1.752 9.41012 1.692Z"
              fill="#A6ADBA"
            />
            <path
              d="M19.8981 19.8C20.5461 19.8 21.0981 20.352 21.0981 21C21.0981 21.648 20.5461 22.2 19.8981 22.2H5.49811C4.85011 22.2 4.29811 21.648 4.29811 21C4.29811 20.352 4.85011 19.8 5.49811 19.8H19.8981ZM19.8981 18H5.49811C3.85411 18 2.49811 19.356 2.49811 21C2.49811 22.644 3.85411 24 5.49811 24H19.8981C20.6938 24 21.4568 23.6839 22.0194 23.1213C22.582 22.5587 22.8981 21.7957 22.8981 21C22.8981 20.2044 22.582 19.4413 22.0194 18.8787C21.4568 18.3161 20.6938 18 19.8981 18ZM22.8981 10.8H19.2981V6H13.2981L9.69811 10.8V16.8H24.0981L22.8981 10.8ZM11.5461 10.8L13.8981 7.8H16.8981V10.8H11.5461ZM9.41012 1.692L3.41011 0L0.098114 11.796C-0.309886 13.332 0.590114 14.928 2.13811 15.36L3.53011 15.744L7.47811 12.348L2.82211 11.052L5.07811 2.952L8.42611 3.888C9.09811 4.236 10.5501 5.208 11.4621 6.444L12.6981 4.8H13.2261C11.7141 2.892 9.51812 1.752 9.41012 1.692Z"
            />
          </svg>
          <p className=" font-bold">Maquinaria Pro<br />
            <span className=" text-xs font-normal">Trabajo pesado a un clic</span>
          </p>
        </aside>
        <div className=" place-self-center">
          <p>
            {" "}
            <a className="link link-hover">@Copyright</a> Camada 1 Equipo 3
          </p>
        </div>
        <nav className="md:place-self-center md:justify-self-end">
        <div className=" flex items-center justify-end gap-2">
            {" "}
            <a className="link link-hover">Link al Repo: </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16.0001 2.66699C14.2491 2.66699 12.5153 3.01187 10.8976 3.68193C9.27996 4.35199 7.81011 5.33412 6.57199 6.57224C4.07151 9.07272 2.66675 12.4641 2.66675 16.0003C2.66675 21.8937 6.49341 26.8937 11.7867 28.667C12.4534 28.7737 12.6667 28.3603 12.6667 28.0003V25.747C8.97341 26.547 8.18675 23.9603 8.18675 23.9603C7.57341 22.4137 6.70675 22.0003 6.70675 22.0003C5.49341 21.1737 6.80008 21.2003 6.80008 21.2003C8.13341 21.2937 8.84008 22.5737 8.84008 22.5737C10.0001 24.6003 11.9601 24.0003 12.7201 23.6803C12.8401 22.8137 13.1867 22.227 13.5601 21.8937C10.6001 21.5603 7.49341 20.4137 7.49341 15.3337C7.49341 13.8537 8.00008 12.667 8.86675 11.7203C8.73341 11.387 8.26675 10.0003 9.00008 8.20033C9.00008 8.20033 10.1201 7.84033 12.6667 9.56033C13.7201 9.26699 14.8667 9.12033 16.0001 9.12033C17.1334 9.12033 18.2801 9.26699 19.3334 9.56033C21.8801 7.84033 23.0001 8.20033 23.0001 8.20033C23.7334 10.0003 23.2667 11.387 23.1334 11.7203C24.0001 12.667 24.5067 13.8537 24.5067 15.3337C24.5067 20.427 21.3867 21.547 18.4134 21.8803C18.8934 22.2937 19.3334 23.107 19.3334 24.347V28.0003C19.3334 28.3603 19.5467 28.787 20.2267 28.667C25.5201 26.8803 29.3334 21.8937 29.3334 16.0003C29.3334 14.2494 28.9885 12.5156 28.3185 10.8979C27.6484 9.2802 26.6663 7.81035 25.4282 6.57224C24.1901 5.33412 22.7202 4.35199 21.1025 3.68193C19.4849 3.01187 17.751 2.66699 16.0001 2.66699Z"
                fill="#A6ADBA"
              />
              <path
                d="M16.0001 2.66699C14.2491 2.66699 12.5153 3.01187 10.8976 3.68193C9.27996 4.35199 7.81011 5.33412 6.57199 6.57224C4.07151 9.07272 2.66675 12.4641 2.66675 16.0003C2.66675 21.8937 6.49341 26.8937 11.7867 28.667C12.4534 28.7737 12.6667 28.3603 12.6667 28.0003V25.747C8.97341 26.547 8.18675 23.9603 8.18675 23.9603C7.57341 22.4137 6.70675 22.0003 6.70675 22.0003C5.49341 21.1737 6.80008 21.2003 6.80008 21.2003C8.13341 21.2937 8.84008 22.5737 8.84008 22.5737C10.0001 24.6003 11.9601 24.0003 12.7201 23.6803C12.8401 22.8137 13.1867 22.227 13.5601 21.8937C10.6001 21.5603 7.49341 20.4137 7.49341 15.3337C7.49341 13.8537 8.00008 12.667 8.86675 11.7203C8.73341 11.387 8.26675 10.0003 9.00008 8.20033C9.00008 8.20033 10.1201 7.84033 12.6667 9.56033C13.7201 9.26699 14.8667 9.12033 16.0001 9.12033C17.1334 9.12033 18.2801 9.26699 19.3334 9.56033C21.8801 7.84033 23.0001 8.20033 23.0001 8.20033C23.7334 10.0003 23.2667 11.387 23.1334 11.7203C24.0001 12.667 24.5067 13.8537 24.5067 15.3337C24.5067 20.427 21.3867 21.547 18.4134 21.8803C18.8934 22.2937 19.3334 23.107 19.3334 24.347V28.0003C19.3334 28.3603 19.5467 28.787 20.2267 28.667C25.5201 26.8803 29.3334 21.8937 29.3334 16.0003C29.3334 14.2494 28.9885 12.5156 28.3185 10.8979C27.6484 9.2802 26.6663 7.81035 25.4282 6.57224C24.1901 5.33412 22.7202 4.35199 21.1025 3.68193C19.4849 3.01187 17.751 2.66699 16.0001 2.66699Z"
              />
            </svg>
            
        </div>
        </nav>
      </footer>
    </>
  );
};
