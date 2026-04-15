import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useProfile } from '../src/ProfileContext';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ==================
// BUSINESS COMPONENT
// ==================
const TechShowcaseBusiness: React.FC = () => {
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
    const panels = gsap.utils.toArray('.tech-slide-biz') as HTMLElement[];

    gsap.set(panels, { zIndex: (i) => i });

    if (panels.length > 1) {
      gsap.set(panels.slice(1), { yPercent: 100 });

      panels.slice(1).forEach(panel => {
        const textElements = panel.querySelectorAll('.slide-text-elem');
        const img = panel.querySelector('.slide-bg');
        if (textElements.length > 0) {
          gsap.set(textElements, { yPercent: 120, opacity: 0, rotationZ: 3, transformOrigin: "left top" });
        }
        if (img) {
          gsap.set(img, { scale: 1.3, yPercent: 20 });
        }
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + (panels.length * 100) + "%",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    panels.forEach((panel, i) => {
      if (i === 0) {
        gsap.fromTo(panel.querySelectorAll('.slide-text-elem'),
          { yPercent: 120, opacity: 0, rotationZ: 3, transformOrigin: "left top" },
          {
            yPercent: 0, opacity: 1, rotationZ: 0,
            duration: 1.2, stagger: 0.15, ease: 'expo.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              once: true,
            }
          }
        );
      } else {
        const textElements = panel.querySelectorAll('.slide-text-elem');
        const img = panel.querySelector('.slide-bg');

        // Animamos a yPercent: 0 usando .to()
        tl.to(panel,
           { yPercent: 0, ease: "none", duration: 1 },
           "+=0.1"
         );

        if (img) {
          tl.to(img, 
            { scale: 1, yPercent: 0, duration: 1, ease: 'none' }, 
            "<" 
          );
        }

        if (textElements.length > 0) {
          tl.to(textElements, 
            { yPercent: 0, opacity: 1, rotationZ: 0, duration: 1, stagger: 0.15, ease: "expo.out" }, 
            "<0.3" 
          );
        }
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 overflow-hidden isolation-isolate">
        {sections.map((sec, index) => (
          <div key={`biz-${index}`} className="tech-slide-biz absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-slate-950">
              <img src={sec.img} alt={sec.title} className="slide-bg w-full h-full object-cover opacity-40 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950"></div>
            </div>
            <div className="slide-content relative z-20 flex flex-col items-center justify-center p-8 max-w-4xl text-center perspective-1000">
              <div className="overflow-hidden mb-6">
                <div className="slide-text-elem px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-bold text-xs tracking-[0.2em] uppercase">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${sec.color}`}>{sec.badge}</span>
                </div>
              </div>
              <div className="overflow-hidden mb-6 py-2">
                <h2 className="slide-text-elem text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
                  {sec.title}
                </h2>
              </div>
              <div className="overflow-hidden">
                <p className="slide-text-elem text-xl md:text-2xl text-slate-300 leading-relaxed font-light drop-shadow-md">
                  {sec.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 opacity-50 mix-blend-screen pointer-events-none">
        <span className="text-[10px] text-white mono uppercase tracking-widest">Sigue bajando</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

// ====================
// INDIVIDUAL COMPONENT
// ====================
const TechShowcaseIndividual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const sections = [
    {
      title: "Reparación y Mantenimiento",
      subtitle: "Diagnóstico profundo y solución eficaz a problemas con tus portátiles o equipos de escritorio. Reparación minuciosa para alargar la vida útil de tu hardware favorito.",
      img: "/assets/images/tech_repair_home.png",
      badge: "Hardware a Domicilio",
      color: "from-sky-500 to-blue-400"
    },
    {
      title: "Optimización Integral",
      subtitle: "Soporte técnico para ampliación de redes Wi-Fi, limpieza profunda de virus, eliminación de malware y puesta a punto de tu equipo personal u oficina remota.",
      img: "/assets/images/tech_setup_home.png",
      badge: "Soporte Técnico",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Acompañamiento Digital",
      subtitle: "Clases y asesoramiento adaptado a tu ritmo. Te ayudo a manejar nuevos dispositivos y a navegar de forma segura, resolviendo todas tus dudas con paciencia.",
      img: "/assets/images/tech_tablet_class.png",
      badge: "Clases y Aprendizaje",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  useGSAP(() => {
    const panels = gsap.utils.toArray('.tech-slide-ind') as HTMLElement[];

    gsap.set(panels, { zIndex: (i) => i });

    if (panels.length > 1) {
      gsap.set(panels.slice(1), { yPercent: 100 });

      panels.slice(1).forEach(panel => {
        const textElements = panel.querySelectorAll('.slide-text-elem');
        const img = panel.querySelector('.slide-bg');
        if (textElements.length > 0) {
          gsap.set(textElements, { yPercent: 120, opacity: 0, rotationZ: 3, transformOrigin: "left top" });
        }
        if (img) {
          gsap.set(img, { scale: 1.3, yPercent: 20 });
        }
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + (panels.length * 100) + "%",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    panels.forEach((panel, i) => {
      if (i === 0) {
        gsap.fromTo(panel.querySelectorAll('.slide-text-elem'),
          { yPercent: 120, opacity: 0, rotationZ: 3, transformOrigin: "left top" },
          {
            yPercent: 0, opacity: 1, rotationZ: 0,
            duration: 1.2, stagger: 0.15, ease: 'expo.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              once: true,
            }
          }
        );
      } else {
        const textElements = panel.querySelectorAll('.slide-text-elem');
        const img = panel.querySelector('.slide-bg');

        // Animamos a yPercent: 0 usando .to() ya que el set inicial tiene yPercent: 100
        tl.to(panel,
          { yPercent: 0, ease: "none", duration: 1 },
          "+=0.1"
        );

        if (img) {
          tl.to(img, 
            { scale: 1, yPercent: 0, duration: 1, ease: 'none' }, 
            "<" 
          );
        }

        if (textElements.length > 0) {
          tl.to(textElements, 
            { yPercent: 0, opacity: 1, rotationZ: 0, duration: 1, stagger: 0.15, ease: "expo.out" }, 
            "<0.3" 
          );
        }
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 overflow-hidden isolation-isolate">
        {sections.map((sec, index) => (
          <div key={`ind-${index}`} className="tech-slide-ind absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-slate-950">
              <img src={sec.img} alt={sec.title} className="slide-bg w-full h-full object-cover opacity-40 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950"></div>
            </div>
            <div className="slide-content relative z-20 flex flex-col items-center justify-center p-8 max-w-4xl text-center perspective-1000">
              <div className="overflow-hidden mb-6">
                <div className="slide-text-elem px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-bold text-xs tracking-[0.2em] uppercase">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${sec.color}`}>{sec.badge}</span>
                </div>
              </div>
              <div className="overflow-hidden mb-6 py-2">
                <h2 className="slide-text-elem text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
                  {sec.title}
                </h2>
              </div>
              <div className="overflow-hidden">
                <p className="slide-text-elem text-xl md:text-2xl text-slate-300 leading-relaxed font-light drop-shadow-md">
                  {sec.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 opacity-50 mix-blend-screen pointer-events-none">
        <span className="text-[10px] text-white mono uppercase tracking-widest">Sigue bajando</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

// ==================
// MAIN WRAPPER
// ==================
const TechShowcase: React.FC = () => {
  const { profile } = useProfile();
  
  // Renderiza montando/desmontando completamente los componentes
  // lo que asegura que ScrollTrigger se inicializa y destruye limpiamente
  // sin reciclar nodos DOM que puedan retener estilos cacheados.
  return profile === 'business' ? <TechShowcaseBusiness /> : <TechShowcaseIndividual />;
};

export default TechShowcase;
