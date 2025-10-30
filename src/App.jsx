import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FutureProjects from './components/FutureProjects'
import Contact from './components/Contact'

export default function App(){
  return (

    <>
      <Navbar />
      <Hero />
      <About />
      <FutureProjects />
      <Contact />
    </>
    
  )
}
