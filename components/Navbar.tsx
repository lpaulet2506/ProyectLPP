import React, { useState, useEffect } from 'react';
import { useLanguage } from '../src/LanguageContext';
import { useProfile } from '../src/ProfileContext';
import { Language } from '../src/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onAskMore: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAskMore }) => {
  const { t, language, setLanguage } = useLanguage();
  const { profile, setProfile } = useProfile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 ${
        isScrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-8'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto relative">
        <div className={`glass px-4 md:px-8 py-3 md:py-4 rounded-2xl flex justify-between items-center shadow-2xl transition-all duration-500 ${
          isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-white/10' : 'bg-slate-900/60 md:bg-white/5 backdrop-blur-md border-white/10'
        }`}>
          {/* Logo (deslizado a la izquierda) */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }}>
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition duration-300">
              Dev
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tighter text-white">LppDev<span className="text-indigo-500">.</span></span>
          </div>
          
          {/* Menú Desktop */}
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
              onClick={handleContactClick}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all transform active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              {t.nav.contactUs}
            </button>
          </div>

          {/* Mobile Hamburguesa Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 p-5 rounded-2xl glass bg-slate-900/95 backdrop-blur-2xl border border-white/10 flex flex-col gap-6 shadow-2xl z-50"
            >
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => { setProfile('business'); setIsMobileMenuOpen(false); }}
                  className={`text-left text-lg font-medium transition ${
                    profile === 'business' ? 'text-indigo-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {t.nav.business}
                </button>
                <button 
                  onClick={() => { setProfile('individual'); setIsMobileMenuOpen(false); }}
                  className={`text-left text-lg font-medium transition ${
                    profile === 'individual' ? 'text-indigo-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {t.nav.individual}
                </button>
              </div>

              <div className="h-px w-full bg-slate-800"></div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold text-slate-500 tracking-wider uppercase">Idiomas</p>
                <div className="flex gap-2">
                  {(['es', 'en', 'de'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setIsMobileMenuOpen(false); }}
                      className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                        language === lang 
                          ? 'bg-indigo-600 text-white shadow-lg' 
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleContactClick}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3.5 rounded-xl font-bold text-base transition-all transform active:scale-95 shadow-lg shadow-indigo-600/20 mt-2"
              >
                {t.nav.contactUs}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;
