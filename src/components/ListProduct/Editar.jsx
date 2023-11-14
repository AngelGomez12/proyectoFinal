import React, { useEffect , useState} from 'react'
import useApi from '../../hooks/hookApi';
import { AgregarMaquina } from './AgregarMaquina';
import Form from './Form'
export const Editar = () => {
  const [productData, setProductData] = useState(null);
  const[formData,setFormData] = useState({
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
})


const handleReset = () => {
  // Aquí puedes agregar el código necesario para resetear el formulario.
  setFormData({  nombre: "",
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
  imagenProductos: [{ ruta: "" }],});
  setError('');
};
 



  return (
    <>
   {/* Open the modal using document.getElementById('ID').showModal() method */}
<div className='flex font-thin'>
<button className="btn bg-transparent border-none w-5 no-hover h-5 font-thin capitalize text-base hover:bg-transparent " onClick={()=>document.getElementById('my_modal_1').showModal()}> Editar</button>
</div>
<dialog id="my_modal_1" className="modal ">
  <div className="modal-box" style={{ maxWidth: "none", width: "auto" }}>
     <Form showButtons={false}/>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <div className="flex justify-between items-center"> 
                    <div>
                    <button className="bg-base100 mr-16" onClick={handleReset}>resetear</button>
                    <input className="bg-primary rounded-lg w-40 py-2 text-black mr-5 cursor-pointer" type="submit" value="Agregar"/>
                    </div>
                    </div>
      </form>
    </div>
  </div>
</dialog>
</>
  )
}








  // const handleTypeChange = (e) => {
  //   setSelectedType(e.target.value);
  // };
  // const handleUpdateProduct = () => {
  //   if (!selectedType) {
  //     console.error('Selected type is undefined.');
  //     return;
  //   }
  
  //   // Update the product type in the database using a PUT request
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}products/${productId}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       nombre: "",
  //       precio: "",
  //       descripcion: "",
  //       tipoProducto: {
  //         id: "",
  //         descripcion: selectedType, // Update with the selected type
  //       },
  //       marcaProducto: {
  //         id: "",
  //         descripcion: "",
  //       },
  //       imagenProductos: [{ ruta: "" }],
  //     }),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Ensure that productType is present in the response data
  //       const updatedProductType = data?.tipoProducto?.descripcion || "";
  
  //       // Update the state with the new product type
  //       onProductUpdate(updatedProductType);
  
  //       // Close the modal
  //       document.getElementById('my_modal_1').close();
  //     })
  //     .catch((error) => {
  //       console.error('Error updating product type', error);
  //     });
  // };
  