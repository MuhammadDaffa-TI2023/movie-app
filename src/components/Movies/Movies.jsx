import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";

function Movies(props) {
  // ✅ Tambahkan props title
  const { title, movies, setMovies } = props;

  function handleClick() {
    const movie = {
      id: "xyz",
      title: "Jigsaw", 
      year: "2021",
      type: "movie",
      poster: "https://picsum.photos/300/400",
    };
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        {/* ✅ Gunakan props title di heading */}
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
