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
          link={video.url}
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
    <section className='flex flex-col items-center text-stone-300'>
      <h2 className='mt-10 text-xl md:text-3xl text-yellow-500 font-font1'>My Saved Videos</h2>
      <div className='border-1 border-stone-600 w-11/12 my-10 h-max flex flex-row overflow-x-scroll p-4 bg-stone-900 [box-shadow:_1px_8px_20px_rgb(0_0_0_/_25%)]'>
        {!!savedVideosDisplay.length && savedVideosDisplay}
        {!savedVideosDisplay.length && <p className='self-center'>Add Videos Here...</p>}
      </div>
    </section>
  )
}

export default SavedVideos
