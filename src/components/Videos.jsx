import React from 'react'
import Thumbnail from './Thumbnail'

const Videos = () => {

  const savedSection = false;

  return (
    <section className='flex flex-col items-center border-2 border-stone-300'>
      <h2 className='mt-6 text-xl md:text-3xl'>Popular Videos</h2>
      <div className='border-2 border-red-500 w-5/6 my-10 h-64 md:h-80 flex flex-row items-center overflow-x-auto'>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
        <Thumbnail savedSection={savedSection}/>
      </div>
    </section>
  )
}

export default Videos
