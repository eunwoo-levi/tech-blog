import { Github, ArrowUpRight } from 'lucide-react';
import { contributions } from '../data';

export default function ContributionsSection() {
  return (
    <section className='border-b border-zinc-800 px-6 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-10 text-2xl font-semibold text-white'>Contributions</h2>
        <div className='grid gap-3 sm:grid-cols-2'>
          {contributions.map((contribution, index) => (
            <a
              key={index}
              href={contribution.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 transition-colors hover:border-zinc-600'
            >
              <Github className='h-4 w-4 flex-shrink-0 text-zinc-600 transition-colors group-hover:text-zinc-300' />
              <span className='flex-1 font-mono text-sm text-zinc-300 transition-colors group-hover:text-white'>
                {contribution.name}
              </span>
              <ArrowUpRight className='h-3.5 w-3.5 flex-shrink-0 text-zinc-700 transition-colors group-hover:text-sky-400' />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
