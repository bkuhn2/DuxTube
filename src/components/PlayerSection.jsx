import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

const PlayerSection = () => {

  const selectedVideo = useSelector((state) => state.selectedVideo.value)

  return (
    <section className='flex flex-col items-center justify-center mt-8'>
      {!selectedVideo.url && 
        <>
          <div className='border-2 border-stone-500 h-player-h w-player-w flex items-center justify-center bg-stone-900'>
            <p className='text-xl text-stone-400'>  ... Click The Thumbnails Below To Watch ... </p>
          </div>
          <br />
          <br />
          <br />
        </>
      }
      {selectedVideo.url &&
        <>
          <ReactPlayer 
            url={selectedVideo.url} 
            playing={true}
            loop={true}
            controls={true}
            volume={0}
          />
          <a href={selectedVideo.videoURL} className='mt-4 mb-6 text-lg text-stone-400'>Uploaded by {selectedVideo.user}</a>
        </>
      }
    </section>
  )
}

export default PlayerSection
