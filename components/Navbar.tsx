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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 md:px-6 ${
        isScrolled ? 'pt-0 md:pt-4' : 'pt-0 md:pt-8'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto relative">
        <div className={`px-4 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/5 md:border md:glass md:rounded-2xl md:shadow-2xl' 
            : 'bg-transparent md:glass md:bg-white/5 md:backdrop-blur-md md:border md:border-white/10 md:rounded-2xl md:shadow-2xl'
        }`}>
          {/* Logo animado hacia la izquierda */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 group cursor-pointer flex-shrink-0" 
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition duration-300">
              Dev
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tighter text-white hidden sm:block md:block">LppDev<span className="text-indigo-500">.</span></span>
          </motion.div>
          
          {/* Opciones de Perfiles (Se muestran tanto en móvil como en escritorio en el centro) */}
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-1 justify-center items-center gap-3 sm:gap-6 md:hidden px-2"
          >
            <button 
              onClick={() => setProfile('business')}
              className={`transition font-semibold text-xs sm:text-sm tracking-wide relative group ${
                profile === 'business' ? 'text-indigo-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {t.nav.business}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-500 transition-all ${
                profile === 'business' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <div className="h-4 w-px bg-slate-700/50"></div>
            <button 
              onClick={() => setProfile('individual')}
              className={`transition font-semibold text-xs sm:text-sm tracking-wide relative group ${
                profile === 'individual' ? 'text-indigo-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {t.nav.individual}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-500 transition-all ${
                profile === 'individual' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          </motion.div>

          {/* Menú Desktop (derecha) */}
          <div className="hidden md:flex space-x-8 items-center flex-shrink-0">
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

          {/* Mobile Hamburguesa Toggle (animado a la derecha) */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden flex items-center justify-end flex-shrink-0"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </motion.div>
        </div>

        {/* Menú Móvil Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 w-full glass bg-slate-900/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl z-40"
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
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;
