import React from 'react'

const SavedVideos = () => {

  const currentSection = 'Saved Videos';

  return (
    <section className='flex flex-col items-center border-2 border-stone-300'>
      <h2 className='mt-6 text-xl md:text-3xl'>My Saved Videos</h2>
      <div className='border-2 border-red-500 w-5/6 my-10 h-64 md:h-80 flex flex-row overflow-x-auto'>

      </div>
    </section>
  )
}

export default SavedVideos
