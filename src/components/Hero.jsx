import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  const bg = "/background.png"
  const yo = "/yo.jpg"
  return (
    <section
      id="hero"
      className="hero text-white"
      style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed', backgroundSize:'cover', backgroundPosition:'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-white/0 to-white/0"></div>
      <motion.img
      
        src={yo}
        alt="Evelyn Gómez"

        className="w-56 h-56 md:w-60 md:h-60 rounded-full border-4 border-white shadow-2xl relative z-10 object-cover"

        initial={{ opacity: 0, scale: 0.85 }}

        animate={{ opacity: 1, scale: 1 }}

        transition={{ duration: 1.1 }}
      />
      <motion.h1 className="text-4xl md:text-5xl font-bold mt-6 relative z-10 text-white drop-shadow" initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.9 }}>
        ¡Hola! Soy <span className="text-[#FFE1E1]">Evelyn Gómez</span>
      </motion.h1>

      <motion.p className="text-lg md:text-xl mt-3 max-w-xl relative z-10 text-white/95" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}>
        Estudiante de Ingeniería de Sistemas apasionada por el desarrollo web y la ciberseguridad.
      </motion.p>

      <motion.a href="#about" className="btn-primary mt-7 relative z-10" whileHover={{ scale: 1.04 }} transition={{ type:'spring', stiffness:200 }}>
        Ver más sobre mí
      </motion.a>

    </section>
  )
}
