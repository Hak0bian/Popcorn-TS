import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { Home, Movies, AboutMovie, Actors, AboutActor } from "./pages"
import './App.css'

function App() {

  return (
    <section>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/Movies/page/:page' element={<Movies/>} />
          <Route path='/Movies/movie/:id' element={<AboutMovie/>} />
          <Route path='/Actors/page/:page' element={<Actors/>} />
          <Route path='/Actors/actor/:id' element={<AboutActor/>} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
