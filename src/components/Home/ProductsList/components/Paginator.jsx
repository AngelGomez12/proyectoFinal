import { useContext } from "react"
import { ContextProducts } from "../../../../contexts/ProductsList"

export default function Paginator() {
    const { 
        pagination: { page },
        handlerPageChange
      } = useContext(ContextProducts)

  return (
    <div className="join border-[1px] border-[#40454B] mb-[100px]">
        <button onClick={handlerPageChange} className={`${page === 1 ? 'btn-active bg-[#1D232A]' : 'bg-[#2B323C]'} border-none join-item btn`}>1</button>
        <button onClick={handlerPageChange} className={`${page === 2 ? 'btn-active bg-[#1D232A]' : 'bg-[#2B323C]'} border-none join-item btn`}>2</button>
        <button onClick={handlerPageChange} className={`${page === 3 ? 'btn-active bg-[#1D232A]' : 'bg-[#2B323C]'} border-none join-item btn`}>3</button>
        <button onClick={handlerPageChange} className={`${page === 4 ? 'btn-active bg-[#1D232A]' : 'bg-[#2B323C]'} border-none join-item btn`}>4</button>
    </div>
  )
}

