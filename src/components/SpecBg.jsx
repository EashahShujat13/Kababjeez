import React from 'react'
import bgImage from '../assets/Specbg/pic1.jpg'
function BgImage1() {
  return (
  <>
  
<div
  className="bg-cover bg-center absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-50 "
  style={{ backgroundImage: `url(${bgImage})` }}
>

</div>

  </>
  )
}

export default BgImage1