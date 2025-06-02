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

  <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem 0" }}>
  <Button size="md" variant="primary">Lihat</Button>
  <Button size="md" variant="secondary">Liat</Button>  {/* tambahkan size="md" */}
  </div>


  <Movies movies={movies} setMovies={setMovies} />
  <AddMovieForm movies={movies} setMovies={setMovies} />
</main>

    </div>
  );
}

export default Home;