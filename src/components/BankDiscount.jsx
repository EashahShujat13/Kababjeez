import React from 'react'
import Carousel from './Carousel';
import BgImage from './BgImage';

function BankDiscount() {
  return (
    <>
    <section className='relative h-screen'>
    <BgImage/>
    <div className='relative z-10'>
        <Carousel/>
    </div>
    
    </section>
    </>
  )
}

export default BankDiscount;
