import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCart({nombre, descripcion, image, id}) {
  return (
    <article className='max-w-[600px] min-h-[300px] rounded-[16px] flex flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap overflow-hidden bg-[#1D232A]'>
    <img className='h-[60%] sm:h-[unset] w-full sm:w-1/2 md:w-full md:h-[55%] lg:h-[unset] lg:w-[55%] object-cover' src={
        image?.url || `https://picsum.photos/id/${id}/300` || 'https://www.redlatambiocultural.org/cosmovisionyritos/wp-content/themes/koji/assets/images/default-fallback-image.png'
    } alt={image?.alt} />
    <div className='p-[24px] w-full flex flex-col justify-between items-end gap-[8px] overflow-hidden'>
        <div className='w-full flex flex-col gap-[24px]'>
            <h3 className='text-[20px] font-[600]'>{nombre}</h3>
            <p className='text-ellipsis overflow-hidden'>{descripcion}</p>
        </div>
        <Link to={'/details/' + id} className="bg-[#FFE100] flex items-center text-[#1D232A] px-[12px] rounded-[8px] h-[32px] font-400">Ver Detalle</Link>
    </div>
</article>
  )
}
