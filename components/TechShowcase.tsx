
import React, { useRef } from 'react';
import { useLanguage } from '../src/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TechShowcase: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.tech-panel');
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        // snap: 1 / (panels.length - 1),
        end: () => "+=" + (wrapperRef.current?.offsetWidth || window.innerWidth) * 2,
      }
    });

    // Parallax effect on images
    panels.forEach((panel: any, i) => {
      const img = panel.querySelector('img');
      if (img) {
        gsap.to(img, {
          xPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => "+=" + (wrapperRef.current?.offsetWidth || window.innerWidth) * 2,
            scrub: true,
          }
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-slate-950 relative border-y border-white/5">
      <div className="absolute top-10 left-10 z-20">
        <div className="inline-block px-4 py-1.5 rounded-full bg-black/40 border border-white/10 text-white text-sm font-medium mono tracking-widest uppercase backdrop-blur-md">
          Tech Showcase
        </div>
      </div>
      
      <div ref={wrapperRef} className="flex flex-nowrap h-full w-[300vw]">
        {/* Panel 1 */}
        <div className="tech-panel w-screen h-full flex-shrink-0 relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-[120%] h-full -left-[10%]">
             <img src="/assets/images/tech_chip.png" alt="Hardware Integration" className="w-full h-full object-cover opacity-50" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          
          <div className="relative z-10 glass p-12 flex flex-col items-center justify-center rounded-[3rem] w-full max-w-2xl text-center backdrop-blur-xl border border-white/10 shadow-2xl translate-y-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            </div>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Hardware Integrado</h2>
            <p className="text-slate-400 text-lg leading-relaxed">Microchips OLED y circuitos con trazas de altísima precisión diseñados para el máximo rendimiento y control físico.</p>
          </div>
        </div>
        
        {/* Panel 2 */}
        <div className="tech-panel w-screen h-full flex-shrink-0 relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-[120%] h-full -left-[10%]">
            <img src="/assets/images/tech_server.png" alt="Cloud Data" className="w-full h-full object-cover opacity-50" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          
          <div className="relative z-10 glass p-12 flex flex-col items-center justify-center rounded-[3rem] w-full max-w-2xl text-center backdrop-blur-xl border border-white/10 shadow-2xl translate-y-10">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Arquitectura Server-side</h2>
            <p className="text-slate-400 text-lg leading-relaxed">Centros de datos en la nube ultrarrápidos y escalables con luces LED para monitoreo en la matriz geométrica.</p>
          </div>
        </div>
        
        {/* Panel 3 */}
        <div className="tech-panel w-screen h-full flex-shrink-0 relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-[120%] h-full -left-[10%]">
             <img src="/assets/images/tech_code.png" alt="Software Logic" className="w-full h-full object-cover opacity-50" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          
          <div className="relative z-10 glass p-12 flex flex-col items-center justify-center rounded-[3rem] w-full max-w-2xl text-center backdrop-blur-xl border border-white/10 shadow-2xl translate-y-10">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Software Holográfico</h2>
            <p className="text-slate-400 text-lg leading-relaxed">Algoritmos limpios e interfaces de datos abstractas fluyendo sobre dispositivos de hardware, calidad impecable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
