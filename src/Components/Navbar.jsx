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
      <p className='relative bottom-7.5 left-4 bg-amber-600 rounded-full text-center'>{itemAmount}</p>
    </div>

    </div>
    </nav>
  )
}

export default Navbar