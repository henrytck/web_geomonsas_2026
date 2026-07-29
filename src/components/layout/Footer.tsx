// Ruta: src/components/layout/Footer.tsx
'use client';

import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Columna 1: Sobre Nosotros */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">GMS</h3>
            <p className="text-gray-400 leading-relaxed">
              Impulsando el futuro de la tecnología con soluciones innovadoras y vanguardistas.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:text-white transition-colors">Gestión Catastral</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Cartografía Digital</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Documentación 360°</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Fotogrametría Avanzada</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:sistemas.geo@geomonsas.com" className="text-sm hover:text-white transition-colors">
                  sistemas.geo@geomonsas.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+573057106086" className="text-sm hover:text-white transition-colors">
                  +57 305 710 6086
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-sm">Bogotá D.C, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} GMS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;