// Ruta: src/app/page.tsx
import Navbar from '@/src/components/layout/Navbar';
import Hero from '@/src/components/home/Hero'; // Ajusta la ruta si es necesario
import Services from '@/src/components/home/Services';
import Contact from '@/src/components/home/Contact'; // Nuevo
import XphereSection from '@/src/components/home/XphereSection'; // Nuevo
import Projects from '@/src/components/home/Projects'; // Nuevo
import Partners from '@/src/components/home/Partners';
import Footer from '@/src/components/layout/Footer';
// Importa otros componentes que vayas creando...


export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-900">
      {/* 1. Barra de Navegación */}
      <Navbar />
      {/* 2. Hero */}
      <Hero />
      {/* 3. Servicios */}
      <Services />    
      {/* 4. contact (Pie de página) */}
      <Contact />
      {/* 5. Xpherelab (Pie de página) */}
      <XphereSection />
      {/* 6. Projects (Pie de página) */}
      <Projects />
      {/* 7. Partners (Pie de página) */}
      <Partners />
      {/* 8. Footer (Pie de página) */}
      <Footer />
    </main>
  );
}

