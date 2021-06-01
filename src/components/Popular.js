import React from 'react';
import Movie from "./Movie";

const Popular = ({getPopularMovies,popularMovies}) =>  {
    getPopularMovies();
      return (
          <div className="movie-list-container">
              {
                  popularMovies.map(movie => <Movie key={movie.id} {...movie}/>)
              }
          </div>
      );
}

export default Popular;