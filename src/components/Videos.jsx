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
    <section className='flex flex-col items-center text-stone-300'>
      <h2 className='mt-8 text-xl md:text-3xl text-yellow-500 font-font1'>Popular Videos</h2>
      <div className='border-1 border-stone-600 w-11/12 my-10 h-max flex flex-row overflow-x-scroll p-4 bg-stone-900 [box-shadow:_1px_8px_20px_rgb(0_0_0_/_25%)]'>
        {!!videosDisplay.length && videosDisplay}
        {!videosDisplay.length && <p className=''>Loading...</p>}
      </div>
    </section>
  )
}

export default Videos
