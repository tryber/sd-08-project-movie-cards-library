import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const {
      movies,
    } = this.props;
    return (
      <div>
        {movies.map((film) => <MovieCard movie={ film } key={ film.title } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string, PropTypes.number).isRequired,
};

export default MovieList;
