import React from 'react'
import CarouselAuto from './GalleryCorousel'

function Gallery() {
  return (
   <>
   <section className='relative h-screen bg-[#1C1C1C]'>
    <div className='relative z-10'>
     <CarouselAuto/>
    </div>
   </section>
   </>
  )
}

export default Gallery