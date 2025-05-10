import style from './Movies.module.css';
import Movie from "../Movie/Movie";
import data from "../../utils/constans/data";
import {useState} from "react";

function Movies(props) {
    // const [movies, setMovies] = useState(data);
    const {movies, setMovies} = props;

    function handleClick() {
        const movie = {
            id: "xyz", title : "Jigsaw",
            year: "2021", type : "Movie",
            poster : "https://picsum.photos/300/400",
        };

        setMovies([...movies, movie]);
    }

    return (
        <div className={style.container}>
            <section className={style.movies}>
                <h2 className={style.movies__title}>Latest Movie</h2>
                <div className={style.movie__container}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
                <button onClick={handleClick}>Add Movie</button>
            </section>
        </div>
    );
}

export default Movies;