// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map((element) => <MovieCard movie={ element } key={ element.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.isRequired,
};

export default MovieList;
