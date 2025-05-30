import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { useState } from "react";
import AddMovieForm from "../components/AddMovie/AddMovie";
import data from "../utils/constants/data";

// Corrected UI Imports
import Button from "../components/UI/Button";
import Heading from "../components/UI/Typography/Heading";
import Paragraph from "../components/UI/Typography/Paragraph";
import Form from "../components/UI/Form/Form";
import Label from "../components/UI/Form/Label";
import Input from "../components/UI/Form/Input";
import Image from "../components/UI/Media/Image";



function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <main>
        <Hero />

        {/* Tombol dengan ukuran medium (default) */}
        <Button size="md" variant="primary">Lihat</Button>

        {/* Atau cukup seperti ini karena md adalah default */}
        <Button variant="secondary">Liat</Button>

        <Movies movies={movies} setMovies={setMovies} />
        <AddMovieForm movies={movies} setMovies={setMovies} />
      </main>
    </div>
  );
}

export default Home;