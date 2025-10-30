import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex items-center justify-between py-3">
        <motion.a href="#hero" className="text-xl font-bold" whileHover={{scale:1.05}}>Evelyn Gómez</motion.a>
        <div className="hidden md:flex items-center gap-8">

          <a href="#about">Sobre mí</a>

          <a href="#future">A Futuro</a>

          <a href="#contact">Contacto</a>

        </div>
        <button className="md:hidden text-3xl text-gray-900" onClick={()=>setOpen(!open)}>☰</button>
      </div>
      {open && (
        <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} className="md:hidden flex flex-col items-center gap-4 py-4 bg-white/70 backdrop-blur-md">
          <a href="#about" onClick={()=>setOpen(false)}>Sobre mí</a>

          <a href="#future" onClick={()=>setOpen(false)}>A Futuro</a>
          
          <a href="#contact" onClick={()=>setOpen(false)}>Contacto</a>
        </motion.div>
      )}
    </nav>
  )
}
