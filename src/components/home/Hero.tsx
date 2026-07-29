'use client';
import React from 'react';
import HeroMarquee from '@/src/components/home/HeroMarquee';
import { motion } from 'framer-motion';

export default function Hero() {

  // Función para desplazamiento suave asistido
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Fondo de Imagen Usando la imagen local segura de tu carpeta /public */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: `url('/services_2.JPG')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Tecnológicas</span> de Vanguardia
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Impulsamos tu empresa hacia el futuro con tecnología de punta y estrategias digitales personalizadas.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-blue-500/20 text-center cursor-pointer"
          >
            Empezar ahora
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-blue-400 text-white font-bold rounded-xl transition-all hover:bg-blue-400/10 text-center cursor-pointer"
          >
            Saber más
          </button>
        </div>
      </div>

      {/* BARRA DE CAPACIDADES */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="w-full absolute bottom-0 z-10"
      >
        <HeroMarquee />
      </motion.div>

    </section>
  );
}