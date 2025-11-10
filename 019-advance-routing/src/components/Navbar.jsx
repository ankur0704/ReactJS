import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' items-center flex py-4 px-8 bg-blue-400 justify-between'>
        <h2 className='text-xl font-bold'>ANKURR.CO</h2>
        <div className='flex gap-10'>
          <Link className='text-lg font-semibold' to='/'>Home</Link>
          <Link className='text-lg font-semibold' to='/about'>About</Link>
          <Link className='text-lg font-semibold' to='/Product'>Product</Link>
          <Link className='text-lg font-semibold' to='/Courses'>Courses</Link>
          
            

        </div>
    </div>
  )
}

export default Navbar