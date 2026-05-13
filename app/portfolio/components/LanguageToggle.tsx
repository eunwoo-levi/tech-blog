'use client';

import { useLanguage } from '../LanguageContext';

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className='fixed right-6 top-6 z-50 flex overflow-hidden rounded-full border border-zinc-700 bg-zinc-900 text-xs font-medium'
      aria-label='Switch language'
    >
      <span
        className={`px-3 py-1.5 transition-colors ${lang === 'ko' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
      >
        KO
      </span>
      <span
        className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
      >
        EN
      </span>
    </button>
  );
}
