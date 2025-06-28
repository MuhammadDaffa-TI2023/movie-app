import Hello from './components/Hello';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import CreateMovie from './pages/Create';
import PopularMovie from './pages/Popular';
import theme from "./theme"; // Import theme
import NowPlayingMovie from './pages/NowPlaying';
import TopRatedMovie from './pages/TopRated';
import Layout from './Layout'; // gunakan ini jika file-nya adalah 'index.jsx'
import Counter from './components/Counter/Counter';
import Detail from './pages/Detail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/create' element={<CreateMovie />} />
        <Route path='/movie/popular' element={<PopularMovie />} />
        <Route path='/movie/now' element={<NowPlayingMovie />} />
        <Route path='/movie/top' element={<TopRatedMovie />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/movie/:id' element={<Detail />} />
      </Routes>
    </Layout>
  );
}

export default App;
