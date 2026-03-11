
import React, { useState } from 'react';
import { useLanguage } from '../src/LanguageContext';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Obtener el ID de Formspree desde variables de entorno
    const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "TU_FORM_ID"; 
    const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        // Volver al estado inicial después de unos segundos
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-extrabold text-white mb-8 tracking-tight"
            >
              {t.contact.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">{t.contact.title.split(' ').slice(-1)}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-lg mb-12 leading-relaxed max-w-lg"
            >
              {t.contact.subtitle}
            </motion.p>
            
            <div className="space-y-8">
              {[
                { label: t.contact.info.direct, value: t.contact.info.directValue, icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { label: t.contact.info.availability, value: t.contact.info.availabilityValue, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 mono tracking-[0.2em]">{item.label}</h4>
                    <p className="text-lg text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 w-full"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-10 rounded-[2.5rem] border-indigo-500/50 flex flex-col items-center justify-center text-center min-h-[400px]"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-20 h-20 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mb-6"
                >
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.contact.form.successTitle}</h3>
                <p className="text-slate-400">{t.contact.form.successMessage}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-indigo-400 font-bold mono text-xs hover:text-indigo-300 transition"
                >
                  {t.contact.form.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass p-10 rounded-[2.5rem] shadow-2xl space-y-6 relative overflow-hidden group border border-white/5 hover:border-indigo-500/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl text-sm mono"
                  >
                    {t.contact.form.error}
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label className="block text-[10px] font-bold text-slate-500 mb-2 mono tracking-widest uppercase">{t.contact.form.name}</label>
                    <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all hover:bg-white/10" placeholder={t.contact.form.placeholderName} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label className="block text-[10px] font-bold text-slate-500 mb-2 mono tracking-widest uppercase">{t.contact.form.email}</label>
                    <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all hover:bg-white/10" placeholder={t.contact.form.placeholderEmail} />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label className="block text-[10px] font-bold text-slate-500 mb-2 mono tracking-widest uppercase">{t.contact.form.service}</label>
                    <select name="service" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all hover:bg-white/10 appearance-none">
                      <option className="bg-slate-900" value="software">{t.contact.form.options.software}</option>
                      <option className="bg-slate-900" value="hardware">{t.contact.form.options.hardware}</option>
                      <option className="bg-slate-900" value="automation">{t.contact.form.options.automation}</option>
                      <option className="bg-slate-900" value="classes">{t.contact.form.options.classes}</option>
                    </select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                  >
                    <label className="block text-[10px] font-bold text-slate-500 mb-2 mono tracking-widest uppercase">{t.contact.form.phone}</label>
                    <input name="phone" type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all hover:bg-white/10" placeholder={t.contact.form.placeholderPhone} />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="flex justify-between items-end mb-2">
                    <label className="block text-[10px] font-bold text-slate-500 mono tracking-widest uppercase">{t.contact.form.details}</label>
                    <span className="text-[9px] text-slate-600 mono">MAX 2000 CHARS</span>
                  </div>
                  <textarea required name="message" rows={4} maxLength={2000} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all hover:bg-white/10 resize-none" placeholder={t.contact.form.placeholderMessage}></textarea>
                </motion.div>
                
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  type="submit" 
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      {t.contact.form.sending}
                    </>
                  ) : t.contact.form.submit}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
;

export default Contact;
