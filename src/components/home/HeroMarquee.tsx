'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scan,        // LIDAR
  Compass,     // Topografía
  Map,         // Cartografía
  Rotate3D,    // 360
  Grid,        // Ortofotomosaico
  Database,    // Catastro
  GitBranch    // Aerotriangulación
} from 'lucide-react';

const capabilities = [
  { name: "LIDAR", icon: <Scan size={20} /> },
  { name: "Topografía", icon: <Compass size={20} /> },
  { name: "Cartografía", icon: <Map size={20} /> },
  { name: "Documentación 360°", icon: <Rotate3D size={20} /> },
  { name: "Ortofotomosaico", icon: <Grid size={20} /> },
  { name: "Catastro Multipropósito", icon: <Database size={20} /> },
  { name: "Aerotriangulación", icon: <GitBranch size={20} /> },
];

const doubledItems = [...capabilities, ...capabilities];

export default function HeroMarquee() {
  return (
    <div className="w-full py-8 mt-12 border-y border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden relative">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {doubledItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center mx-10 group cursor-default">
            <div className="text-blue-400 mb-2 transition-transform group-hover:scale-110 duration-300">
              {item.icon}
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-white transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
      
      {/* Degradados laterales para suavizar la entrada/salida */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />
    </div>
  );
}