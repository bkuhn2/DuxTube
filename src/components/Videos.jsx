import React from 'react'
import Thumbnail from './Thumbnail'
import { useSelector } from 'react-redux'

const Videos = () => {

  const savedSection = false;
  const allVideos = useSelector((state) => state.allVideos.value);
  const videosDisplay = allVideos.length ? 
    allVideos.map(video => {
      return (
        //NEED VIDEO SPECIFIC DATA: name, title, ID, url, key
        <Thumbnail savedSection={savedSection}/>
      )
    })
    :
    [];



  return (
    <section className='flex flex-col items-center border-2 border-stone-300'>
      <h2 className='mt-6 text-xl md:text-3xl'>Popular Videos</h2>
      <div className='border-2 border-red-500 w-5/6 my-10 h-64 md:h-80 flex flex-row items-center overflow-x-auto'>
        {!!videosDisplay.length && videosDisplay}
        {!videosDisplay.length && <p className=''>Loading...</p>}
      </div>
    </section>
  )
}

export default Videos
