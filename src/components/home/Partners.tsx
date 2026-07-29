'use client';
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "TESAmerica", logo: "/logo_tes.png" },
  { name: "eme", logo: "/eme.png" },
  { name: "enel", logo: "/enel.png" },
  { name: "chivor", logo: "/chivor.png" },
  { name: "4C", logo: "/4conceptos.png" },
  { name: "Innoveste", logo: "/innoveste_logo.png" },
  
];

const doubledPartners = [...partners, ...partners, ...partners]; // Triplicamos para un flujo eterno

export default function Partners() {
  return (
    <section id='aliados' className="py-24 bg-slate-950 border-t border-slate-900/50">
      <div className="container mx-auto px-6 mb-16">
        {/* Título unificado con el estilo de la web */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center" // Puedes cambiar a text-center si prefieres
        >
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Confianza y Colaboración
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Socios Estratégicos</span>
          </h3>
        </motion.div>
      </div>

      {/* Contenedor del Marquee */}
      <div className="relative flex overflow-hidden group py-4">
        {/* Máscara de desvanecimiento (Fade) */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25, // Un poco más rápido para dar dinamismo
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubledPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 md:w-48 h-16 md:h-20 mx-8 md:mx-12"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}