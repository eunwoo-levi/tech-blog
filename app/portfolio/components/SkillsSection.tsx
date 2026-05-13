'use client';

import { skills } from '../data';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

export default function SkillsSection() {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <section className='border-b border-zinc-800 px-6 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-10 text-2xl font-semibold text-white'>{tr.sections.skills}</h2>
        <div className='flex flex-col gap-6'>
          {skills.map((group) => (
            <div key={group.category} className='flex flex-col gap-3 sm:flex-row sm:gap-8'>
              <span className='w-44 flex-shrink-0 text-xs font-medium uppercase tracking-widest text-zinc-500'>
                {group.category}
              </span>
              <div className='flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className='rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
