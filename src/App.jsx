
import React from 'react'
import HeroSection from './components/HeroSection'
import Specialities from './components/specialities'
import BankDiscount from './components/BankDiscount'
import Gallery from './components/Gallery'
import CallToActionSection from './components/Call'


function App() {
  return (
  <>
  <HeroSection/>

  <Specialities/>
    <CallToActionSection/>
      <BankDiscount/>
  <Gallery/>


  </>
  )
}

export default App