import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        { movies.map((element) => <MovieCard key={ element.title } movie={ element } />)}
      </section>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieList;
