import React, { useState } from "react";
import FileUploadForm from "../AddProducts/components/FileUploadForm"; 
import SelectCharacters from "../AddProducts/components/SelectedCharacters";

function Form({onUpdateProduct}) {
    const[error,setError] = useState("");

    const [formData, setFormData] = useState({ nombre: '', precio: '' });
    
    const handleCancelar = () => {
        // Aquí puedes agregar el código necesario para cerrar el formulario, por ejemplo, ocultándolo o eliminándolo del DOM.
        // Por ejemplo:
        document.getElementById("miFormulario").style.display = "none";
      }
      

    function handleSubmit(e) {
        e.preventDefault();

        if(!formData.nombre.trim() || !formData.precio.trim()){
            setError(" Por favor chequea que la informacion sea correcta")
        }else{
            
            onUpdateProduct(formData)
            setFormData({nombre:'', precio:''})
            setError("")
        }
       
    }

    return (
        <div>
    
            <form onSubmit={handleSubmit}>
                <div className="form flex flex-col">
                    <div className="mb-8">
                    <p>Nombre de la Maquina</p>
                    <input type="text" placeholder="Nombre de la Maquina" className="input input-bordered w-full max-w-screen-md"
                         value={formData.nombre}
                         onChange={(e) =>
                           setFormData({ ...formData, nombre: e.target.value })
                         }
                    />
                    </div>
                    <div className="mb-9">
                    <p className="mb-9">Imágenes (Recomendado 5 Imágenes mínimo)</p>
                    <FileUploadForm/>
                    </div>
                    
                    <div className="mb-8 w-full ">
                    <p>Descripción de la Máquina</p>
                    <input type="text" placeholder="Agregá la descripción aquí" className="input input-bordered w-screen max-w-2xl  pt-5 pr-48 pb-20"/>
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
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Agricola/Forestal</option>
                        <option>Construccion</option>
                        <option>Carga</option>
                        <option>Transporte</option>
                    </select>
                    </div>
                    <div className="flex flex-col ml-10 w-80">
                    <p>Marca de la Máquina</p>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                    </div>
                    </div>
                    <div className="flex flex-col mb-9 mt-11 w-80">
                    <p>Marca de la Máquina</p>
                    <SelectCharacters/>
                    </div>
                    
                    <div className="flex justify-between items-center"> 
                    <div>
                    {error && <p style={{color:"red"}}>{error}</p>}
                    </div>
                    <div>
                    <button className="bg-base100 mr-16" onClick={handleCancelar}>Cancelar</button>
                    <input className="bg-primary rounded-lg w-40 py-2 text-black mr-5 cursor-pointer" type="submit" value="Agregar" />
                    </div>
                    </div>
                </div>
                
            </form>
            
        </div>
    );
}

export default Form;
