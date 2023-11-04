import LogoCode from "../components/LogoCode";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(../../public/img/login-bg.jpg)",
        }}
      >
        <div className="hero min-h-screen bg-base-100 bg-opacity-80">
          <div className="flex flex-col gap-6 max-w-xs sm:max-w-max " >
            <LogoCode />
            <div className="hero-content flex-col lg:flex-row-reverse gap-6">
              <div className="text-center lg:text-left w-96">
                <h1 className="text-4xl font-bold text-primary-content mt-6 lg:mt-0">
                  Entrá Ahora!
                </h1>
                <p className="text-lg py-2 max-w-full font-medium sm:text-xl sm:font-medium lg:py-4">
                  Y hacé todo tu <br />
                  <span className="text-primary">
                    trabajo pesado en un clic!
                  </span>
                </p>
              </div>
              <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-72 sm:w-full max-w-sm">
                <form className="card-body">
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
                      <span className="label-text">Contraseña</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Ingresá tu contraseña"
                      className="input input-bordered placeholder:text-secondary-content"
                      required
                    />
                  </div>
                  <p className="label-text my-4">
                    Aún no tienes cuenta? <br />
                    <Link to="/Signup">
                      <a
                        href="#"
                        className="text-sm label-text-alt link font-bold text-accent link-hover"
                      >
                        {" "}
                        Crea tu cuenta aquí{" "}
                      </a>
                    </Link>
                  </p>
                  <a
                    href="#"
                    className="text-sm label-text-alt link link-hover"
                  >
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
      </div>
    </>
  );
};
export default Login;
