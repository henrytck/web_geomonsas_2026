'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Rocket, Globe, Zap } from 'lucide-react';

export default function XphereSection() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Fondo decorativo con un tono diferente (Cian/Morado) para diferenciarlo de GMS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-cyan-500/20 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna Texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-cyan-400 mb-6">
                <Rocket size={20} />
                <span className="uppercase tracking-[0.3em] text-xs font-bold">Proyecto Destacado</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Xphere Lab: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">El futuro de la visualización 3D</span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Más que un software, es una ecosistema digital diseñado para transformar datos geoespaciales complejos en experiencias inmersivas. Ideal para sectores inmobiliarios, industriales y gubernamentales que buscan llevar sus activos al gemelo digital.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Alta Performance</h4>
                    <p className="text-slate-500 text-sm">Visualización fluida de nubes de puntos y modelos 3D.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Acceso Global</h4>
                    <p className="text-slate-500 text-sm">Plataforma 100% web, sin instalaciones pesadas.</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://xpherelab.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/20"
              >
                Explorar Xphere Lab <ExternalLink size={20} />
              </a>
            </motion.div>

            {/* Columna Visual (Mockup) */}
                {/* Columna Visual (Video Mockup) */}
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 lg:mt-0"
            >
            {/* Contenedor del Video con efecto de profundidad */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-cyan-500/20 aspect-video">
                <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
                >
                <source src="/videos/xphere_demo.mp4" type="video/mp4" />
                Tu navegador no soporta el tag de video.
                </video>
                
                {/* Overlay sutil para que el video se integre al diseño oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Cuadro flotante (ajustado para que no tape el centro del video) */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 p-6 rounded-2xl shadow-2xl z-20 hidden sm:block">
                <div className="flex flex-col items-center">
                <p className="text-cyan-400 font-black text-4xl leading-none mb-2">99%</p>
                <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold text-center leading-tight">
                    Fidelidad <br /> Digital
                </p>
                </div>
            </div>

            {/* Efecto de resplandor detrás del video */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full -z-10 opacity-30" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}