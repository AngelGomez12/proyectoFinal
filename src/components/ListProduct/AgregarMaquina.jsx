import React from 'react'
import Form from './form'
export const AgregarMaquina = () => {
  return (
    <>
    <div className='flex  '>
   {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-primary text-black" onClick={()=>document.getElementById('my_modal_5').showModal()}>+ Agregar Maquina</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box overflow-hidden" style={{ maxWidth: "none", width: "auto" }} >
    <h3 className="font-bold text-2xl text-center">Agregar una Máquina</h3>
    <div className="modal-action flex flex-col">
      <form method="dialog">
        <div className=''>
        <Form/>
        </div>
      </form>
    </div>
  </div>
</dialog>
    </div>
    </>
    
  )
}


//<button className="btn bg-primary text-black w-26 " onClick={()=>document.getElementById('my_modal_1').showModal()}>+ Agregar Maquina</button>