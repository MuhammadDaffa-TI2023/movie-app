// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
// import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";
import { useState } from "react";
import AddMovieForm from "../components/AddMovie/AddMovie";
import data from "../utils/constans/data";

function Home() {

    const [movies, setMovies] = useState(data);
    return (
        <div>
            {/* <Navbar /> */}
            <main>
                <Hero />
                <Movies movies={movies} setMovies={setMovies}/>
                <AddMovieForm movies={movies} setMovies={setMovies}/>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;