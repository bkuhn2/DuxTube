import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-row justify-between p-5 border-4 border-cyan-400'>
      <h1 className='ml-4'>DuxTube</h1>
      <p className='mr-4'>Saved Videos: 0</p>
    </header>
  )
}

export default Header
