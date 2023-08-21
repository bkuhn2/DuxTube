import React from 'react'
import Thumbnail from './Thumbnail'
import { useSelector } from 'react-redux'

const Videos = () => {

  const savedSection = false;
  const allVideos = useSelector((state) => state.allVideos.value);
  const videosDisplay = allVideos.length ? 
    allVideos.map((video, index) => {
      return (
        <Thumbnail 
          savedSection={savedSection}
          id={video.id}
          uploader={video.user.name}
          image={video.image}
          link={video.url}
          key={index}
        />
      )
    })
    :
    [];



  return (
    <section className='flex flex-col items-center border-2 border-stone-300'>
      <h2 className='mt-6 text-xl md:text-3xl'>Popular Videos</h2>
      <div className='border-2 border-red-500 w-11/12 my-10 h-max flex flex-row overflow-x-scroll'>
        {!!videosDisplay.length && videosDisplay}
        {!videosDisplay.length && <p className=''>Loading...</p>}
      </div>
    </section>
  )
}

export default Videos
