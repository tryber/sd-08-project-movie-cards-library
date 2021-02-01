import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movie;
    return (
      <section>
        { movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        )) }
      </section>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieList;
