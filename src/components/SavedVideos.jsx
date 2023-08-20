import React from 'react'
import Thumbnail from './Thumbnail';

const SavedVideos = () => {

  const savedSection = true;

  return (
    <section className='flex flex-col items-center border-2 border-stone-300'>
      <h2 className='mt-6 text-xl md:text-3xl'>My Saved Videos</h2>
      <div className='border-2 border-red-500 w-11/12 my-10 h-max flex flex-row overflow-x-scroll'>
        <Thumbnail savedSection={savedSection}/>
      </div>
    </section>
  )
}

export default SavedVideos
