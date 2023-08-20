import React from 'react'

const Thumbnail = ({savedSection, id, uploader, image}) => {


  return (
    <div className='border-2 border-teal-200 p-4 m-2 flex flex-col items-center justify-between min-w-fit'>
      <img className='hover:scale-105 hover:cursor-pointer mb-6 max-h-28 md:max-h-64 '
        src={image}
      />
      <div className='flex flex-col items-center'>
        <p className='text-center'>Uploaded by {uploader}</p>
        {savedSection && 
          <button 
            type='button' 
            className='border-1 border-black px-2 mt-2'
            id={id}>
              Remove 🗑️
          </button>
        }
        {!savedSection &&
          <button 
            type='button' 
            className='border-1 border-black px-2 mt-2'
            id={id}>
              Save ➕
          </button>
        } 
      </div>

    </div>
  )
}

export default Thumbnail
