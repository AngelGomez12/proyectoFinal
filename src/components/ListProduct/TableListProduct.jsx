import { useEffect, useState } from "react";
import { AgregarMaquina } from "./AgregarMaquina";
import Form from "./Form";
import { Spinner } from "../../utils/Spinner";

export const TableListProduct = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [specs, setSpecs] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(false);

  const openEditModal = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditingProduct(productToEdit);
    setShowModal(true);
  };

  const handleUpdateProduct = (updatedProduct) => {
    // Update the state with the edited product
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleDeleteProduct = (productId) => {
    // Send a DELETE request to the backend to remove the product with the given productId.
    fetch(`${import.meta.env.VITE_BACKEND_URL}products/${productId}`, {
      method: "DELETE",
    })
      .then((response) =>
        response.json(
          response.ok ? setDeleteProduct(true) : setDeleteProduct(false)
        )
      )
      .then((data) => {
        // Update the state with the new list of products after deletion.
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      })
      .catch((error) => {
        console.error("Error deleting product", error);
      });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al cargar product", error);
      });

    fetch(`${import.meta.env.VITE_BACKEND_URL}specs`)
      .then((response) => response.json())
      .then((data) => {
        // Mapea solo las propiedades "description" de los objetos
        setSpecs(data);
      })
      .catch((error) => {
        console.error("Error al cargar specs", error);
      });
  }, [showModal, deleteProduct]);

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
                <div className="ml-12">Nombre</div>
              </th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products === undefined ? (
              <div className="col-span-2">No tenemos productos en stock</div>
            ) : products.length === 0 ? (
              <div className="flex justify-center w-full">
                <Spinner />
              </div>
            ) : (
              products.slice(0, 7).map((product) => (
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
                    <div className="flex">
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
                        <span className="material-symbols-outlined">
                          more_horiz
                        </span>
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
