import React from 'react';
import PropTypes from 'prop-types';
import MovieCart from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((data) => <MovieCart key={ data.title.toString() } movie={ data } />)}
      </section>
    );
  }
}

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};


export default MovieList;
