import React from "react";
import { motion } from "framer-motion";

export default function FutureProjects() {
  const projects = [
    {
      title: "Ciberseguridad Financiera",
      image: "/ciberseguridad-empresas.jpg",
      description:
        "Plataforma integral de ciberseguridad financiera para proteger transacciones y operaciones bancarias contra amenazas como phishing, malware y ataques MITM. Enfoque en arquitectura segura y cifrado.",
    },
    {
      title: "Sistema Integral de Gestión de Datos",
      image: "/sistema-de-gestion-de-datos-min-1.jpg",
      description:
        "Sistema inteligente de Big Data y Analítica para transformar información en decisiones estratégicas mediante minería de datos y aprendizaje automático.",
    },
    {
      title: "Seguridad en la Red",
      image: "/background.png",
      description:
        "Monitoreo y protección de redes en tiempo real: detección, prevención y mitigación de ataques garantizando integridad y disponibilidad.",
    },
  ];

  return (
    <section id="future" className="container">
      <motion.h2
        className="section-title mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Proyectos a Futuro
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <motion.img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{p.description}</p>
            </div>
            
          </motion.div>

        ))}
      </div>
    </section>
  );
}
