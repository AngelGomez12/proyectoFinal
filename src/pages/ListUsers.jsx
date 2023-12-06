import { Fragment, useState } from 'react'
import {TableUsers} from '../components/ListUsers/TableUsers'



function ListUsers() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-neutral'>
    <TableUsers/>
    </div>
  )
}

export  default ListUsers;