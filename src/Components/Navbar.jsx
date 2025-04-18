import React from 'react'
import { IoBagCheckSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';


const Navbar = () => {

  const {itemAmount} = useSelector((state)=>state.cart)
  return (
    <nav>
    <div className='nav-container flex justify-around items-center bg-blue-400 h-20'>
    <h2 className='text-2xl'>React-redux</h2>
    <div>
      <IoBagCheckSharp  className='text-2xl'/>
      <p className='absolute top-4.5 right-[280px] bg-amber-600 rounded-full'>{itemAmount}</p>
    </div>

    </div>
    </nav>
  )
}

export default Navbar