import { GraduationCap, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className='border-b border-zinc-800 px-6 py-24 sm:py-32'>
      <div className='mx-auto max-w-4xl'>
        <p className='mb-3 text-xs font-medium uppercase tracking-widest text-zinc-500'>
          Frontend Engineer
        </p>
        <h1 className='text-5xl font-bold tracking-tight text-white sm:text-6xl'>성은우</h1>
        <p className='mt-5 text-base leading-relaxed text-zinc-400'>
          사용자의 시선에서 문제를 발견하고, 더 나은 사용자 경험으로 풀어내는 프론트엔드
          개발자입니다.
        </p>
        <p className='mt-2 text-base text-zinc-500'>
          새로운 도전을 두려워하지 않고, 문제를 개선하기 위해 깊이 파고드는 것을 좋아합니다.
        </p>
        <div className='mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500'>
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
