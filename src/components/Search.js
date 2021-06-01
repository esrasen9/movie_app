import React from 'react';
import Movie from "./Movie";

const Search = ({searchMovies}) => {
      return (
          <div className="movie-list-container">
              {
                  searchMovies.map(movie => <Movie key={movie.id} {...movie}/>)
              }
          </div>
      );
}

export default Search;