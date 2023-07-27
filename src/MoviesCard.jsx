import React from "react";

const link ="https://www.imdb.com/title/" ;
const MoviesCard = ({ movie}) =>{
    return(
        <div className="movie">
            <a href={link + movie.imdbID} target="_blank" >
        <div> <p>{movie.Year}</p></div>
        <div><img src={movie.Poster!== 'N/A'? movie.Poster :'https://via.placeholder.com/400' } alt={movie.Title} /></div>
        <div> <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
         </div>
         </a>
      </div>
    );
}

export default MoviesCard;