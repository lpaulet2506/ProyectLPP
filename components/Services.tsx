
import React, { useState } from 'react';
import { useLanguage } from '../src/LanguageContext';
import { useProfile } from '../src/ProfileContext';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const { profile } = useProfile();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = profile === 'business' ? t.services.business : t.services.individual;

  // Reset expanded state when profile changes
  React.useEffect(() => {
    setExpandedIndex(null);
  }, [profile]);

  const icons = [
    'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    'M13 10V3L4 14h7v7l9-11h-7z'
  ];

  const accents = [
    'from-blue-500 to-indigo-600',
    'from-emerald-400 to-teal-600',
    'from-orange-400 to-rose-500',
    'from-purple-500 to-indigo-600',
    'from-pink-500 to-rose-600',
    'from-cyan-400 to-blue-500'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
              {t.services.title.split(' ')[0]} <span className="text-indigo-500">{t.services.title.split(' ')[1]}</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">{t.services.subtitle}</p>
          </div>
          <div className="mono text-xs text-indigo-400 tracking-widest border-b border-indigo-500/30 pb-1">
            {t.services.version}
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          <AnimatePresence mode="popLayout">
            {services.map((service, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.div 
                  key={`${profile}-${service.title}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  variants={itemVariants}
                  className={`group relative glass p-8 rounded-[2rem] transition-all duration-500 border border-white/5 ${isExpanded ? 'ring-2 ring-indigo-500/50 shadow-2xl shadow-indigo-500/10 bg-white/5' : 'hover:border-indigo-500/50 hover:-translate-y-2'}`}
                >
                {/* Animated Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accents[index % accents.length]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${accents[index % accents.length]} text-white shadow-lg shadow-black/20 transform group-hover:scale-110 group-hover:rotate-3 transition duration-500`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icons[index % icons.length]}></path>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition">{service.description}</p>
                
                <AnimatePresence initial={false}>
                  {isExpanded && service.details && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pt-6 border-t border-white/10 mt-4 space-y-4">
                        <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{service.detailTitle || 'Detalles:'}</h4>
                        <ul className="space-y-3">
                          {service.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedIndex(isExpanded ? null : index);
                  }}
                  className="mt-8 flex items-center gap-2 text-sm font-bold text-indigo-400 uppercase tracking-widest transition-all duration-300 hover:text-indigo-300 cursor-pointer relative z-20"
                >
                  {isExpanded ? 'Ver menos' : t.services.learnMore} 
                  <motion.svg 
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </motion.svg>
                </button>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
