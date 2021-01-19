// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard';

import PropTypes from 'prop-types';
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie }/>)}
      </section>
    );
  }
} 

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ),
};
MovieList.defaultProps = {
  movies: null,
};

export default MovieList;
