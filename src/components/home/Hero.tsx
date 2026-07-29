'use client';
import React from 'react';
import Image from 'next/image';
import HeroMarquee from '@/src/components/home/HeroMarquee';
import { motion } from 'framer-motion';



export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
          alt="Tecnología de Vanguardia GMS"
          fill
          priority // Carga esta imagen primero que todo
          className="object-cover opacity-100"
        />
      </div>
 
      <div className="relative z-20 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Tecnológicas</span> de Vanguardia
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Impulsamos tu empresa hacia el futuro con tecnología de punta y estrategias digitales personalizadas.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
            Empezar ahora
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-blue-400 text-white font-bold rounded-xl transition-all hover:bg-blue-400/10">
            Saber más
          </button>
        </div>
      </div>

      {/* AQUÍ INSERTAMOS LA BARRA DE CAPACIDADES */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="w-full absolute bottom-0" // La pegamos al fondo del hero
      >
        <HeroMarquee />
      </motion.div>


    </section>
  );
}