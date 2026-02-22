import { awards } from '../data';

export default function AwardsSection() {
  return (
    <section className='border-b border-zinc-800 px-6 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-10 text-2xl font-semibold text-white'>Awards</h2>
        <div className='divide-y divide-zinc-900'>
          {awards.map((award, index) => (
            <div key={index} className='flex items-center justify-between py-4'>
              <p className='text-sm text-zinc-200'>{award.title}</p>
              <span className='ml-6 flex-shrink-0 text-sm font-medium text-amber-400'>
                {award.prize}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
