import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCart({title, text, image, id}) {
  return (
    <article className='max-w-[600px] h-[300px] rounded-[16px] flex overflow-hidden bg-[#1D232A]'>
    <img className='w-1/2 object-cover' src={
        image.url || 'https://www.redlatambiocultural.org/cosmovisionyritos/wp-content/themes/koji/assets/images/default-fallback-image.png'
    } alt={image.alt} />
    <div className='p-[24px] flex flex-col justify-between items-end'>
        <div className='flex flex-col gap-[24px]'>
            <h3 className='text-[20px] font-[600]'>{title}</h3>
            <p>{text}</p>
        </div>
        <Link to={'/details/' + id} className="bg-[#FFE100] flex items-center text-[#1D232A] px-[12px] rounded-[8px] h-[32px] font-400">Ver Detalle</Link>
    </div>
</article>
  )
}
