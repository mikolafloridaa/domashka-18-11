import { useState, useEffect } from "react";
import MovieList from "./MovieList.jsx";

function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : [];
  });
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  function handleAdd(event) {
    event.preventDefault();
    if (!title.trim() || !genre.trim()) {
      return;
    }
    setMovies([
      ...movies,
      { id: Date.now(), title, genre, watched: false },
    ]);
    setTitle("");
    setGenre("");
  }
  function markWatched(id) {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: true } : movie
      )
    );
  }

  return (
    <main>
      <h1>Мої фільми</h1>
      <form onSubmit={handleAdd}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Назва"
        />
        <input
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          placeholder="Жанр"
        />
        <button type="submit">Додати</button>
      </form>
      <MovieList movies={movies} onWatched={markWatched} />
      <p>Переглянуто: {movies.filter((movie) => movie.watched).length}</p>
<p>Не переглянуто: {movies.filter((movie) => !movie.watched).length}</p>
    </main>
  );
}

export default App;