import React from 'react'
import bgImage from '../assets/bankimages/bgimg.jpeg'
function BgImage() {
  return (
  <>
  
<div
  className="bg-cover bg-center absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-50 "
  style={{ backgroundImage: `url(${bgImage})` }}
>
   
  {/* <h1 className="text-white text-5xl font-bold tracking-widest text-center uppercase font-sans py-40 ">Welcome</h1> */}
</div>

  </>
  )
}

export default BgImage