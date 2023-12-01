import React from 'react'
import MovieList from './MovieList';
import { useState } from 'react';
import Filter from './Filter'

export default function App() {
  const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      description: " film nadi ghir tfarjo fih ",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg",
      rating: 9.3
    },
    {
      title: 'Modawala',
      year: 1994,
      description: " film nadi ghir tfarjo fih ",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYTdiYWJiNzEtYzU3MC00NmQ1LTljZGItYmUxNDY5MzljNTY5XkEyXkFqcGdeQXVyMTA0Njc0MzM0._V1_FMjpg_UX1000_.jpg",
      rating: 9.99
    },
    {
      title: 'the green mile',
      year: 1994,
      description: " film nadi ghir tfarjo fih ",
      imageUrl: "https://play-lh.googleusercontent.com/hZuesjSWMLsJK9UdfKut2LM4fVk7bfMoaGaRMt6gDR5mJSjv0AlbBUnR7PY0oBkzM1j5eoE9csuESEWzzNY",
      rating: 9.3
    }
  ];
  const [titleFilter, setTitleFilter] = useState("");
  const filterMovies = () => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()))
  }
  return (
    <div>
      <Filter titleFilter={titleFilter} onTitleChange={setTitleFilter}/>
      <MovieList movies={filterMovies()} />
    </div>
  )
}
