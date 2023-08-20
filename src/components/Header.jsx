import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-row justify-between p-5 border-4 border-cyan-400'>
      <div className='ml-4 flex flex-col items-start'>
        <h1 >DuxTube</h1>
        <p >Redux + Video Experience Project</p>
        <p >Link to Pexels</p>
      </div>
      <p className='mr-4'>Saved Videos: 0</p>
    </header>
  )
}

export default Header
