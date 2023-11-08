import { Link } from 'react-router-dom';

const Admin = () => {
    return (
      <>
      <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col-reverse  lg:flex-row-reverse ">
      <img src="../../public/img/admin-home.jpg" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-4xl font-bold">Gestiona el negocio de manera fácil</h1>
        <p className="py-6">¿Qué necesitás hacer?</p>
        <div className="flex flex-wrap gap-4 max-w-2xl">
        <Link to='agregar-producto'>
        <button className="btn bg-primary w-72 text-neutral hover:text-gray-100">Agregar Máquina</button>
        </Link>
        <button className="btn btn-outline w-72 btn-disabled ">Administrar Maquinaria</button>
        <button className="btn btn-outline w-72 btn-disabled">Gestionar Categorías</button>
        <button className="btn btn-outline w-72 btn-disabled">Gestionar Características</button>
        <button className="btn btn-outline w-72 btn-disabled">Administrar Usuarios</button>
        </div>
      </div>
    </div>
  </div>
  </>
    )
  }
  export default Admin