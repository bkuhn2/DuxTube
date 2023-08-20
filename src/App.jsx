import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Videos from './components/Videos'
import SavedVideos from './components/SavedVideos'
import { createClient } from 'pexels';

function App() {

  const client = createClient('563492ad6f917000010000013592270a849047e58b69ae21118f8b70');

  client.videos.popular({ per_page: 20 })
    .then(videos => {
      console.log(videos.videos);
    });


  return (
    <main className='h-screen w-screen'>
      <Header />
      <Videos />
      <SavedVideos />
    </main>
  )
}

export default App
