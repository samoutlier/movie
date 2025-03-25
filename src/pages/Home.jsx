import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {

  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "1994" },
    { id: 3, title: "Fast 5", release_date: "2013" },
    { id: 4, title: "Hereditary", release_date: "2019" },
  ]

  const handleSearch = (e) => {
    e.preventDefault();

  }

  return <div className="home">

    <form action="" onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search for movies..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="search-button">🔍</button>
    </form>

    <div className="movies-grid">
      {movies.map(
        (movie) => (
        movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} ></MovieCard>
      ))}
    </div>
  </div >

}


export default Home;