'use client'; // 1. IMPORTANTE: Framer Motion necesita que sea un Client Component

import React from 'react';
import { Layers, Plane, Database, View } from 'lucide-react';
import { motion } from 'framer-motion'; // 2. Importamos motion

const services = [
  {
    title: "Fotogrametría Avanzada",
    icon: <Plane className="w-8 h-8" />,
    description: "Captura de alta precisión mediante drones para modelos 3D y ortomosaicos detallados.",
    subItems: ["Modelado 3D", "Ortomosaicos", "Nubes de Puntos"],
    colorClass: "text-blue-400",
    glowClass: "group-hover:shadow-blue-500/20"
  },
  {
    title: "Documentación 360°",
    icon: <View className="w-8 h-8" />,
    description: "Inmersión digital mediante recorridos virtuales y gemelos digitales para inspección remota.",
    subItems: ["Gemelos Digitales", "Recorridos Virtuales", "Auditoría Remota"],
    colorClass: "text-cyan-400",
    glowClass: "group-hover:shadow-cyan-500/20"
  },
  {
    title: "Análisis Geoespacial",
    icon: <Layers className="w-8 h-8" />,
    description: "Procesamiento de datos para la toma de decisiones estratégicas y gestión territorial.",
    subItems: ["SIG Avanzado", "Análisis de Cambio", "Mapas Temáticos"],
    colorClass: "text-emerald-400",
    glowClass: "group-hover:shadow-emerald-500/20"
  },
  {
    title: "Gestión Catastral",
    icon: <Database className="w-8 h-8" />,
    description: "Estructuración y modernización de bases de datos alfanuméricas y espaciales.",
    subItems: ["Ordenamiento", "Base de Datos", "Seguridad Jurídica"],
    colorClass: "text-indigo-400",
    glowClass: "group-hover:shadow-indigo-500/20"
  }
];

const ServiceCard = ({ service }: { service: any }) => (
  <div className={`group h-full p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-600 transition-all duration-500 hover:-translate-y-2 shadow-2xl ${service.glowClass}`}>
    <div className={`${service.colorClass} mb-6 transition-transform duration-500 group-hover:scale-110`}>
      {service.icon}
    </div>
    <h3 className={`text-xl font-bold mb-3 text-white transition-colors group-hover:${service.colorClass}`}>
      {service.title}
    </h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-6">
      {service.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {service.subItems.map((item: string, i: number) => (
        <span key={i} className="text-[10px] uppercase tracking-tighter font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative min-h-screen flex items-center py-24 overflow-hidden bg-slate-950">
      
      {/* Fondos y Decoración */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] opacity-50"/>
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-900/20 blur-[120px] opacity-50" />
        <div 
          className="absolute inset-0 opacity-[0.4] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/services_3.JPG')` }}
        />
      </div>
        
      <div className="container mx-auto px-6 relative z-10">
        {/* Título animado */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-6">
            Nuestras Soluciones
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Tecnología de vanguardia para la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">exploración del territorio.</span>
          </h3>
        </motion.div>
        
        {/* Grid de tarjetas animadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // La animación ocurre solo la primera vez que se ve
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15 // Crea el efecto de "cascada"
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}