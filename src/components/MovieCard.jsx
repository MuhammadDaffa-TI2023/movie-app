import PropTypes from "prop-types";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        color: "#f8fafc",
        padding: "1rem",
        borderRadius: "0.75rem",
        textAlign: "center",
      }}
    >
      <img
        src={imageUrl}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "0.5rem", marginBottom: "0.5rem" }}
      />
      <h3 style={{ fontSize: "1.1rem", marginBottom: "0.3rem" }}>{movie.title}</h3>
      <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
        ⭐ {movie.vote_average}
      </p>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
