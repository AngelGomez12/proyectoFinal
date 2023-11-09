import { useEffect, useState } from "react";
import useApi from "../hooks/hookApi";
import FileUploadForm from "../components/AddProducts/components/FileUploadForm";
import SelectCharacters from "../components/AddProducts/components/SelectedCharacters";
import { Alerts } from "../utils/alerts";
import { useNavigate } from "react-router-dom";

export default function AddProducts() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [Alert, setAlert] = useState({
    color: "",
    text: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [reGet, setReget] = useState(0);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    tipoProducto: {
      id: "",
      descripcion: "",
    },
    marcaProducto: {
      id: "",
      descripcion: "",
    },
    imagenProductos: [{ ruta: "" }],
  });
  const { data: category } = useApi(
    `${import.meta.env.VITE_BACKEND_URL}productos/categorias`,
    {}
  );

  const { data, loading, error, fetchData } = useApi(
    `http://localhost:8081/api/products/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  useEffect(() => {
    if (category) {
      setCategorias(category);
    }
  }, []);

  const handleFileUpload = (file) => {
    setFiles([...files, file]);
    setFormData({ ...formData, imagenProductos: [...files, file] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // const data = new FormData();

    // data.append('nombre', formData.nombre);
    // data.append('precio', formData.precio);
    // data.append('descripcion', formData.descripcion);
    // data.append('tipoProducto', JSON.stringify(formData.tipoProducto));
    // data.append('marcaProducto', JSON.stringify(formData.marcaProducto));

    // formData.imagenProductos.forEach((imagenProducto, index) => {
    //   data.append(`imagenProductos[${index}]`, imagenProducto.url);
    // });
    // fetch(`${import.meta.env.VITE_BACKEND_URL}productos/crearProducto`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   //   Poner aca data cuando no este mock lo de files
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setReget(reGet + 1);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    if (!formData.nombre) {
      setAlert({
        color: "bg-error",
        text: "El nombre no puede estar vacío",
      });
      setShowAlert(true);
      return;
    }

    if (formData.imagenProductos.length < 1) {
      setAlert({
        color: "bg-error",
        text: "Debes agregar al menos una imagen",
      });
      setShowAlert(true);
      return;
    }

    if (!formData.descripcion) {
      setAlert({
        color: "bg-error",
        text: "La descripción no puede estar vacía",
      });
      setShowAlert(true);
      return;
    }

    if (!formData.precio) {
      setAlert({
        color: "bg-error",
        text: "El precio no puede estar vacío",
      });
      setShowAlert(true);
      return;
    }

    if (!formData.marcaProducto.descripcion) {
      setAlert({
        color: "bg-error",
        text: "Debes seleccionar una marca",
      });
      setShowAlert(true);
      return;
    }


    fetchData();
    setAlert({
      color: "bg-success",
      text: "Se ha agregado correctamente",
    });
    setShowAlert(true);
  };

  const submitAndOut = (e) => {
    e.preventDefault();
    handleSubmit(e);
    navigate("/");
  };

  const handleDismissAlert = () => {
    setShowAlert(false);
  };

  return (
    <article className="bg-neutral min-h-[80vh] flex justify-center items-center py-[90px] flex-col gap-4">
      {showAlert && (
        <Alerts
          text={Alert.text}
          bgColorClass={Alert.color}
          duration={2000}
          onDismiss={handleDismissAlert}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-base-100 flex justify-center flex-col md:w-[50%] gap-4 p-8 py-16 rounded-lg w-full"
      >
        <h1 className=" flex text-4xl font-bold justify-center">
          Agregar una Maquina
        </h1>
        <div className="flex-col py-11">
          <label htmlFor="">Nombre de la Máquina</label>
          <input
            type="text"
            placeholder="Tractor con Arado de Disco"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            className="input w-full input-bordered"
          />
        </div>
        <p>Imágenes (Recomendado 5 Imágenes mínimo)</p>
        <FileUploadForm handleFileUpload={handleFileUpload} />
        <div className="flex flex-col py-11">
          <label htmlFor="">Descripción de la Máquina</label>
          <textarea
            type="text"
            placeholder="Agregá la descripción aquí"
            value={formData.descripcion}
            onChange={(e) =>
              setFormData({ ...formData, descripcion: e.target.value })
            }
            className="textarea textarea-bordered textarea-md w-full"
          ></textarea>
        </div>
        <div className="flex gap-2 w-full py-11">
          <div className="flex flex-col w-1/3">
            <label htmlFor="">Precio de Renta por día</label>
            <input
              type="number"
              placeholder="Precio de Renta por día"
              value={formData.precio}
              onChange={(e) =>
                setFormData({ ...formData, precio: e.target.value })
              }
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="categoria">Categoría de Máquina</label>
            <select
              className="select select-bordered w-full max-w-xs"
              name="categoria"
              value={formData.tipoProducto.descripcion}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  tipoProducto: {
                    descripcion: e.target.value,
                  },
                })
              }
            >
              <option value="" disabled>
                Seleccione una categoría
              </option>
              {categorias.map((categoria, index) => (
                <option key={index} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-col">
            <label htmlFor="">Marca de la Máquina</label>
            <input
              type="text"
              placeholder="Marca de Producto"
              value={formData.marcaProducto.descripcion}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  marcaProducto: {
                    ...formData.marcaProducto.descripcion,
                    descripcion: e.target.value,
                  },
                })
              }
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <SelectCharacters />
        <div className="flex justify-end w-full gap-4">
          <button className="btn w-52" onClick={submitAndOut}>
            Agregar y salir
          </button>
          <button
            type="submit"
            className="btn bg-primary w-52 text-neutral hover:text-gray-100"
          >
            Agregar
          </button>
        </div>
      </form>
    </article>
  );
}
