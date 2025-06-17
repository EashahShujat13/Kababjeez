import React from 'react'
import MainNavbar from './MainNavbar'
import Navbar from './Navbar'
import BackgroundVideo from './BgVideo'
import AboutUs from './AboutUs'
function HeroSection() {
  return (
    <>
    
    <section className="relative h-screen ">
       < BackgroundVideo/>
      
        <div className="relative z-10">
        <MainNavbar/>
        <Navbar/>
        </div>
      </section>

      {/* Other sections without video */}
      <section className="bg-white text-black p-10">
        <h2 className="text-2xl font-bold">Other Content</h2>
        <p>This section is not over the video.</p>
      </section>

    </>
  )
}

export default HeroSection
