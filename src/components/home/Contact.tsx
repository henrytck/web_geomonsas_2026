'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('idle');

    try {
      // Usamos el servicio de Formspree / Web3Forms o tu propio API Endpoint
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4c0fead3-b54e-49fe-97df-76f8583da658", // Obtén una clave gratis en https://web3forms.com/
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Nuevo mensaje de contacto en GMS de ${formState.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacto" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl px-6 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-blue-500/20 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Lado Izquierdo: Texto e Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4">Contacto</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Tienes un proyecto en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">mente?</span></h3>
              <p className="text-slate-400 text-lg">
                Estamos listos para ayudarte a digitalizar tu territorio con la mejor tecnología del mercado. Escríbenos y nos pondremos en contacto contigo en menos de 24 horas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a href="mailto:sistemas.geo@geomonsas.com" className="font-medium hover:text-blue-400 transition-colors">
                    sistemas.geo@geomonsas.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Teléfono</p>
                  <a href="tel:+573057106086" className="font-medium hover:text-cyan-400 transition-colors">
                    +57 (305) 710-6086
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lado Derecho: Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <User size={16} className="text-blue-400" /> Nombre Completo
                </label>
                <input 
                  required
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" /> Correo Electrónico
                </label>
                <input 
                  required
                  type="email"
                  placeholder="email@ejemplo.com"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <MessageSquare size={16} className="text-blue-400" /> Mensaje
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              {/* Alerta de éxito o error */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>¡Mensaje enviado con éxito! Te responderemos muy pronto.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
                  <AlertCircle size={20} />
                  <span>Ocurrió un error al enviar. Por favor intenta de nuevo o escríbenos directamente por email.</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSending}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20"
              >
                {isSending ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Enviar Mensaje <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}