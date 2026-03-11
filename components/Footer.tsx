
import React from 'react';
import { useLanguage } from '../src/LanguageContext';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="text-3xl font-black text-white mb-8 tracking-tighter flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">Dev</span>
                </div>
                LppDev<span className="text-indigo-500">.</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-lg">
              {t.footer.description}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-[10px] font-bold text-slate-500 mono tracking-[0.3em] uppercase mb-8">{t.footer.nav}</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>{t.footer.home}</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>{t.footer.solutions}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>{t.footer.contact}</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-[10px] font-bold text-slate-500 mono tracking-[0.3em] uppercase mb-8">{t.footer.social}</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-slate-600 text-[10px] mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} MI_PORTFOLIO_OS // {t.footer.rights}
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 text-[10px] font-bold text-slate-500 mono tracking-widest uppercase hover:text-white transition"
          >
            Back to top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-all">
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </div>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
