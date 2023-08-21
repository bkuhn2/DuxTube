import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

const PlayerSection = () => {

  const selectedVideo = useSelector((state) => state.selectedVideo.value)

  return (
    <section className='flex flex-col items-center justify-center mt-6'>
      {!selectedVideo.url && 
        <>
          <div className='border-2 border-cyan-400 h-player-h w-player-w flex items-center justify-center'>
            <p className=''> [  Click On One Of The Videos Below To Watch Here ⏯️  ]</p>
          </div>
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
          />
          <p className='mt-2 mb-6'>Uploaded by {selectedVideo.user}</p>
        </>
      }
    </section>
  )
}

export default PlayerSection
