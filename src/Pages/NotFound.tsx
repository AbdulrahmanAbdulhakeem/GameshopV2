import React from 'react'
import { CiWarning } from "react-icons/ci";


const NotFound = () => {
  return (
    <div className='flex flex-col text-slate-100 items-center '>
        <CiWarning className='h-52 w-52'/>
      <h1 className='text-9xl p-5'>404</h1>
      <p className='text-5xl'>PAGE NOT AVAILABLE</p>
    </div>
  )
}

export default NotFound
