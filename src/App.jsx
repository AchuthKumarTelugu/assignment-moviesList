import { useState } from 'react'
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let navigate=useNavigate()
function handleMovieClick (movieId) {
     navigate('/movieDetails',{state:movieId})
}
  return (
    <div className='app'>
      <div className="heading">
        <h1>MoviesFlix</h1>
      </div>
     <Routes>
      <Route path='/' element={<Home handleMovieClick={handleMovieClick}/>} />
      <Route path='/movieDetails' element={<MovieDetails/>} />
     </Routes>
    </div>
  )
}

export default App
