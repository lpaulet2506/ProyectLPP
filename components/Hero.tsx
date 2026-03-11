
import React from 'react';
import { useLanguage } from '../src/LanguageContext';
import { useProfile } from '../src/ProfileContext';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { profile } = useProfile();
  
  const heroContent = profile === 'business' ? t.hero.business : t.hero.individual;
  
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
    <section className="relative min-h-screen flex flex-col justify-center py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-lg bg-white/5 border border-white/10 text-indigo-400 font-medium text-xs mono uppercase tracking-[0.2em]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            {t.hero.available}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl lg:text-8xl font-black leading-[1.1] text-white tracking-tighter"
          >
            {heroContent.title.includes('|') ? (
              <>
                {heroContent.title.split('|')[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
                  {heroContent.title.split('|')[1]}
                </span>
              </>
            ) : (
              heroContent.title
            )}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-xl text-slate-400 leading-relaxed max-w-2xl"
          >
            {heroContent.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="group relative bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:bg-indigo-50 flex items-center justify-center gap-2"
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
              className="px-10 py-4 rounded-2xl font-bold text-lg text-white border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
            >
              {t.hero.exploreServices}
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-500"
          >
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
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block animate-float"
      >
         <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full"></div>
            <svg className="w-full h-full text-indigo-500/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M42.7,-74C55.4,-67.2,65.8,-55.4,72.9,-42C80,-28.7,83.9,-13.7,82.3,0.9C80.7,15.6,73.6,29.9,64.2,42.5C54.8,55.1,43.1,65.9,29.6,71.5C16.1,77.2,0.8,77.7,-14.8,74.5C-30.4,71.3,-46.2,64.4,-58.5,53.2C-70.8,42,-79.6,26.5,-82.4,10.2C-85.2,-6.1,-82,-23.3,-73.4,-37.4C-64.8,-51.5,-50.8,-62.5,-36.5,-68.5C-22.3,-74.5,-7.7,-75.4,6.3,-86.3C20.3,-97.2,30,-80.8,42.7,-74Z" transform="translate(100 100)" />
            </svg>
         </div>
      </motion.div>
    </section>
  );
};

export default Hero;
