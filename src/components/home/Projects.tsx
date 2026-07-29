'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Estudios básicos de gestión del riesgo - TUNJA",
    category: "Gestión del Riesgo",
    shortDesc: "Modelación de Avenidas Torrenciales y Planificación de Suelo Rural y Urbano en Tunja.",
    fullDesc: "Lideramos la consultoría técnica para la integración de la gestión del riesgo en la revisión general del Plan de Ordenamiento Territorial (POT) de Tunja. El proyecto se centró en la actualización detallada del análisis de avenidas torrenciales, elevando la precisión técnica y ampliando la escala de estudio en asentamientos rurales críticos.",
    location: "Tunja-Boyacá, Colombia",
    date: "2023",
    image: "/services_2.JPG" // Usa tus imágenes existentes
  },
  {
    id: 2,
    title: "Enfoque en Transformación Digital - BUENAVENTURA",
    category: "Gestión Territorial",
    shortDesc: "Modernización Cartográfica y Tecnológica de Buenaventura",
    fullDesc: "Lideramos el fortalecimiento de las capacidades de planificación para el Distrito de Buenaventura mediante la ejecución de un proyecto integral de cartografía básica y herramientas tecnológicas. A través de tecnologías de vanguardia como sensores LIDAR e imágenes aéreas, logramos la cobertura técnica de la cabecera municipal, centros poblados y áreas rurales. Este proyecto no solo entregó datos geoespaciales de alta precisión, sino que integró módulos avanzados de visualización 3D y análisis de gestión del riesgo, dotando al Distrito de una infraestructura digital robusta para la toma de decisiones territoriales y el desarrollo sostenible.",
    location: "Buenaventura-Valle del Cauca, Colombia",
    date: "2025",
    image: "/Buenaventura.png"
  },
  {
    id: 3,
    title: "Catastro Multipropósito",
    category: "Gestión Territorial",
    shortDesc: "Modernización de la base de datos geoespacial municipal.",
    fullDesc: "Implementación de metodologías SIG avanzadas para la actualización de linderos y valoración predial, mejorando la recaudación y la seguridad jurídica del territorio.",
    location: "Cundinamarca",
    date: "2024",
    image: "/services_3.JPG"
  },
  
  // Añade 3 o 4 proyectos más siguiendo esta estructura...
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="proyectos" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">Portafolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Éxito</span></h3>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group border border-slate-800"
            >
              <motion.img 
                src={project.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-slate-950/10 via-slate-950/10 to-transparent">
                <span className="text-blue-400  font-bold uppercase tracking-widest block mb-2">
                  {project.category}
                </span>
                {/* Título con altura fija para alineación */}
                <h4 className="text-xl font-bold text-white mb-2 h-[3.5rem] line-clamp-2 flex items-end">
                  {project.title}
                </h4>
                <div className="h-[3rem]"> {/* Contenedor de altura fija para la descripción */}
                  <p className="text-slate-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {project.shortDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de Detalle (Overlay) */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
              />
              
              <motion.div
                layoutId={`card-${selectedId}`}
                className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-[2rem] overflow-hidden relative z-10 flex flex-col md:flex-row"
              >
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <img src={selectedProject.image} className="w-full h-full object-cover" />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">{selectedProject.category}</span>
                  <h3 className="text-3xl font-bold text-white mt-4 mb-6">{selectedProject.title}</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                      <MapPin size={16} className="text-cyan-400" /> {selectedProject.location}
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                      <Calendar size={16} className="text-cyan-400" /> {selectedProject.date}
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-8">
                    {selectedProject.fullDesc}
                  </p>

                 {/* <button className="flex items-center gap-2 text-white font-bold group"> 
                    Ver Galería Completa <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>*/}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}