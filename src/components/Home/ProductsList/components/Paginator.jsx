import { useContext } from "react"
import { ContextProducts } from "../../../../contexts/ProductsList"

export default function Paginator() {
    const { 
        pagination: { page },
        handlerPageChange
      } = useContext(ContextProducts)

  return (
    <div className="join border-[1px] border-[#40454B] mb-[100px]">
        {/*Aca deberia haber hasta 4 botones, que se muestren en base a si existe ese paginado y que tengan el valor inicio,  page-1, page, page+1, fin  */}
        <button onClick={() => page !== 1 && handlerPageChange(1)} className={`${page === 1 ? 'btn-active bg-[#1D232A]' : 'bg-[#2B323C]'} border-none join-item btn`}>1</button>
        <button onClick={() => page !== 2 && handlerPageChange(2)} className={`${page === 2 ? 'btn-active bg-[#1D232A]' : 'bg-[#2B323C]'} border-none join-item btn`}>2</button>
        <button onClick={() => page !== 3 && handlerPageChange(3)} className={`${page === 3 ? 'btn-active bg-[#1D232A]' : 'bg-[#2B323C]'} border-none join-item btn`}>3</button>
        {/* <button onClick={() => handlerPageChange(4)} className={`${page === 4 ? 'btn-active bg-[#1D232A]' : 'bg-[#2B323C]'} border-none join-item btn`}>4</button> */}
    </div>
  )
}

