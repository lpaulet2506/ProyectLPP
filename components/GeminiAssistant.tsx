
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useLanguage } from '../src/LanguageContext';

const GeminiAssistant: React.FC = () => {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (response && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [response]);

  const handleChat = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setResponse('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction: t.ai.systemInstruction,
          temperature: 0.8,
        }
      });
      
      setResponse(result.text || t.ai.error);
    } catch (error) {
      console.error(error);
      setResponse(t.ai.failure);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto glass rounded-[2.5rem] overflow-hidden shadow-2xl border-white/5 relative">
      <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
        </div>
        <div className="mono text-[10px] text-slate-500 uppercase tracking-widest">
          {t.ai.systemNode}
        </div>
      </div>
      
      <div className="p-8">
        <div className="relative group">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.ai.placeholder}
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all pr-16 shadow-inner"
            onKeyDown={(e) => e.key === 'Enter' && handleChat()}
          />
          <button 
            onClick={handleChat}
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-500 text-white w-12 rounded-xl flex items-center justify-center transition-all disabled:opacity-50 shadow-lg shadow-indigo-600/20"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            )}
          </button>
        </div>
        
        {response && (
          <div ref={responseRef} className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-start gap-4 mb-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
              </div>
              <div className="text-[10px] text-indigo-400 font-bold mono uppercase mt-2 tracking-widest">
                {t.ai.feedback}
              </div>
            </div>
            <div className="bg-black/20 border border-white/5 p-6 rounded-2xl text-slate-300 leading-relaxed text-sm lg:text-base">
              <p className="whitespace-pre-wrap">{response}</p>
            </div>
          </div>
        )}
      </div>
      
      {!response && !loading && (
        <div className="px-8 pb-8 flex flex-wrap gap-2">
            <span className="text-[10px] text-slate-600 font-bold mono mr-2 mt-1">{t.ai.suggestions}</span>
            {t.ai.suggestionItems.map(tag => (
                <button 
                  key={tag}
                  onClick={() => setInput(tag)}
                  className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition"
                >
                    {tag}
                </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
