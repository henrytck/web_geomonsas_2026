// Ruta: src/components/layout/Navbar.tsx
'use client'; 
import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista de enlaces internos de navegación completa
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Aliados', href: '#aliados' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-950/80 backdrop-blur-md shadow-xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center">
              <img 
                className="h-12 w-auto transition-transform hover:scale-105" 
                src="/GMS_icono_color.svg" 
                alt="GMS Logo" 
              />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* BOTÓN ESPECIAL: Xphere Lab */}
            <a 
              href="https://xpherelab.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold border border-cyan-400/30 px-4 py-1.5 rounded-lg hover:bg-cyan-400/10 transition-all text-sm"
            >
              Xphere Lab <ExternalLink size={14} />
            </a>

            <a 
              href="#contacto"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95 inline-block"
            >
              Cotizar
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-slate-800 py-8 px-6 flex flex-col space-y-5 shadow-2xl animate-in fade-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-gray-300 text-xl font-medium"
              >
                {link.name}
              </a>
            ))}
            
            {/* ENLACE MÓVIL ESPECIAL */}
            <a 
              href="https://xpherelab.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold"
            >
              Visitar Xphere Lab <ExternalLink size={18} />
            </a>

            <a 
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white text-center px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 block"
            >
              Cotizar Ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}