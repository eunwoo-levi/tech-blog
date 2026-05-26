'use client';

import { awards } from '../data';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

export default function AwardsSection() {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <section className='border-b border-zinc-800 px-6 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-10 text-2xl font-semibold text-white'>{tr.sections.awards}</h2>
        <div className='divide-y divide-zinc-900'>
          {awards.map((award, index) => (
            <div key={index} className='flex items-center justify-between py-4'>
              <p className='text-base text-zinc-200'>{award.title}</p>
              <span className='ml-6 flex-shrink-0 text-base font-medium text-amber-400'>
                {award.prize}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
