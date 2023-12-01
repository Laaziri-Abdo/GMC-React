import React from "react";
const MovieCard = ({movie}) =>{
    return (
        <>
       <img  src={movie.imageUrl}/>
       <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
       </div>
        </>
    );        
};
export default MovieCard;