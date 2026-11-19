import MovieCard from "./MovieCard.jsx";

function MovieList({ movies, onWatched }) {
  return (
    <section>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          watched={movie.watched}
          onWatched={() => onWatched(movie.id)}
        />
      ))}
    </section>
  );
}

export default MovieList;