import React, { useState, useRef } from 'react';
import { useLanguage } from '../src/LanguageContext';
import { useProfile } from '../src/ProfileContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Services: React.FC = () => {
  const { t } = useLanguage();
  const { profile } = useProfile();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = profile === 'business' ? t.services.business : t.services.individual;

  React.useEffect(() => {
    setExpandedIndex(null);
  }, [profile]);

  useGSAP(() => {
    // Check if the scrollTrigger already fired / setup
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(headerRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    // Filter out null refs
    const validCards = cardsRef.current.filter(Boolean);

    if (profile === 'business') {
      tl.fromTo(validCards,
        { opacity: 0, y: 60, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.7, 
          stagger: 0.15,
          ease: 'power4.out'
        },
        "-=0.4"
      );
    } else {
      // Professional animation for 'individual' - Alternate 3D Flip
      tl.fromTo(validCards,
        { 
          opacity: 0, 
          rotationY: (i) => i % 2 === 0 ? -45 : 45, 
          x: (i) => i % 2 === 0 ? -50 : 50,
          z: -100
        },
        { 
          opacity: 1, 
          rotationY: 0, 
          x: 0,
          z: 0,
          duration: 0.8, 
          stagger: 0.1,
          ease: 'back.out(1.2)'
        },
        "-=0.4"
      );
    }
  }, { scope: containerRef, dependencies: [profile] });

  const businessIcons = [
    'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', // Web
    'M13 10V3L4 14h7v7l9-11h-7z', // Automation
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' // Management
  ];

  const individualIcons = [
    'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4', // Software
    'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', // Home
    'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', // Web
    'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', // Classes
    'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z', // Chat
    'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' // Location
  ];

  const iconsToUse = profile === 'business' ? businessIcons : individualIcons;

  const accents = [
    'from-indigo-500 to-cyan-500',
    'from-emerald-400 to-teal-500',
    'from-orange-400 to-rose-500',
    'from-purple-500 to-pink-500',
    'from-cyan-400 to-blue-500',
    'from-rose-500 to-red-600',
    'from-amber-400 to-orange-500'
  ];

  return (
    <section ref={containerRef} id="services" className="py-20 relative perspective-1000">
      <div className="container mx-auto px-6">
        
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 opacity-0">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
              {t.services.title.split(' ')[0]} <span className="text-indigo-500">{t.services.title.split(' ')[1]}</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">{t.services.subtitle}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white mono uppercase tracking-widest shadow-lg backdrop-blur-md">
              PERFIL: {profile === 'business' ? 'EMPRESAS' : 'PARTICULARES'}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const currentAccent = accents[index % accents.length];
            
            return (
              <div 
                key={`${profile}-${service.title}`}
                ref={el => cardsRef.current[index] = el}
                className={`group relative glass p-8 rounded-[2rem] transition-all duration-500 border border-white/5 opacity-0 ${isExpanded ? 'ring-2 ring-indigo-500/50 shadow-2xl shadow-indigo-500/10 bg-white/10 scale-[1.02]' : 'hover:border-indigo-500/30 hover:-translate-y-2'}`}
              >
                {/* Animated Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentAccent} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-[2rem]`}></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${currentAccent} text-white shadow-lg shadow-black/20 transform group-hover:scale-110 group-hover:rotate-6 transition duration-500`}>
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconsToUse[index % iconsToUse.length]}></path>
                    </svg>
                  </div>
                  <div className="text-[10px] text-slate-500 mono font-bold bg-black/40 px-3 py-1 rounded-full border border-white/5">
                    0{index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">{service.description}</p>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out`}
                  style={{ maxHeight: isExpanded ? '500px' : '0', opacity: isExpanded ? 1 : 0 }}
                >
                  {service.details && (
                      <div className="pt-6 border-t border-white/10 mt-4 space-y-4">
                        <h4 className={`text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${currentAccent}`}>
                          {service.detailTitle || 'Detalles:'}
                        </h4>
                        <ul className="space-y-3">
                          {service.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-gradient-to-br ${currentAccent}`}></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                  )}
                </div>

                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedIndex(isExpanded ? null : index);
                  }}
                  className={`mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer relative z-20 text-transparent bg-clip-text bg-gradient-to-r ${currentAccent} opacity-80 group-hover:opacity-100`}
                >
                  {isExpanded ? 'Ver menos' : t.services.learnMore} 
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 text-white opacity-80 ${isExpanded ? 'rotate-180' : 'group-hover:translate-x-1'}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isExpanded ? "M5 15l7-7 7 7" : "M9 5l7 7-7 7"}></path>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
