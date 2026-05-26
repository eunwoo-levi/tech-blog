'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import { useLanguage } from '../LanguageContext';
import { t } from '../translations';

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <section className='border-b border-zinc-800 px-6 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-12 text-2xl font-semibold text-white'>{tr.sections.projects}</h2>
        <div className='flex flex-col gap-6'>
          {projects.map((project, index) => {
            const detail =
              'detailEn' in project && lang === 'en'
                ? project.detailEn
                : 'detail' in project
                  ? project.detail
                  : undefined;

            return (
              <a
                key={index}
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-zinc-600 hover:shadow-xl hover:shadow-black/40 sm:flex-row'
              >
                {/* 이미지 */}
                <div className='relative h-52 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-56'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                    sizes='(max-width: 640px) 100vw, 224px'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/20' />
                </div>

                {/* 텍스트 */}
                <div className='flex flex-1 flex-col justify-between gap-4 p-6'>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-start justify-between gap-3'>
                      <div>
                        <h3 className='text-lg font-semibold text-zinc-100 transition-colors group-hover:text-sky-400'>
                          {project.title}
                        </h3>
                        <p className='mt-0.5 text-sm font-medium text-zinc-500'>
                          {project.description}
                        </p>
                      </div>
                      <ArrowUpRight className='mt-0.5 h-5 w-5 flex-shrink-0 text-zinc-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400' />
                    </div>

                    {detail && (
                      <p className='mt-1 text-sm leading-relaxed text-zinc-400'>{detail}</p>
                    )}
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex flex-wrap gap-1.5'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='rounded-md border border-zinc-700/60 bg-zinc-800/60 px-2 py-0.5 text-xs font-medium text-zinc-400'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className='flex-shrink-0 text-xs text-zinc-600'>{project.period}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
