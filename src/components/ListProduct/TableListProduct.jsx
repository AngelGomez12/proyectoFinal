import React, { useEffect } from "react";
import { AgregarMaquina } from "./AgregarMaquina.jsx";
import { useState } from "react";
export const TableListProduct = () => {
  const [product, setProduct] = useState([]);

  const handleUpdateProduct = (newProduct) => {
    setProduct(newProduct);
  };

  const handleDeleteProduct = (productId) => {
    // Send a DELETE request to the backend to remove the product with the given productId.
    fetch(`${import.meta.env.VITE_BACKEND_URL}products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        //       // Update the state with the new list of products after deletion.
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting product", error);
      });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}products`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al cargar product", error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="flex space-x-80">
          <h1 className="text-3xl font-bold flex mb-8 justify-start relative right-1/4 ml-20	">
            Todas las Máquinas
          </h1>
          <AgregarMaquina />
        </div>
        <table className="table w-3/5">
          {/* head */}
          <thead>
            <tr>
              <th>
                <div className="flex">
                  <label className="mr-8">
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label>ID</label>
                </div>
              </th>
              <th className="flex">
                Imagen
                <div className="ml-1">Nombre</div>
              </th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {product.slice(0, 7).map((product) => (
              <tr key={product.id}>
                <th>
                  <div className="flex">
                    <label className="mr-8">
                      <input type="checkbox" className="checkbox" />
                    </label>
                    <label>{product.id}</label>
                  </div>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={
                            "data:image/png;base64," +
                            product.productImages?.[0]?.productImage
                          }
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="ml-8">
                      <div className="font-bold ml-8">{product.name}</div>
                      <div className="font-light ml-8">
                        {product.productType.description}
                      </div>
                      <div className="text-sm opacity-50 ml-8">
                        {product.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className=" w-[220px] truncate ... ">
                    {product.description}
                  </p>
                </td>
                <th>
                  <p>${product.price}</p>
                </th>
                <th>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn m-1 bg-inherit border-none"
                    >
                      <span className="material-symbols-outlined">more_horiz</span>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[4] menu p-2 shadow bg-base-100 rounded-box w-50 font-thin"
                    >
                      <li>
                        <a>
                          <span className="material-symbols-outlined">
                            border_color
                          </span>
                          Editar
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-red-600"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <span className="material-symbols-outlined">
                            delete_forever
                          </span>
                          Borrar
                        </a>
                      </li>
                    </ul>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
