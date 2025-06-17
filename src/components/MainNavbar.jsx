import React from 'react'
import kababjeezlogo from '../assets/icons/kababjeezlogo.jpeg'

function MainNavbar() {
  return (
   <>
 

{/* Mainnavbar */}

<div className='flex justify-center w-full bg-amber-300 mt-10'>
    <nav className='container  py-2 '>
        <ul className='flex flex-wrap justify-between items-center  text-lg font-semibold text-gray-700 w-full'>
        <li  className='border-t-2 border-b-2 border-dashed mt-4 mb-4 border-black-500 py-4'><a href="#">HOME</a></li>
        <li className='border-t-2 border-b-2 border-dashed mt-4 mb-4 border-black-500'><a href="#">ABOUT US</a></li>
        <li className='border-t-2 border-b-2 border-dashed mt-4 mb-4 border-black-500'><a href="#">MENU</a></li>
        <li className='border-t-2 border-b-2 border-dashed mt-4 mb-4 border-black-500'><a href="#">LOCATION</a></li>
        <li className='border-none outline-none'><a href="#"><img src={kababjeezlogo} alt="kababjeez logo" className='w-20 ' /></a></li>
        <li className='border-t-2 border-b-2 border-dashed mt-4 mb-4 border-black-500'><a href="#">ORDER ONLINE</a></li>
        <li className='border-t-2 border-b-2 border-dashed mt-4 mb-4 border-black-500'><a href="#">BANK DISCOUNT</a></li>
        </ul>
    </nav>
</div>



   </>
  )
}

export default MainNavbar
