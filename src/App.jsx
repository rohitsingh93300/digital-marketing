import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Testimonials/>
      <Contact/>
     
      <Footer/>
    </>
  )
}

export default App
