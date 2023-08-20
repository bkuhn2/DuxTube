import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Videos from './components/Videos'
import SavedVideos from './components/SavedVideos'

function App() {

  return (
    <main className='h-screen w-screen'>
      <Header />
      <Videos />
      <SavedVideos />
    </main>
  )
}

export default App
