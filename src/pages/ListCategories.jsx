import { Fragment, useState } from 'react'
import {TableCategories} from '../components/ListCategories/TableCategories'



function ListProduct() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='h-screen bg-neutral'>
    <TableCategories/>
    </div>
    
  )
}

export  default ListProduct;