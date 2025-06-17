import React from 'react'
import img1 from '../assets/bankimages/img1.jpg'
import img2 from '../assets/bankimages/img2.jpeg'
import img3 from '../assets/bankimages/img3.jpeg'

function Carousel() {
  return (
    <>
    <div className='flex  justify-center items-center h-screen p-4 gap-4 '>
  {/* Carousel 01 */}

   <div className="carousel rounded-box w-98 justify-center items-center ">
  <div className="carousel-item w-full ">
    <img
      src={ img1 }
      className="w-full"        
      alt="Tailwind CSS Carousel component" />
  </div>
  
</div>

  {/* Carousel 02*/}
 <div className="carousel rounded-box w-98 justify-center items-center">
  <div className="carousel-item w-full">
    <img
      src={ img2}
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  
</div>

{/* Carousel 03*/}
 <div className="carousel rounded-box w-98 justify-center items-center">
  <div className="carousel-item w-full">
    <img
      src={ img3}
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  
</div>


  
</div>

    </>
  )
}

export default Carousel;
