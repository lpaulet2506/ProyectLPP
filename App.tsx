
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import GeminiAssistant from './components/GeminiAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider, useLanguage } from './src/LanguageContext';
import { ProfileProvider, useProfile } from './src/ProfileContext';

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const { profile } = useProfile();

  return (
    <div className="min-h-screen relative">
      {/* Background Decorative Elements */}
      <div className="glow-mesh top-[-10%] left-[-10%]" />
      <div className="glow-mesh bottom-[-10%] right-[-10%] opacity-50" />

      <Navbar onAskMore={() => { }} />

      <main className="relative z-10">
        <Hero />

        <Services />

        {/* AI Tech Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mono tracking-tight">
                {t.ai.badge}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
                {t.ai.title.split(' ').slice(0, -2).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{t.ai.title.split(' ').slice(-2).join(' ')}</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
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
