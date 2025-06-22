
import React from 'react'
import HeroSection from './components/HeroSection'
import Specialities from './components/specialities'
import BankDiscount from './components/BankDiscount'
import Gallery from './components/Gallery'
import CallToActionSection from './components/Call'
import './App.css';

import Contact from './components/ContactPAGE.JSX'
import Footer from './components/Footer'
import Navbar from './components/Navbar'



function App() {
  return (
  <>
  <Navbar/>
  <HeroSection/>

  <Specialities/>
    <CallToActionSection/>
      <BankDiscount/>
  <Gallery/>
<Contact/>
<Footer/>


  </>
  )
}

export default App