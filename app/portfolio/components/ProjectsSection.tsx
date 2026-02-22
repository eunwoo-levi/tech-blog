import { ExternalLink } from 'lucide-react';
import { projects } from '../data';

export default function ProjectsSection() {
  return (
    <section className='border-b border-zinc-800 px-6 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-10 text-2xl font-semibold text-white'>Projects</h2>
        <div className='grid gap-3 sm:grid-cols-2'>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-zinc-600'
            >
              <div className='mb-2 flex items-start justify-between gap-3'>
                <h3 className='text-sm font-semibold text-zinc-100 transition-colors group-hover:text-sky-400'>
                  {project.title}
                </h3>
                <ExternalLink className='mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-zinc-700 transition-colors group-hover:text-sky-400' />
              </div>
              <p className='text-xs text-zinc-500'>{project.description}</p>
              <p className='mt-3 text-xs text-zinc-700'>{project.period}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
