import React from 'react'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.jpeg'

function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-2 border-b-3 border-dashed border-gray-600 text-gray-100 fixed top-0 w-full bg-black z-50">
      
      {/* 👉 RIGHT SIDE (Icons) */}
      <div className="flex gap-5  font">
        <p>phone : 021 111 666 111</p>
        <p>mail : marketing@kababjeez.com</p>
      </div>
     

      {/* 👉 LEFT SIDE (Text) */}
       <div className="flex gap-4">
        <img src={facebook} alt="facebook" className="w-5 h-5" />
        <img src={instagram} alt="instagram" className="w-5 h-5" />
      </div>
    </div>
  )
}

export default Navbar
