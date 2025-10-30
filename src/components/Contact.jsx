import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

export default function Contact(){
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data) => {
    try {
      await fetch('https://formspree.io/f/mnnjbvzp', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) })
      reset()

      alert('Mensaje enviado. ¡Gracias!')
    } catch (e) {
      
      alert('Error al enviar.')
    }
  }

  return (
    <section id="contact" className="container">
      <motion.h2 className="section-title mb-6" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
        Contáctame
        
      </motion.h2>

      <div className="flex justify-center gap-6 mb-8">
        <a href="https://github.com/EvyG06" target="_blank" rel="noreferrer" className="transform hover:scale-110 transition">
          <img src="/github_logo_icon_145252.png" alt="GitHub" className="w-10 h-10 rounded-md"/>
        </a>
        <a href="https://www.linkedin.com/in/evelyn-gómez-886a16350" target="_blank" rel="noreferrer" className="transform hover:scale-110 transition">
          <img src="/linkedin_logo.jpg" alt="LinkedIn" className="w-10 h-10 rounded-md"/>
        </a>
        <a href="https://www.instagram.com/evelyng0108" target="_blank" rel="noreferrer" className="transform hover:scale-110 transition">
          <img src="/logo_instagram.jpg" alt="Instagram" className="w-10 h-10 rounded-md"/>
        </a>
      </div>

      <motion.form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft space-y-4"
        initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}}>

        <div className="grid md:grid-cols-2 gap-4">

          <input {...register('name',{required:true})} className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white/70" placeholder="Tu nombre" />

          <input type="email" {...register('email',{required:true})} className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white/70" placeholder="Tu correo" />
        </div>

        <textarea {...register('message',{required:true})} className="w-full border border-gray-200 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary bg-white/70" placeholder="Tu mensaje"></textarea>
       
        <button type="submit" className="btn-primary w-full md:w-auto">Enviar</button>

      </motion.form>
    </section>
  )
}
