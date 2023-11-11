import React from 'react'
import SelectCharacters from "../AddProducts/components/SelectedCharacters";
export const Editar = () => {
  return (
    <>
   {/* Open the modal using document.getElementById('ID').showModal() method */}
<div className='flex font-thin'>
<button className="btn bg-transparent border-none w-5 no-hover h-5 font-thin capitalize text-base hover:bg-transparent " onClick={()=>document.getElementById('my_modal_1').showModal()}> Editar</button>
</div>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h1 className='text-lg font-bold mb-5'> Edita La Categoria</h1>
    <select className="select select-bordered w-full max-w-xs">
                        <option >Agricola/Forestal</option>
                        <option selected>Construccion</option>
                        <option>Carga</option>
                        <option>Transporte</option>
                    </select>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <input className="bg-primary rounded-lg w-20 py-2 text-black mr-5 cursor-pointer" type="submit" value="Agregar" />
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</>
  )
}
