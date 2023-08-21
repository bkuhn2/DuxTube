import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const numberOfSaved = useSelector((state) => state.savedCounter.value)

  return (
    <header className='flex flex-row justify-between p-5 border-1 border-cyan-900 bg-stone-900  bg-gradient-to-r from-stone-950 to-stone-800[box-shadow:_1px_8px_20px_rgb(0_0_0_/_25%)]'>
      <div className='ml-4 flex flex-col items-center'>
        <h1 className='text-6xl text-rose-700 font-font4' > [ Dux-Tube ]</h1>
        <p className='text-2xl text-yellow-500 mb-1 mt-2'>React Redux + Video Exercise</p>
        <a href='https://www.pexels.com/' className='text-base text-lime-300 font-font3 mt-1'>Videos Provided By Pexels</a>
      </div>
      <p className='mr-4 text-3xl text-teal-400 font-font4'>Saved Videos: {numberOfSaved}</p>
    </header>
  )
}

export default Header
