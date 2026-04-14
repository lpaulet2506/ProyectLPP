
import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechShowcase from './components/TechShowcase';
import GeminiAssistant from './components/GeminiAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider, useLanguage } from './src/LanguageContext';
import { ProfileProvider, useProfile } from './src/ProfileContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const { profile } = useProfile();
  const aiSectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aiSectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.ai-badge', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)' })
      .fromTo('.ai-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2")
      .fromTo('.ai-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
  }, { scope: aiSectionRef });

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="glow-mesh top-[-10%] left-[-10%]" />
      <div className="glow-mesh bottom-[-10%] right-[-10%] opacity-50" />

      <Navbar onAskMore={() => { }} />

      <main className="relative z-10">
        <Hero />

        <Services />
        <TechShowcase />

        {/* AI Tech Section */}
        <section ref={aiSectionRef} className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="ai-badge inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mono tracking-tight opacity-0">
                {t.ai.badge}
              </div>
              <h2 className="ai-title text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white opacity-0">
                {t.ai.title.split(' ').slice(0, -2).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{t.ai.title.split(' ').slice(-2).join(' ')}</span>
              </h2>
              <p className="ai-subtitle text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto opacity-0">
                {t.ai.subtitle}
              </p>
            </div>
            <GeminiAssistant />
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="34671214777" />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ProfileProvider>
        <AppContent />
      </ProfileProvider>
    </LanguageProvider>
  );
};

export default App;
