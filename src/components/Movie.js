import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({title,poster_path,overview,vote_average}) => {
      const srcImg = IMG_API+poster_path;
      return (
          <div className="movie">
              <img className="movie-img" src={srcImg} alt={title}/>
              <div className="movie-info">
                  <h3 className ="movie-title">{title}</h3>
                  <span>{vote_average}</span>
              </div>
              <div className="movie-over-info">
                  <h2>Overview</h2>
                  <p>{overview}</p>
              </div>
          </div>
      );
}

export default Movie;