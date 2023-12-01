import React from "react";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.imageURL} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};
export default MovieCard;
