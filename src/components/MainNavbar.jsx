import React from 'react'
import kababjeeslogo from '../assets/icons/kababjeeslogo.png'

function MainNavbar() {
  return (
   <>
 
<div className='flex justify-center w-full bg-transparent py-2 sticky top-0 z-50 '>
    <nav className='container  py-2  text-white font-sans  border-gray-400 '>
        <ul className='flex flex-wrap justify-between items-center  text-lg font-semibold w-full'>
        <li  className='border-t-2 mt-4 mb-4 border-b-2 border-dashed   py-2'><a href="#">HOME</a></li>
        <li className='border-t-2 border-b-2 border-dashed  py-2'><a href="#">ABOUT US</a></li>
        <li className='border-t-2 border-b-2 border-dashed  py-2'><a href="#">MENU</a></li>
        <li className='border-t-2 border-b-2 border-dashed   py-2'><a href="#">LOCATION</a></li>

        <li className='border-none outline-none flex flex-wrap'><a href="#"><img src={ kababjeeslogo} alt="kababjeez logo" className='w-48  rounded-lg ' /></a></li>

        <li className='border-t-2 border-b-2 border-dashed   py-2'><a href="#">ORDER ONLINE</a></li>
        <li className='border-t-2 border-b-2 border-dashed   py-2'><a href="#">BANK DISCOUNT</a></li>
        <li className='border-t-2 border-b-2 border-dashed   py-2'><a href="#">CONTACT</a></li>

        </ul>
    </nav>
</div>



   </>
  )
}

export default MainNavbar;
