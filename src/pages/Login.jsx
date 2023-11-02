import LogoCode from "../components/LogoCode";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="flex flex-col gap-8">
          <LogoCode />

          <div className="hero-content flex-col lg:flex-row-reverse">
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
                </div>
                <p className="label-text my-4">
                    Aún no tienes cuenta?
                    <Link to="/Signup">
                    <a href="#" className="text-sm label-text-alt link font-bold text-accent link-hover">
                      {" "}
                      Crea tu cuenta aquí{" "}
                    </a>
                    </Link>
                  </p>
                  <a href="#" className="text-sm label-text-alt link link-hover">
                    Olvidaste tu contraseña?
                  </a>
                <div className="form-control mt-6">
                  <button className="btn bg-primary text-base-100 hover:bg-yellow-500">
                    INICIAR SESIÓN
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
export default Login;
