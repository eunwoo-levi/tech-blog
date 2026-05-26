'use client';

import { activities } from '../data';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

export default function ExperienceSection() {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <section className='border-b border-zinc-800 px-6 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-10 text-2xl font-semibold text-white'>{tr.sections.experience}</h2>
        <div className='divide-y divide-zinc-900'>
          {activities.map((activity, index) => {
            const description = lang === 'ko' ? activity.descriptionKo : activity.descriptionEn;
            return (
              <div key={index} className='flex items-start gap-8 py-5'>
                <span className='w-44 flex-shrink-0 pt-0.5 text-xs text-zinc-600'>
                  {activity.period}
                </span>
                <div className='flex-1'>
                  <h3 className='text-sm font-semibold text-zinc-100'>{activity.title}</h3>
                  <p className='mt-0.5 text-sm text-zinc-500'>{activity.role}</p>
                  {description && (
                    <p className='mt-1.5 text-xs leading-relaxed text-zinc-600'>{description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
