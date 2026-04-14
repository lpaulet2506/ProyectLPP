import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TechShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

    // Set initial configuration
    gsap.set(panels, { zIndex: (i) => i });
    
    // Panel 0 starts visible, 1 and 2 start below the screen
    if (panels.length > 1) {
      gsap.set(panels.slice(1), { yPercent: 100 });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + (panels.length * 100) + "%", // Extend scroll distance
        pin: true,
        scrub: 1, // Smooth scrubbing
      }
    });

    panels.forEach((panel, i) => {
      // First panel text animation on enter (non-scrubbed)
      if (i === 0) {
        gsap.fromTo(panel.querySelectorAll('.slide-text-elem'), 
          { y: 50, opacity: 0, rotationX: -20 },
          { 
            y: 0, opacity: 1, rotationX: 0, 
            duration: 1, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
            }
          }
        );
      } else {
        // Elements to animate inside the incoming panel
        const textElements = panel.querySelectorAll('.slide-text-elem');
        const img = panel.querySelector('.slide-bg');

        // Note: tl.to() acts sequentially on the scrubbed timeline.
        // We slide the panel up into view
        tl.to(panel, {
          yPercent: 0,
          ease: "none",
          duration: 1 // Relative duration in the scrub timeline
        }, "+=0.1"); // Small pause before the next slide comes up

        // Image subtle scale/parallax inside the slide as it moves up
        if (img) {
          tl.fromTo(img, 
            { scale: 1.3, yPercent: 20 }, 
            { scale: 1, yPercent: 0, duration: 1, ease: 'none' }, 
            "<" // Run at the same time as panel sliding up
          );
        }

        // Text staggering animations happening during the slide up
        if (textElements.length > 0) {
          tl.fromTo(textElements, 
            { y: 80, opacity: 0, rotationX: -30, scale: 0.9 }, 
            { y: 0, opacity: 1, rotationX: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }, 
            "<0.3" // Starts slightly after the panel begins sliding up
          );
        }
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full relative overflow-hidden bg-slate-950">
      
      {sections.map((sec, index) => (
        <div 
          key={index} 
          className="tech-slide absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Fondo sólido opaco para evitar que el slide anterior se transparente */}
          <div className="absolute inset-0 w-full h-full bg-slate-950">
            <img src={sec.img} alt={sec.title} className="slide-bg w-full h-full object-cover opacity-40 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950"></div>
          </div>
          
          {/* Contenido Texto */}
          <div className="slide-content relative z-20 flex flex-col items-center justify-center p-8 max-w-4xl text-center perspective-1000">
            
            <div className="slide-text-elem mb-6 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-bold text-xs tracking-[0.2em] uppercase">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${sec.color}`}>{sec.badge}</span>
            </div>
            
            <h2 className="slide-text-elem text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
              {sec.title}
            </h2>
            
            <p className="slide-text-elem text-xl md:text-2xl text-slate-300 leading-relaxed font-light drop-shadow-md">
              {sec.subtitle}
            </p>
            
          </div>
        </div>
      ))}

      {/* Indicador de scroll global superior */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 opacity-50 mix-blend-screen pointer-events-none">
        <span className="text-[10px] text-white mono uppercase tracking-widest">Sigue bajando</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>

    </section>
  );
};

export default TechShowcase;
