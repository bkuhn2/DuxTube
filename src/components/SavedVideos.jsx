import React, { useEffect } from 'react'
import Thumbnail from './Thumbnail';
import { useSelector, useDispatch } from 'react-redux'
import { increase } from '../features/savedCounter';

const SavedVideos = () => {

  const savedSection = true;
  const dispatch = useDispatch();
  const savedVideos = useSelector((state) => state.mySavedVideos.value)
  const savedVideosDisplay = savedVideos.length ?
    savedVideos.map((video, index) => {
      return (
        <Thumbnail
          savedSection={savedSection}
          id={video.id}
          uploader={video.user.name}
          image={video.image}
          key={index}
        />
      )
    })
    :
    [];

  useEffect(() => {
    dispatch(
      increase(savedVideos.length)
    )
  }, [savedVideos])

  return (
    <section className='flex flex-col items-center border-2 border-stone-300'>
      <h2 className='mt-8 text-xl md:text-3xl'>My Saved Videos</h2>
      <div className='border-2 border-red-500 w-11/12 my-10 h-max flex flex-row  overflow-x-scroll'>
        {!!savedVideosDisplay.length && savedVideosDisplay}
        {!savedVideosDisplay.length && <p className='self-center'>Add Videos Here...</p>}
      </div>
    </section>
  )
}

export default SavedVideos
