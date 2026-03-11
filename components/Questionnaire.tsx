
import React from 'react';
import { useLanguage } from '../src/LanguageContext';

interface QuestionnaireProps {
  onClose: () => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onClose }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in duration-300">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.questionnaire.title}</h2>
        <p className="text-slate-600 mb-6">
          {t.questionnaire.description}
        </p>
        <ul className="space-y-3 mb-8">
          {t.questionnaire.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700">
              <span className="text-indigo-600 font-bold">•</span>
              {point}
            </li>
          ))}
        </ul>
        <button 
          onClick={onClose}
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          {t.questionnaire.button}
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
