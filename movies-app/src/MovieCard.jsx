function MovieCard({ title, genre, watched, onWatched }) {
    return (
      <article>
        <h2>{title}</h2>
        <p>Жанр: {genre}</p>
        <p>{watched ? "Переглянуто" : "Не переглянуто"}</p>
        <button type="button" onClick={onWatched}>
          Переглянуто
        </button>
      </article>
    );
  }
  
  export default MovieCard;