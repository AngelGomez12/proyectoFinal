import { Route, Outlet, Routes, Navigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import useApi from '../hooks/hookApi';
import AddProducts from '../pages/AddProducts';
import Admin from '../pages/Admin';
export default function AdminRoutes() {


/* SUPONGO QUE HAY QUE SACAR ESTE COMPONENTE  'Admin' DE AQUÍ...
Y Hacer que Reemplace por completo el Home de User y Cliente */

  return (
    <Routes>
      <Route index path="/" element={
      <div className='min-h-[80vh] flex justify-center pt-[80px]'>
       {/*  <Link to='agregar-producto' className='btn btn-warning hover:bg-transparent hover:text-[#fff]'>Agregar Productos</Link> */}
        <Admin/>
        </div>
      } />
      <Route path="agregar-producto" element={<AddProducts/>} />

    </Routes>
  );
}
