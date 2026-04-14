import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TechShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Textos orientados al desarrollo de software/servicios
  const sections = [
    {
      title: "Desarrollo a Medida",
      subtitle: "Soluciones de software de vanguardia adaptadas exactamente a la lógica de negocio de tu empresa, garantizando rendimiento escalable y arquitecturas modulares listas para el futuro.",
      img: "/assets/images/tech_chip.png",
      badge: "Ingeniería de Software",
      color: "from-indigo-600 to-cyan-500"
    },
    {
      title: "Arquitectura Cloud / API",
      subtitle: "Implementación de redes seguras, microservicios y bases de datos de alto rendimiento. Conectamos tus sistemas en la nube para que tus aplicaciones fluyan de manera ininterrumpida globalmente.",
      img: "/assets/images/tech_server.png",
      badge: "Infraestructura",
      color: "from-purple-600 to-pink-500"
    },
    {
      title: "IA y Automatización",
      subtitle: "Integramos algoritmos de inteligencia artificial, machine learning y flujos de trabajo automatizados para que tu software trabaje por ti 24/7 con una precisión humana.",
      img: "/assets/images/tech_code.png",
      badge: "Next Gen",
      color: "from-emerald-500 to-teal-400"
    }
  ];

  useGSAP(() => {
    const panels = gsap.utils.toArray('.tech-slide') as HTMLElement[];

    // Animación estilo "Continuous Sections" con ScrollTrigger
    // Fija todo el contenedor y hace una transición de paneles vertically
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=" + (panels.length * 100) + "%", // Controla cuánta duración de scroll toma
      pin: true,
      scrub: 1,
      animation: gsap.timeline()
        // Empieza el estado: sólo el panel 1 (índice 0) está visible.
        // Hacemos un loop sobre los siguientes paneles para animarlos entrando 
        .to(panels.slice(1), {
          yPercent: -100, // Cada uno sube al 0 (su posición inicial era +100%)
          ease: "none",
          stagger: 0.5, // El stagger maneja la secuencia
        })
    });

    // Parallax y desvanecimiento para el texto interior de las imágenes
    panels.forEach((panel, i) => {
      // Configuraciones de parallax si es necesario
      if (i > 0) {
        gsap.set(panel, { yPercent: 100 }); // Inicializa los paneles inferiores abajo
      }
      
      const img = panel.querySelector('.slide-bg');
      const content = panel.querySelector('.slide-content');
      
      if (img && content && i > 0) {
        gsap.from(img, {
          yPercent: 30, // La imagen se mueve un poco más lento que el contenedor
          scale: 1.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top+=" + (i * window.innerHeight),
            end: "+=" + window.innerHeight,
            scrub: true,
          }
        });
        
        gsap.from(content, {
          opacity: 0,
          y: 100,
          scrollTrigger: {
             trigger: containerRef.current,
             start: "top top+=" + ((i - 0.5) * window.innerHeight),
             end: "+=" + window.innerHeight / 2,
             scrub: true,
          }
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full relative overflow-hidden bg-black">
      
      {sections.map((sec, index) => (
        <div 
          key={index} 
          className="tech-slide absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden z-10"
          style={{ zIndex: index + 10 }}
        >
          {/* Fondo */}
          <div className="absolute inset-0 w-full h-full">
            <img src={sec.img} alt={sec.title} className="slide-bg w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>
          </div>
          
          {/* Contenido (Textos de Servicios de Desarrollo) */}
          <div className="slide-content relative z-20 flex flex-col items-center justify-center p-8 max-w-4xl text-center">
            
            <div className={`mb-6 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-bold text-xs tracking-[0.2em] uppercase`}>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${sec.color}`}>{sec.badge}</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
              {sec.title}
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light drop-shadow-md">
              {sec.subtitle}
            </p>
            
          </div>
        </div>
      ))}

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] text-white mono uppercase tracking-widest">Scroll para explorar</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>

    </section>
  );
};

export default TechShowcase;
