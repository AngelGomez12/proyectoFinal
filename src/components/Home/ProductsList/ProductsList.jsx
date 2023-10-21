import { useContext } from 'react'
import { ContextProducts } from '../../../contexts/ProductsList'
import Paginator from './components/Paginator'
import ProductCart from './components/ProductCart'

export default function ProductsList() {
    const { 
        productsViewed
      } = useContext(ContextProducts)
  return (
    <article className='min-h-[1428px] flex flex-col items-center gap-[60px] bg-[#2B323C]'>
        <h1 className='text-[30px] mb-[50px] mt-[112px] font-[700]'>Máquinas Disponibles en este momento</h1>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-x-[28px] gap-y-[32px] '>
            {productsViewed.length > 0 ? 
            productsViewed.map(product => <ProductCart key={product.id} {...product} />) : 
            <ProductsListSkeleton/>}
        </section>
        <Paginator />
    </article>
  )
}

const ProductsListSkeleton = () => {
    return (
        <div>cargando...</div>
    )
}
