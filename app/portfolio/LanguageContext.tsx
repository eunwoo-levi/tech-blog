'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'ko' | 'en';

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({ lang: 'en', toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang((l) => (l === 'ko' ? 'en' : 'ko')) }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}
