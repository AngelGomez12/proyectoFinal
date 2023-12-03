import { Fragment, useState } from 'react'
import{TableBookings} from "../components/ListBookings/TableBookings"



function ListProduct() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='h-screen bg-neutral'>
    <TableBookings/>
    </div>
    
  )
}

export  default ListProduct;