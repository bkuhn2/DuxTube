import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVideo, removeVideo } from '../features/mySavedVideos'
import { selectVideo } from '../features/selectedVideo'

const Thumbnail = ({savedSection, id, uploader, image}) => {

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
      user: video.user.name
    };
    dispatch(
      selectVideo(payload)
    );
  }



  return (
    <div className='border-2 border-teal-200 p-4 m-2 flex flex-col items-center justify-between min-w-fit'>
      <img 
        className='hover:scale-105 hover:cursor-pointer mb-6 max-h-28 md:max-h-64 '
        src={image}
        id={id}
        onClick={event => chooseVideo(event)}
      />
      <div className='flex flex-col items-center'>
        <p className='text-center'>Uploaded by {uploader}</p>
        {savedSection && 
          <button 
            type='button' 
            className='border-1 border-black px-2 mt-2'
            id={id}
            onClick={event => deleteVideo(event)}  
          >
              Remove 🗑️
          </button>
        }
        {!savedSection &&
          <button 
            type='button' 
            className='border-1 border-black px-2 mt-2'
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
