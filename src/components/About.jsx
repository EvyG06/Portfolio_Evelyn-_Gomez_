import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="container">
      <motion.h2 className="section-title mb-8" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
        Sobre mí
      </motion.h2>

      <motion.p className="max-w-3xl mx-auto text-center text-gray-700 mb-12 text-lg leading-relaxed"
        initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2}}>
        Soy <span className="text-primary font-semibold">Evelyn Gómez</span>, estudiante de Ingeniería de Sistemas apasionada por el desarrollo web,
        la ciberseguridad y la innovación tecnológica.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-3">
        <motion.div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-soft" whileHover={{scale:1.02}}>

          <h3 className="text-2xl font-semibold text-primary mb-4">🎓 Estudios</h3>

          <ul className="space-y-3 text-gray-800 text-sm md:text-base">

            <li><strong>Ingeniería de Sistemas</strong> — Universidad EIA <span className="block text-gray-500">(2024 – Actualmente)</span></li>

            <li><strong>Diplomado Purple Team</strong> — Universidad EIA <span className="block text-gray-500">(2025)</span></li>

            <li><strong>Certificación B2 Inglés</strong> — Colombo Americano <span className="block text-gray-500">(2023)</span></li>

            <li><strong>Curso complementario</strong>: Ciberdefensa & Seguridad Informática</li>
          </ul>

        </motion.div>

        <motion.div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-soft" whileHover={{scale:1.02}}>

          <h3 className="text-2xl font-semibold text-primary mb-4">💼 Habilidades</h3>

          <div className="grid grid-cols-2 gap-3 text-gray-800 text-sm md:text-base">
            <span>React</span><span>Node.js</span><span>Tailwind CSS</span><span>JavaScript (ES6+)</span><span>MySQL</span><span>Git</span><span>Seguridad Informática</span><span>Hacking Ético</span>
          </div>

        </motion.div>

        <motion.div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-soft" whileHover={{scale:1.02}}>
        
          <h3 className="text-2xl font-semibold text-primary mb-4">🎨 Hobbies</h3>
          <div className="hobbies">
            <div className="hobby"><span>🎨</span><p>Dibujo</p></div>

            <div className="hobby"><span>🖌️</span><p>Arte</p></div>

            <div className="hobby"><span>🎵</span><p>Música</p></div>

            <div className="hobby"><span>📚</span><p>Lectura</p></div>

            <div className="hobby"><span>🎮</span><p>Videojuegos</p></div>

            <div className="hobby"><span>💪</span><p>Gimnasio</p></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
