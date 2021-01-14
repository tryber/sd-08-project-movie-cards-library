import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  const { movies } = props;
  return (
    <div>
      {
        movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
      }
    </div>
  );
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};
