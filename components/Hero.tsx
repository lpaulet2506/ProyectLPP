
import React, { useRef } from 'react';
import { useLanguage } from '../src/LanguageContext';
import { useProfile } from '../src/ProfileContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { profile } = useProfile();
  const container = useRef<HTMLElement>(null);
  
  const heroContent = profile === 'business' ? t.hero.business : t.hero.individual;
  
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.badge', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'expo.out' }
    )
    .fromTo('.hero-title-line', 
      { yPercent: 120, opacity: 0, rotationZ: 3, transformOrigin: 'left top' }, 
      { yPercent: 0, opacity: 1, rotationZ: 0, duration: 1.4, stagger: 0.15, ease: 'expo.out' }, 
      "-=0.7"
    )
    .fromTo('.hero-subtitle', 
      { yPercent: 120, opacity: 0 }, 
      { yPercent: 0, opacity: 1, duration: 1.2, ease: 'expo.out' }, 
      "-=1.1"
    )
    .fromTo('.hero-buttons', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'expo.out' }, 
      "-=0.8"
    )
    .fromTo('.stats-container', 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.2 }, 
      "-=0.5"
    );
      
    gsap.fromTo('.hero-graphic', 
      { opacity: 0, scale: 0.8, rotation: -5 }, 
      { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: "power2.out", delay: 0.2 }
    );

    // Continuous floating animation
    gsap.to('.hero-graphic-internal', {
      y: -15,
      rotation: 2,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
    
  }, { scope: container, dependencies: [profile] });

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={container} className="relative min-h-screen flex flex-col justify-center py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="badge inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-lg bg-white/5 border border-white/10 text-indigo-400 font-medium text-xs mono uppercase tracking-[0.2em] opacity-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            {t.hero.available}
          </div>
          
          <h1 className="hero-title-container text-6xl lg:text-8xl font-black leading-[1.1] text-white tracking-tighter">
            {heroContent.title.includes('|') ? (
              <>
                <div className="overflow-hidden mb-2">
                  <div className="hero-title-line opacity-0">{heroContent.title.split('|')[0]}</div>
                </div>
                <div className="overflow-hidden">
                  <div className="hero-title-line opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
                    {heroContent.title.split('|')[1]}
                  </div>
                </div>
              </>
            ) : (
              <div className="overflow-hidden">
                <div className="hero-title-line opacity-0">{heroContent.title}</div>
              </div>
            )}
          </h1>
          
          <div className="overflow-hidden mt-8">
            <p className="hero-subtitle text-xl text-slate-400 leading-relaxed max-w-2xl opacity-0">
              {heroContent.subtitle}
            </p>
          </div>
          
          <div className="hero-buttons mt-12 flex flex-col sm:flex-row gap-6 opacity-0">
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="group relative bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-indigo-50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              {t.hero.startProject}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 rounded-2xl font-bold text-lg text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95 transition flex items-center justify-center"
            >
              {t.hero.exploreServices}
            </a>
          </div>
          
          <div className="stats-container mt-16 flex items-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-default">
             <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white mono">5+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">{t.hero.stats.years}</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white mono">100+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">{t.hero.stats.hardware}</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-white mono">50+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">{t.hero.stats.apps}</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="hero-graphic absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block opacity-0">
         <div className="hero-graphic-internal relative w-full h-full">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full"></div>
            <svg className="w-full h-full text-indigo-500/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M42.7,-74C55.4,-67.2,65.8,-55.4,72.9,-42C80,-28.7,83.9,-13.7,82.3,0.9C80.7,15.6,73.6,29.9,64.2,42.5C54.8,55.1,43.1,65.9,29.6,71.5C16.1,77.2,0.8,77.7,-14.8,74.5C-30.4,71.3,-46.2,64.4,-58.5,53.2C-70.8,42,-79.6,26.5,-82.4,10.2C-85.2,-6.1,-82,-23.3,-73.4,-37.4C-64.8,-51.5,-50.8,-62.5,-36.5,-68.5C-22.3,-74.5,-7.7,-75.4,6.3,-86.3C20.3,-97.2,30,-80.8,42.7,-74Z" transform="translate(100 100)" />
            </svg>
         </div>
      </div>
    </section>
  );
};

export default Hero;
