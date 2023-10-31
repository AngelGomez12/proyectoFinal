import React, { useState } from "react";
import ProductCard from "../components/AddProducts/components/ProductCard";
import useApi from "../hooks/hookApi";

export default function AddProducts() {
  const [reGet, setReget] = useState(0);
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
  const { data: products } = useApi(
    `${import.meta.env.VITE_BACKEND_URL}productos`,
    {},
    reGet
  );

  const handleImageChange = (event) => {
    const selectedImages = event.target.files;

    const updatedImagenProductos = [...formData.imagenProductos];

    for (let i = 0; i < selectedImages.length; i++) {
      const imageFile = selectedImages[i];
      // Verifica si el archivo es una imagen (puedes agregar más validaciones según tus necesidades)
      if (imageFile.type.startsWith("image/")) {
        // Crea una URL temporal para la imagen
        const imageUrl = URL.createObjectURL(imageFile);
        updatedImagenProductos.push({
          ruta: imageUrl,
        });
      } else {
        console.log("No es una imagen válida: " + imageFile.name);
      }
    }

    setFormData({ ...formData, imagenProductos: updatedImagenProductos });
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
    fetch(`${import.meta.env.VITE_BACKEND_URL}productos/crearProducto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   Poner aca data cuando no este mock lo de files
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReget(reGet + 1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <article className="min-h-[80vh] flex justify-center items-center py-[90px] flex-col gap-4">
      <form
        onSubmit={handleSubmit}
        className=" flex justify-center flex-col md:w-[60%] gap-4 p-4 border rounded-lg w-full"
      >
        <h1>Agregar nuevo producto:</h1>
        <input
          className="rounded px-1"
          type="text"
          placeholder="Nombre del producto"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
        <input
          className="rounded px-1"
          type="number"
          placeholder="Precio"
          value={formData.precio}
          onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
        />
        <input
          className="rounded px-1"
          type="text"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={(e) =>
            setFormData({ ...formData, descripcion: e.target.value })
          }
        />
        <input
          className="rounded px-1"
          type="text"
          placeholder="Tipo de Producto"
          value={formData.tipoProducto.descripcion}
          onChange={(e) =>
            setFormData({
              ...formData,
              tipoProducto: {
                ...formData.tipoProducto.descripcion,
                descripcion: e.target.value,
              },
            })
          }
        />
        <input
          className="rounded px-1"
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
        />
        <div className="flex gap-4 flex-wrap sm:flex-nowrap">
          <div className="flex flex-col gap-1 overflow-hidden">
            {formData.imagenProductos.map((imagen, index) => (
              <input
                key={index}
                multiple
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            ))}
          </div>
          <div className="border w-full p-1 rounded flex flex-wrap items-center justify-end gap-1">
            {formData.imagenProductos.map(
              (imagen, index) =>
                imagen.ruta && (
                  <img
                    key={index}
                    className="object-contain border top-[-55px] right-0 rounded h-[60px]"
                    src={imagen.ruta}
                    alt="Preview"
                  />
                )
            )}
          </div>
        </div>

        <button
          className="bg-primary rounded w-[20%] ml-auto text-[#000]"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-[8px]">
        {products?.reverse()?.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </section>
    </article>
  );
}
