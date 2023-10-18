import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="relative">
      <div className="flex justify-between items-center w-full h-10 text-white bg-slate-950">
        <Link to="/">
          <img src="" alt="Logo" />
        </Link>
        <div className="hidden gap-2 mr-2 sm:flex">
          <button>Crear Cuenta</button>
          <button>Iniciar Sesion</button>
        </div>
      </div>
    </header>
  );
};
