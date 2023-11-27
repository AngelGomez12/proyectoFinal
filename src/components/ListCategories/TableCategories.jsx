import { useState, useEffect } from "react";
import FileUploadForm from "../AddProducts/components/FileUploadForm";
import { Alerts } from "../../utils/Alerts";
export const TableCategories = () => {
  const [productType, setProductType] = useState([]);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    description: "",
    extraDescription: "",
    productTypeImage: [], // Mantén esto como un array vacío
  });
  let formDataToSend = {};
  const [Alert, setAlert] = useState({
    color: "",
    text: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}productTypes`)
      .then((response) => response.json())
      .then((data) => {
        setProductType(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al cargar product", error);
      });
  }, []);
  const handleFileUpload = (file) => {
    const updatedFiles = [...files, file];
    setFiles(updatedFiles);

    const updatedFormData = { ...formData, productTypeImage: updatedFiles };
    setFormData(updatedFormData);

    const convertImagesToBase64 = () => {
      const base64DataArray = [];
      const imagePromises = updatedFormData.productTypeImage.map(
        (imageFile) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onload = (event) => {
              const base64Data = event.target.result.split(",")[1];
              base64DataArray.push(base64Data);
              resolve();
            };
            reader.onerror = reject;
          });
        }
      );

      Promise.all(imagePromises)
        .then(() => {
          setFormData({ ...formData, productTypeImage: base64DataArray });
        })
        .catch((error) => {
          console.error("Error al convertir imágenes a Base64:", error);
        });
    };

    convertImagesToBase64();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.description) {
      setAlert({
        color: "bg-error",
        text: "El nombre no puede estar vacío",
      });
      setShowAlert(true);
      return;
    }

    if (formData.productTypeImage.length < 1) {
      setAlert({
        color: "bg-error",
        text: "Debes agregar al menos una imagen",
      });
      setShowAlert(true);
      return;
    }

    if (!formData.extraDescription) {
      setAlert({
        color: "bg-error",
        text: "La descripción no puede estar vacía",
      });
      setShowAlert(true);
      return;
    }

    formDataToSend = {
      description: formData.description,
      extraDescription: formData.extraDescription,
      productImage: formData.productTypeImage.map((image) => ({
        productImage: image,
      })),
    };
console.log(productType);
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}productTypes/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      })
        .then((response) => response.json())
        .then((data) => {
          if (
            data.message &&
            data.message.indexOf("Ya existe un producto con el mismo nombre") >
              -1
          ) {
            setAlert({
              color: "bg-error",
              text: `Ya existe un producto con el mismo nombre: ${formData.description}`,
            });
            setShowAlert(true);
          } else {
            setProductType((prevProductType) => [...prevProductType, data]);
            console.log("Success:", data);
            setAlert({
              color: "bg-success",
              text: "Se ha agregado correctamente",
            });
            setShowAlert(true);
          }
        });
    } catch (error) {
      setAlert({
        color: "bg-error",
        text: "Error al agregar la máquina",
      });
      setShowAlert(true);
    }
  };

  const submitAndOut = (e) => {
    e.preventDefault();
    handleSubmit(e);
    navigate("/");
  };

  const handleDismissAlert = () => {
    setShowAlert(false);
  };

  const handleDeleteProduct = (productTypeId) => {
    // Send a DELETE request to the backend to remove the product with the given productId.
    fetch(`${import.meta.env.VITE_BACKEND_URL}productTypes/${productTypeId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Check if the response has content before attempting to parse JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          // If the response is not JSON, return an empty object or handle it accordingly
          return {};
        }
      })
      .then((data) => {
        // Update the state with the new list of products after deletion.
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting product", error);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div>
          <div className=" flex mr-9">
            <h1 className="text-3xl font-bold flex mb-8 justify-start relative right-1/4 ml-20	">
              Todas las Máquinas
            </h1>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-primary text-black "
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              + Crear Nueva Categoría
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-center">
                  Crear Nueva Categoría
                </h3>
                <div className="modal-action">
                  {showAlert && (
                    <Alerts
                      text={Alert.text}
                      bgColorClass={Alert.color}
                      duration={2000}
                      onDismiss={handleDismissAlert}
                    />
                  )}
                  <form onSubmit={handleSubmit} method="dialog">
                    <div className="flex">
                      <div className="flex flex-col mr-6">
                        <div className="flex-col py-8">
                          <label htmlFor="">Nombre de la Máquina</label>
                          <input
                            type="text"
                            placeholder="Nombre Común de la Máquina"
                            value={formData.description}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                description: e.target.value,
                              })
                            }
                            className="input w-full input-bordered placeholder:text-secondary-content"
                          />

                          <textarea
                            type="text"
                            placeholder="Agregá la descripción aquí"
                            value={formData.extraDescription}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                extraDescription: e.target.value,
                              })
                            }
                            className="textarea textarea-bordered textarea-md w-full placeholder:text-secondary-content"
                          ></textarea>
                        </div>
                      </div>
                      <FileUploadForm handleFileUpload={handleFileUpload} />
                    </div>
                    <div className="flex justify-end w-full gap-4 mt-8">
                      <button className="btn w-52">Agregar y salir</button>
                      <button
                        type="submit"
                        className="btn bg-primary w-52 text-neutral hover:text-gray-100"
                      >
                        Agregar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <table className="table w-3/5">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <div className="flex">
                    <label className="mr-8">
                      <label>ID</label>
                    </label>
                  </div>
                </th>
                <th className="flex">
                  Imagen
                  <div className="ml-6">Título de Categoría</div>
                </th>
                <th className="relative bottom-1">Descripción</th>
                <th className="relative bottom-1">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productType.slice(0, 7).map((product) => (
                <tr key={product.id}>
                  <th>
                    <div className="flex">
                      <label className="mr-8">
                        <label>{product.id}</label>
                      </label>
                    </div>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={`data:image/png;base64,${product.productTypeImage}`}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="ml-8">
                        <div className="font-bold ml-8">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="w-[220px] truncate ... ">
                      {product.extraDescription}
                    </p>
                  </td>
                  <th>
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn m-1 bg-inherit border-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-5 h-15 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          ></path>
                        </svg>
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[4] menu p-2 shadow bg-base-100 rounded-box w-50 font-thin"
                      >
                        <li>
                          <a>
                            <img
                              src="public\border_color (1).svg"
                              alt="Avatar Tailwind CSS Component"
                            />
                            Editar
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-red-600"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="18"
                              viewBox="0 0 16 18"
                              fill="none"
                            >
                              <path
                                d="M5.4 13.5L8 10.9L10.6 13.5L12 12.1L9.4 9.5L12 6.9L10.6 5.5L8 8.1L5.4 5.5L4 6.9L6.6 9.5L4 12.1L5.4 13.5ZM3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM13 3H3V16H13V3Z"
                                fill="#FF4343"
                              />
                            </svg>
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
      </div>
    </>
  );
};
