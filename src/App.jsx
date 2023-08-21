import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Videos from './components/Videos'
import SavedVideos from './components/SavedVideos'
import { setAllVideos } from './features/allVideos'
import { useDispatch } from 'react-redux'
import PlayerSection from './components/PlayerSection'

function App() {

  const dispatch = useDispatch();

  const getVideos = () => {
   return fetch('https://api.pexels.com/videos/popular?per_page=20', {
    headers: {
      Authorization: '563492ad6f917000010000013592270a849047e58b69ae21118f8b70'
    }
   }).then(res => res.json())
  }


  useEffect(() => {
  getVideos().then(data => dispatch(
    setAllVideos(data.videos)
  ))
    // client.videos.popular({ per_page: 20 })
    //   .then(videos => dispatch(
    //       setAllVideos(videos.videos)
    //     ));
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
