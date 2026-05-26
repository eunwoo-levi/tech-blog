'use client';

import { GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

const fu = (delay: number): React.CSSProperties => ({
  animation: `fadeInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
});

export default function HeroSection() {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <section className='relative overflow-hidden border-b border-zinc-800 px-6 py-24 sm:py-32'>
      {/* background glow blobs */}
      <div className='pointer-events-none absolute inset-0' aria-hidden>
        <div
          className='absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-sky-500 blur-3xl'
          style={{ animation: 'pulseGlow 7s ease-in-out infinite', opacity: 0.12 }}
        />
        <div
          className='absolute bottom-1/4 right-1/3 h-56 w-56 rounded-full bg-indigo-500 blur-3xl'
          style={{ animation: 'pulseGlow 9s ease-in-out infinite 2.5s', opacity: 0.1 }}
        />
        <div
          className='absolute right-1/4 top-1/4 h-40 w-40 rounded-full bg-violet-500 blur-3xl'
          style={{ animation: 'pulseGlow 11s ease-in-out infinite 5s', opacity: 0.08 }}
        />
      </div>

      <div className='relative mx-auto max-w-4xl'>
        <p
          className='mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500'
          style={fu(0.1)}
        >
          Frontend Engineer
        </p>
        <h1
          className='text-5xl font-bold tracking-tight text-white sm:text-6xl'
          style={fu(0.25)}
        >
          {tr.hero.name}
        </h1>
        <p className='mt-5 text-lg leading-relaxed text-zinc-400' style={fu(0.4)}>
          {tr.hero.desc1}
        </p>
        <p className='mt-2 text-lg text-zinc-500' style={fu(0.52)}>
          {tr.hero.desc2}
        </p>
        <p className='mt-2 text-lg text-zinc-500' style={fu(0.62)}>
          {tr.hero.desc3}
        </p>
        <div
          className='mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-zinc-500'
          style={fu(0.64)}
        >
          <span className='flex items-center gap-1.5'>
            <GraduationCap className='h-4 w-4' />
            Computer Science · Electronic Engineering
          </span>
          <span className='flex items-center gap-1.5'>
            <Globe className='h-4 w-4' />
            Fluent in English
          </span>
        </div>
      </div>
    </section>
  );
}
