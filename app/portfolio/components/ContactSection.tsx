'use client';

import { Mail, Github } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

export default function ContactSection() {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <section className='px-6 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-3 text-2xl font-semibold text-white'>{tr.sections.contact}</h2>
        <p className='mb-8 text-base text-zinc-400'>{tr.contact.subtitle}</p>
        <div className='flex flex-wrap gap-3'>
          <a
            href='https://github.com/eunwoo-levi'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2.5 text-base font-medium text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white'
          >
            <Github className='h-4 w-4' />
            GitHub
          </a>
          <a
            href='mailto:eunwoo1341@gmail.com'
            className='inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-5 py-2.5 text-base font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white'
          >
            <Mail className='h-4 w-4' />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
