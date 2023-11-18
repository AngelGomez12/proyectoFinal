import { Fragment, useState } from 'react'
import { TableListProduct } from '../components/ListProduct/TableListProduct';



function ListProduct() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='h-screen bg-neutral'>
    <TableListProduct/>
    </div>
    
  )
}

export  default ListProduct;
