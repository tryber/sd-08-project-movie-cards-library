import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-cards-container movie-list">
        {movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
        />))}
      </section>
    );
  }
}
MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };
export default MovieList;
