import React from 'react'
import img1 from '../assets/bankimages/img1.jpg'
import img2 from '../assets/bankimages/img2.jpeg'

import img4 from '../assets/bankimages/img4.jpeg'
function Carousel() {
  return (
    <>
    <div className="absolute inset-0 flex flex-col justify-start items-center mt-20 z-10">
    <h1 className="text-white text-5xl font-bold tracking-widest uppercase font-sans text-center mb-2">
      Bank Discount
    </h1>
    <div className="bg-amber-500 w-52 h-1"></div>
  </div>
       
    <div className='flex  justify-center items-center h-screen p-4 gap-4 '>
  {/* Carousel 01 */}

   <div className="carousel rounded-box w-1/3 justify-center items-center ">
  <div className="carousel-item w-full ">
    <img
      src={ img1 }
      className="w-full"        
      alt="Tailwind CSS Carousel component" />
  </div>
  
</div>

  {/* Carousel 02*/}
 <div className="carousel rounded-box w-1/3 justify-center items-center">
  <div className="carousel-item w-full">
    <img
      src={ img2}
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  
</div>

{/* Carousel 03*/}
 <div className="carousel rounded-box w-1/3 justify-center items-center">
  <div className="carousel-item w-full">
    <img
      src={ img4}
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  
</div>


  
</div>

    </>
  )
}

export default Carousel;