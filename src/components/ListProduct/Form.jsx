import React, { useState, useEffect} from "react";
import FileUploadForm from "../AddProducts/components/FileUploadForm"; 
import SelectCharacters from "./SelectedCharacters";
import { Alerts } from "../../utils/alerts";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/hookApi";

function Form({ showButtons}) {
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
  const { data } = useApi(
    `${import.meta.env.VITE_BACKEND_URL}productTypes`,
    {}
  );

  useEffect(() => {
    if (data) {
      setCategorias(data);
    }
  }, [data]);

  

console.log(categorias);
  const handleFileUpload = (file) => {
    setFiles([...files, file]);
    setFormData({ ...formData, imagenProductos: [...files, file] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

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

    const { data, loading, error, fetchData } = useApi(
      `${import.meta.env.VITE_BACKEND_URL}productos/crearProducto`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
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

     

    const handleCancelar = () => {
        // Aquí puedes agregar el código necesario para cerrar el formulario, por ejemplo, ocultándolo o eliminándolo del DOM.
        // Por ejemplo:
        document.getElementById("miFormulario").style.display = "none";
      }
      

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form flex flex-col">
                    <div className="mb-8">
                    <p>Nombre de la Maquina</p>
                    <input type="text" placeholder="Nombre de la Maquina" className="input input-bordered w-full max-w-screen-md"  value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            } />
                    </div>
                    <div className="mb-9">
                    
                    <p className="mb-9 flex">Imágenes <div className="ml-1 text-gray-500"> (Recomendado 5 Imágenes mínimo)</div></p>
                    
                    <FileUploadForm handleFileUpload={handleFileUpload} />
                    </div>
                    
                    <div className="mb-8 w-full ">
                    <p>Descripción de la Máquina</p>
                    <input type="text" placeholder="Agregá la descripción aquí" className="input input-bordered w-screen max-w-2xl  pt-5 pr-48 pb-20" value={formData.descripcion}
            onChange={(e) =>
              setFormData({ ...formData, descripcion: e.target.value })
            }/>
                    </div>
                
                    <div className="flex">
                        <div className="flex flex-col w-80">
                    <p>Precio de Renta por día </p>
                    <input type="text" placeholder="$" className="input input-bordered w-full max-w-xs"
                    value={formData.precio}
                    onChange={(e) =>
                      setFormData({ ...formData, precio: e.target.value })
                    }
                    />
                    </div> 
                    <div className="flex flex-col ml-10 w-80">
                    <p>Categoría de Máquina</p>
                    <select
                        className="select select-bordered w-full max-w-xs"
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
                    <option disabled value="">
                    Seleccione una categoría
                    </option>
                    {categorias.map((categoria, index) => (
                <option key={index} value={categoria}>
                  {categoria.description}
                </option>
              ))}
                    </select>
                    </div>
                    <div className="flex flex-col ml-10 w-80">
                    <p>Marca de la Máquina</p>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={formData.marcaProducto.descripcion}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  marcaProducto: {
                    ...formData.marcaProducto.descripcion,
                    descripcion: e.target.value,
                  },
                })
              } />
                    </div>
                    </div>
                    <div className="flex flex-col mb-9 mt-11 ">
                    <p className="mb-3 flex ">Caracteristicas de la Máquina <div className="ml-1 text-gray-500">(Selecciona todas las que apliquen)</div></p>
                    {<SelectCharacters/>} 
                    </div>
                    
                    {showButtons && (
                <div className="flex justify-between items-center">
                    <div>
                        <button className="bg-base100 mr-16">Cancelar</button>
                        <input className="bg-primary rounded-lg w-40 py-2 text-black mr-5 cursor-pointer" type="submit" value="Agregar" />
                    </div>
                </div>
            )}
                </div>
                
            </form>
            
        </div>
    );
}

export default Form;
