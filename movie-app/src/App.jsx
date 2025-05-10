import Hello from './components/Hello'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import CreateMovie from './pages/Create'
import PopularMovie from './pages/Popular'
import NowPlayingMovie from './pages/NowPlaying'
import TopRatedMovie from './pages/TopRated'
import Layout from './Layout'

function App() {
  return (
    <Layout>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/movie/create' element={<CreateMovie />}></Route>
      <Route path='/movie/popular' element={<PopularMovie />}></Route>
      <Route path='/movie/now' element={<NowPlayingMovie />}></Route>
      <Route path='/movie/top' element={<TopRatedMovie />}></Route>
    </Routes>
    </Layout>
  )
}

export default App;