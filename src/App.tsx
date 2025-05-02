import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { Home, Movies, AboutMovie } from "./pages"
import './App.css'

function App() {

  return (
    <section>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/Movies' element={<Movies/>} />
          <Route path='/Movies/movie/:id' element={<AboutMovie/>} />
          {/*
          <Route path='/TV-Series' element={<TV TvData={TvData} tvPage={tvPage} setTvPage={setTvPage}/>} />
          <Route path='/TV-Series/tv/:id' element={<AboutTV TvData={TvData}/>} />

          <Route path='/Actors' element={<Actors actorsData={actorsData} actorPage={actorPage} setActorPage={setActorPage}/>} />
          <Route path='/Actors/actor/:id' element={<AboutActor actorsData={actorsData}/>} /> */}
        </Route>
      </Routes>
    </section>
  )
}

export default App
