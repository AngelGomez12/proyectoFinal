import React, { useState, useEffect } from "react";
import FileUploadForm from "../AddProducts/components/FileUploadForm";
import SelectCharacters from "./SelectedCharacters";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/hookApi";

function Form({ showButtons, editingProduct, onUpdateProduct }) {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [Alert, setAlert] = useState({
    color: "",
    text: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    nombre: editingProduct.name,
    precio: editingProduct.price,
    descripcion: editingProduct.description,
    productType: {
      id: editingProduct.productType.id,
      descripcion: editingProduct.productType.description,
    },
    brand: {
      id: editingProduct.brand.id,
      description: editingProduct.brand.description,
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

  const handleFileUpload = (file) => {
    setFiles([...files, file]);
    setFormData({ ...formData, imagenProductos: [...files, file] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    const formDataToSend = {
      name: formData.nombre,
      price: parseInt(formData.precio),
      description: formData.descripcion,
      productType: {
        id: parseInt(formData.productType.id),
      },
      brand: {
        description: formData.brand.description,
      },
      productImages: (formData.imagenProductos || []).map((image) => ({
        productImage: image,
      })),
    };

    const url = `${import.meta.env.VITE_BACKEND_URL}products/${editingProduct.id}`;

    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      console.log("Respuesta del servidor:", res);

      if (!res.ok) {
        console.error("Error en la solicitud. Estado:", res.status);
        setAlert({
          color: "bg-error",
          text: "Error al editar la máquina",
        });
        setShowAlert(true);
        return;
      }

      const updatedProduct = await res.json();
      console.log("Success:", updatedProduct);
      setAlert({
        color: "bg-success",
        text: "Se ha editado correctamente",
      });
      setShowAlert(true);

      // Call the callback function to update the state in the parent component
      onUpdateProduct(updatedProduct);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setAlert({
        color: "bg-error",
        text: "Error al editar la máquina",
      });
      setShowAlert(true);
    }
  };

  const handleDismissAlert = () => {
    setShowAlert(false);
  };

  const handleCancelar = () => {
    // Close the modal or perform any other necessary action
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form flex flex-col">
          <div className="mb-8">
            <p>Nombre de la Maquina</p>
            <input
              type="text"
              placeholder="Nombre de la Maquina"
              className="input input-bordered w-full max-w-screen-md"
              value={formData.nombre}
              onChange={(e) => setFormData({  ...formData, nombre: e.target.value  })}
            />
          </div>
          <div className="mb-9">
            <p className="mb-9 flex">
              Imágenes{" "}
              <div className="ml-1 text-gray-500">
                {" "}
                (Recomendado 5 Imágenes mínimo)
              </div>
            </p>

            <FileUploadForm handleFileUpload={handleFileUpload} />
          </div>

          <div className="mb-8 w-full ">
            <p>Descripción de la Máquina</p>
            <input
              type="text"
              placeholder="Agregá la descripción aquí"
              className="input input-bordered w-screen max-w-2xl  pt-5 pr-48 pb-20"
              value={editingProduct.description}
              onChange={(e) =>
                setFormData({ ...formData, descripcion: e.target.value })
              }
            />
          </div>

          <div className="flex">
            <div className="flex flex-col w-80">
              <p>Precio de Renta por día </p>
              <input
                type="text"
                placeholder="$"
                className="input input-bordered w-full max-w-xs"
                value={editingProduct.price}
                onChange={(e) =>
                  setFormData({ ...formData, precio: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col ml-10 w-80">
              <p>Categoría de Máquina</p>
              <select
                className="select select-bordered w-full max-w-xs"
                value={formData.productType}
                onChange={(e) => {
                  setFormData({ ...formData, productType: e.target.value });
                  console.log(formData); // Check the updated state
                }}
                
              >
                <option disabled value="">
                  Seleccione una categoría
                </option>
                {categorias.map((categoria, index) => (
                  <option key={index} value={categoria.id}>
                    {categoria.description}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col ml-10 w-80">
              <p>Marca de la Máquina</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={formData.brand.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    brand: {
                      ...formData.brand.description,
                      description: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col mb-9 mt-11 ">
            <p className="mb-3 flex ">
              Caracteristicas de la Máquina{" "}
              <div className="ml-1 text-gray-500">
                (Selecciona todas las que apliquen)
              </div>
            </p>
            {<SelectCharacters />}
          </div>

          {showButtons && (
            <div className="flex justify-between items-center">
              <div>
                <button className="bg-base100 mr-16">Cancelar</button>
                <input
                  className="bg-primary rounded-lg w-40 py-2 text-black mr-5 cursor-pointer"
                  type="submit"
                  value="Agregar"
                  
                />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
