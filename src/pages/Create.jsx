import { useState } from "react";

function CreateMovie() {
  const [movies, setMovies] = useState([]); // simpan semua movie yg diinput
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    year: "",
    type: "movie",
    poster: "",
  });

  // Update isi form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Saat form disubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi
    if (!formData.id || !formData.title || !formData.year || !formData.poster) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    // Tambahkan ke daftar movie
    setMovies((prevMovies) => [...prevMovies, formData]);

    // Reset form
    setFormData({
      id: "",
      title: "",
      year: "",
      type: "movie",
      poster: "",
    });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input name="id" placeholder="ID" value={formData.id} onChange={handleChange} required />
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
        <input name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
        <input name="poster" placeholder="Poster URL" value={formData.poster} onChange={handleChange} required />
        <button type="submit" style={{ backgroundColor: "#22c55e", color: "#fff", padding: "0.5rem", border: "none" }}>
          Add Movie
        </button>
      </form>

      {/* Tampilkan daftar movie */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Movie List</h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "1rem",
        }}>
          {movies.map((movie) => (
            <div key={movie.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
              <img src={movie.poster} alt={movie.title} style={{ width: "100%", borderRadius: "6px" }} />
              <h4>{movie.title}</h4>
              <p>{movie.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateMovie;
