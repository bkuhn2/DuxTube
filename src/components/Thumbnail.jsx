import React from 'react'

const Thumbnail = ({savedSection}) => {


  return (
    <div className='border-2 border-teal-200 h-5/6 p-2 m-4 flex flex-col items-center justify-center'>
      <img className='hover:scale-105 hover:cursor-pointer'/>
      <p className='text-center'>title</p>
      <p className='text-center'>description</p>
      <p className='text-center'>what other info?</p>
      {savedSection && 
        <button 
          type='button' 
          className='border-1 border-black px-2 mt-2'>
            Remove 🗑️
        </button>
      }
      {!savedSection &&
        <button 
          type='button' 
          className='border-1 border-black px-2 mt-2'>
            Save ➕
        </button>
      }
    </div>
  )
}

export default Thumbnail
