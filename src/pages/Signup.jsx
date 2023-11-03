import LogoCode from "../components/LogoCode";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
   <div className="min-h-screen"
      style={{
        backgroundImage: "url(../../public/img/login-bg.jpg)",
      }}>

      <div className="hero min-h-screen bg-base-100 bg-opacity-80">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mx-8 w-[380px]">
            <h1 className="text-5xl font-bold text-primary-content">Registráte Ya!</h1>
            <p className="text-xl py-6 w-full font-bold mb-8">
              Y Disfrutá de hacer <br />
              <span className="text-primary">
                todo el trabajo pesado en un clic!
              </span>
            </p>
            <LogoCode />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nombre Completo</span>
                </label>
                <input
                  type="text"
                  placeholder="Dorian Battiato"
                  className="input input-bordered placeholder:text-secondary-content"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Ingresá tu email"
                  className="input input-bordered placeholder:text-secondary-content"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Crea tu Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="Crea una contraseña"
                  className="input input-bordered placeholder:text-secondary-content"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirma tu Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirmá tu contraseña"
                  className="input input-bordered placeholder:text-secondary-content"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label cursor-pointer flex-row-reverse justify-end gap-2">
                  <span className="label-text">
                    Acepto lo que tengo que aceptar
                  </span>
                  <input type="checkbox" className="checkbox" />
                </label>
              </div>
              <p className="label-text my-4">
                Ya tienes cuenta?
                <Link to="/Login">
                  <a
                    href="#"
                    className="text-sm label-text-alt link font-bold text-accent link-hover"
                  >
                    {" "}
                    Loguéate aquí{" "}
                  </a>
                </Link>
              </p>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-base-100 hover:bg-yellow-500">
                  CREAR CUENTA
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      </div>
    </>
  );
};
export default Signup;
