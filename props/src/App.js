// src/App.js
import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending sci-fi thriller.",
      imageURL: "https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8",
      rating: 4.5,
    },
    // Add more movies as needed
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState("");
  const filterMovies = () => {
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) 
    );
  };

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        onTitleChange={setTitleFilter}
        onRateChange={setRateFilter}
      />
      <br></br><br></br><br></br>
      <MovieList movies={filterMovies()} />
    </div>
  );
};
export default App;
