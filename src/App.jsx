import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Videos from './components/Videos'
import SavedVideos from './components/SavedVideos'
import { createClient } from 'pexels';
import { setAllVideos } from './features/allVideos'
import { useDispatch } from 'react-redux'
import PlayerSection from './components/PlayerSection'

function App() {

  const client = createClient('563492ad6f917000010000013592270a849047e58b69ae21118f8b70');
  const dispatch = useDispatch();

  useEffect(() => {
    client.videos.popular({ per_page: 20 })
      .then(videos => dispatch(
          setAllVideos(videos.videos)
        ));
  }, []);


  return (
    <main className='font-font3 bg-stone-800 bg-gradient-to-r from-slate-800 to-zinc-800'>
      <Header />
      <PlayerSection />
      <Videos />
      <SavedVideos />
    </main>
  )
}

export default App
