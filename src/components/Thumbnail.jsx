import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVideo, removeVideo } from '../features/mySavedVideos'
import { selectVideo } from '../features/selectedVideo'

const Thumbnail = ({savedSection, id, uploader, image, link}) => {

  const dispatch = useDispatch();
  const allVideos = useSelector((state) => state.allVideos.value)
  const savedVideos = useSelector((state) => state.mySavedVideos.value)

  const saveVideo = (event) => {
    if (!savedVideos.find(video => video.id === +event.target.id)) {
      const updatedSaved = [...savedVideos, allVideos.find(video => video.id === +event.target.id)]
      dispatch(
        addVideo(updatedSaved)
      )
    }
  }

  const deleteVideo = (event) => {
    dispatch(
      removeVideo(savedVideos.filter(video => video.id !== +event.target.id))
    )
  }

  const chooseVideo = (event) => {
    const video = allVideos.find(video => video.id === +event.target.id);
    const payload = {
      url: video.video_files[0].link,
      user: video.user.name,
      videoURL: video.url
    };
    dispatch(
      selectVideo(payload)
    );
  }


  return (
    <div className='border-1 border-cyan-800 p-4 flex flex-col items-center justify-between min-w-fit
      bg-gradient-to-b from-stone-800 to-teal-950 rounded-md m-4 my-6'>
      <img 
        className='hover:scale-105 hover:cursor-pointer hover:border-lime-400 hover:border-1 mb-6 max-h-28 md:max-h-64 rounded-md border-2 border-black'
        src={image}
        id={id}
        onClick={event => chooseVideo(event)}
      />
      <div className='flex flex-col items-center'>
        <a href={link} className='text-center mb-2 hover:text-red-800'>Uploaded by {uploader}</a>
        {savedSection && 
          <button 
            type='button' 
            className='border-1 border-stone-900 px-2 p-1 mt-2 bg-red-400 rounded-md text-gray-950 text-sm font-font4'
            id={id}
            onClick={event => deleteVideo(event)}  
          >
              Remove 🚮
          </button>
        }
        {!savedSection &&
          <button 
            type='button' 
            className='border-1 border-stone-900 px-2 mt-2 bg-teal-600 rounded-md text-gray-950 text-sm font-font4'
            id={id}
            onClick={event => saveVideo(event)}>
              Save ➕
          </button>
        } 
      </div>

    </div>
  )
}

export default Thumbnail
