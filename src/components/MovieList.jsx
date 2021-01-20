// implement MovieList component here
import { arrayOf } from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </section>);
  }
}

MovieList.propTypes = {
  movies: arrayOf().isRequired,
};

export default MovieList;
