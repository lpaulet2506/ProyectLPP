
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../src/LanguageContext';
import { useProfile } from '../src/ProfileContext';
import { Language } from '../src/translations';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onAskMore: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAskMore }) => {
  const { t, language, setLanguage } = useLanguage();
  const { profile, setProfile } = useProfile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        isScrolled ? 'pt-4' : 'pt-8'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`glass px-8 py-4 rounded-2xl flex justify-between items-center shadow-2xl transition-all duration-500 ${
          isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-white/5' : 'bg-white/5 backdrop-blur-md border-white/10'
        }`}>
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition duration-300">
              Dev
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">LppDev<span className="text-indigo-500">.</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => setProfile('business')}
              className={`transition font-medium text-sm tracking-wide relative group ${
                profile === 'business' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.nav.business}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all ${
                profile === 'business' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button 
              onClick={() => setProfile('individual')}
              className={`transition font-medium text-sm tracking-wide relative group ${
                profile === 'individual' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.nav.individual}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all ${
                profile === 'individual' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>

            <div className="h-6 w-px bg-slate-700"></div>

            <div className="flex bg-white/5 rounded-lg p-1 border border-white/10 mr-4">
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
              onClick={(e) => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 100;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all transform active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              {t.nav.contactUs}
            </button>
          </div>

          {/* Mobile Menu Toggle (Simplified for brevity) */}
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="md:hidden bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-xs"
          >
            {t.nav.contactUs}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
