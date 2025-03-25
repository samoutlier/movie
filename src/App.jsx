import './App.css'
import MovieCard from './components/MovieCard';



function App() {

  return (
    <>
      <Text display="Hello" />
      <Text display="World" />
      <MovieCard movie={{ title: "Dabangg", release_date: "20/02/2025" }} />
    </>
  )
}

function Text({ display }) {
  return <>
    <div>
      <p>
        {display}
      </p>
    </div>
  </>
}

export default App;

