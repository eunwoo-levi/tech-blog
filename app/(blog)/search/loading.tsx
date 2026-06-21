export default function Loading() {
  return (
    <main className='w-full'>
      <div className='mx-auto mb-8 flex w-[70%] items-center justify-center rounded-full border border-gray-300 bg-white/50 px-4 py-2 shadow-sm'>
        <div className='h-5 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
        <div className='ml-2 h-5 w-5 flex-shrink-0 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
      </div>

      <div className='mb-32 flex w-full flex-col items-center justify-center'>
        <div className='grid w-full max-w-[1200px] grid-cols-1 justify-items-center gap-8 lg:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className='h-[420px] w-[350px] overflow-hidden rounded-lg bg-white/20 shadow-lg'
            >
              <div className='h-[200px] w-full animate-pulse bg-gray-200 dark:bg-gray-700' />
              <div className='flex h-[220px] flex-col justify-between p-4'>
                <div>
                  <div className='h-4 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
                  <div className='mt-3 h-7 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
                  <div className='mt-2 h-7 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
                </div>
                <div className='h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
