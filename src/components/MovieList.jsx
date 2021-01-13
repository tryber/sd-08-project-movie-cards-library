// implement MovieList component here

import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section className="movie-list">
        {movies.map((element) => <MovieCard movie={ element } key={ element.title } />)}
      </section>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    map: PropTypes.func,
  }),
};

MovieList.defaultProps = {
  movies: PropTypes.array,
};
