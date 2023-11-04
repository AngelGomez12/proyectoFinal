import LogoCode from "../components/LogoCode";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  //Captura de Datos del Form SIGN UP

  const [userData, setUserData] = useState({
    firstname: { value: "", isOK: null },
    lastname: { value: "", isOK: null },
    email: { value: "", isOK: null },
    password: { value: "", isOK: null },
    terms: { value: false },
  });

  /*   const [show, setShow] = useState(false); */

  // Mensajes de Validación:

  /*   const errMessage = {
    errFirstName: "Nombre no Válido",
    errLastName: "Nombre no Válido",
    errEmail: "Porfa, danos tu Email correcto 🙂",
    errPass: "Tu contraseña no coincide",
  }; */

  // Manejadores:

  const handleNameData = (e) => {
    // Validar NOMBRE... > 3 letras
    const element = e.target;
    if (e.target.value.length >= 3 && e.target.value.charAt(0) !== " ") {
      element.classList.replace("input-error", "input-success");
      setUserData({
        ...userData,
        firstname: { value: e.target.value, isOK: true },
      });
    } else {
      element.classList.add("input-error");
      setUserData({
        ...userData,
        firstname: { value: "", isOK: false },
      });
    }
  };
  const handleLastNameData = (e) => {
    // Validar APELLIDO > 3 letras
    const element = e.target;
    if (e.target.value.length >= 3 && e.target.value.charAt(0) !== " ") {
      element.classList.replace("input-error", "input-success");
      setUserData({
        ...userData,
        lastname: { value: e.target.value, isOK: true },
      });
    } else {
      element.classList.add("input-error");
      setUserData({
        ...userData,
        lastname: { value: "", isOK: false },
      });
    }
  };
  const handleEmailData = (e) => {
    // Validar EMAIL con Regex común
    const element = e.target;
    const regex =
    /* /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; */
    /\S+@\S+\.\S+/;

    if (regex.test(e.target.value)) {
      element.classList.replace("input-error", "input-success");
      setUserData({
        ...userData,
        email: { value: e.target.value, isOK: true },
      });
    } else {
      element.classList.add("input-error");
      setUserData({
        ...userData,
        email: { value: "", isOK: false },
      });
    }
  };
  const handlePassData = (e) => {
    // Validar PASSWORD > 4 Caracteres
    const element = e.target;
    if (e.target.value.length >= 4 && e.target.value.charAt(0) !== " ") {
      element.classList.replace("input-error", "input-success");
      setUserData({
        ...userData,
        password: { value: e.target.value, isOK: true },
      });
    } else {
      element.classList.add("input-error");
      setUserData({
        ...userData,
        password: { value: "", isOK: false },
      });
    }
  };
  const handleTerms = (e) => {
    // Validar TERMINOS Y CONDICIONES...
    /*     console.log(e.target.checked); */
    setUserData({
      ...userData,
      terms: { value: e.target.checked },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userData.firstname.isOK === true &&
      userData.lastname.isOK === true &&
      userData.password.isOK === true &&
      userData.terms.value === true
    ) {
      console.log(
        `NUEVO USUARIO: \n
        Nombre: ${userData.firstname.value} \n
        Apellido: ${userData.lastname.value} \n
        Email: ${userData.email.value} \n
        Contraseña: ${userData.password.value} \n
        Aceptó?: ${userData.terms.value} \n
        \n ========================`
      );
    } else {
      console.log("Error en el Registro");
    }
  };

  return (
    <>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: "url(../../public/img/login-bg.jpg)",
        }}
      >
        <div className="hero min-h-screen bg-base-100 bg-opacity-80">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left mx-8 w-[380px]">
              <h1 className="text-5xl font-bold text-primary-content">
                Registráte Ya!
              </h1>
              <p className="text-xl py-6 w-full font-bold mb-8">
                Y Disfrutá de hacer <br />
                <span className="text-primary">
                  todo el trabajo pesado en un clic!
                </span>
              </p>
              <LogoCode />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nombre</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ingresá tu Nombre"
                    className="input input-bordered placeholder:text-secondary-content"
                    onChange={handleNameData}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Apellido</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ingresá tu Apellido"
                    className="input input-bordered placeholder:text-secondary-content"
                    onChange={handleLastNameData}
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
                    onChange={handleEmailData}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Crea tu Contraseña</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Mínimo de 4 carácteres"
                    className="input input-bordered placeholder:text-secondary-content"
                    onChange={handlePassData}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer flex-row-reverse justify-end gap-2">
                    <span className="label-text">
                      Acepto lo que tengo que aceptar
                    </span>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={handleTerms}
                    />
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
