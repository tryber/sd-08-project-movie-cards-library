import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import './MovieList.css';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movieList">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.shape(PropTypes.object).isRequired };

export default MovieList;
