
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../src/LanguageContext';
import { useProfile } from '../src/ProfileContext';
import { Language } from '../src/translations';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface NavbarProps {
  onAskMore: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAskMore }) => {
  const { t, language, setLanguage } = useLanguage();
  const { profile, setProfile } = useProfile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleProfileChange = (newProfile: 'business' | 'individual') => {
    // 1. Iniciar scroll al principio
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // 2. Cambiar perfil
    setProfile(newProfile);
    setIsMobileMenuOpen(false);
    
    // 3. Forzar recalculo de GSAP después del render del nuevo DOM
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    // Nav entrance animation
    const tl = gsap.timeline();
    tl.fromTo(navRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .fromTo('.nav-logo', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.2")
      .fromTo('.nav-mobile-toggle', { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.5")
      .fromTo('.nav-profile', { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4");
  }, { scope: navRef });

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(dropdownRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3, display: 'block' });
    } else {
      gsap.to(dropdownRef.current, { opacity: 0, y: -20, duration: 0.3, display: 'none' });
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Espacio para el header fijo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false); // Cierra el menú móvil al navegar
    }
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 md:px-6 opacity-0 ${
        isScrolled ? 'pt-0 md:pt-4' : 'pt-0 md:pt-8'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto relative">
        <div className={`px-4 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-500 relative z-50 ${
          isScrolled 
            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/5 md:border md:glass md:rounded-2xl md:shadow-2xl' 
            : 'bg-transparent md:glass md:bg-white/5 md:backdrop-blur-md md:border md:border-white/10 md:rounded-2xl md:shadow-2xl'
        }`}>
          {/* Logo animado hacia la izquierda */}
          <div 
            className="nav-logo flex items-center gap-2 group cursor-pointer flex-shrink-0 opacity-0" 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition duration-300">
              Dev
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tighter text-white hidden sm:block md:block">LppDev<span className="text-indigo-500">.</span></span>
          </div>
          
          {/* Opciones de Perfiles - Móvil (pill toggle centrado) */}
          <div className="nav-profile flex flex-1 justify-center items-center md:hidden px-2 opacity-0">
            <div className="flex bg-white/5 border border-white/10 rounded-lg p-1">
              <button
                onClick={() => handleProfileChange('business')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                  profile === 'business'
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.nav.business}
              </button>
              <button
                onClick={() => handleProfileChange('individual')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                  profile === 'individual'
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.nav.individual}
              </button>
            </div>
          </div>

          {/* Menú Desktop (derecha) */}
          <div className="hidden md:flex gap-4 items-center flex-shrink-0">
            {/* Profile pill toggle */}
            <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => handleProfileChange('business')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                  profile === 'business'
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {t.nav.business}
              </button>
              <button
                onClick={() => handleProfileChange('individual')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                  profile === 'individual'
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {t.nav.individual}
              </button>
            </div>

            <div className="h-6 w-px bg-slate-700"></div>

            {/* Language switcher */}
            <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
              {(['es', 'en', 'de'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${
                    language === lang
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={handleContactClick}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all transform active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              {t.nav.contactUs}
            </button>
          </div>

          {/* Mobile Hamburguesa Toggle (animado a la derecha) */}
          <div className="nav-mobile-toggle md:hidden flex items-center justify-end flex-shrink-0 opacity-0">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Dropdown */}
        <div
          ref={dropdownRef}
          className="md:hidden absolute top-full left-0 right-0 w-full glass bg-slate-900/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl z-40 hidden opacity-0"
        >
          <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold text-slate-500 tracking-wider uppercase">Idiomas</p>
              <div className="flex gap-2">
                {(['es', 'en', 'de'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setIsMobileMenuOpen(false); }}
                    className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${
                      language === lang 
                        ? 'bg-indigo-600 text-white shadow-lg' 
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-slate-800/50"></div>

            <button 
              onClick={handleContactClick}
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-6 py-4 rounded-xl font-bold text-base transition-all transform active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              {t.nav.contactUs}
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
