import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
export const AgregarMaquina = () => {

  


  return (
    <>
    <div className='flex  '>
   {/* Open the modal using document.getElementById('ID').showModal() method */}
   <Link to='agregar-producto'><button className="btn bg-primary text-black">+ Agregar Maquina</button></Link>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box " style={{ maxWidth: "none", width: "auto" }} >
    <h3 className="font-bold text-2xl text-center">Agregar una Máquina</h3>
    <div className="modal-action flex flex-col">
      <form method="dialog">
        <div className=''>
        
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