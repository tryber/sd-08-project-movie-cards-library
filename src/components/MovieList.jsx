// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        {movies
          .map((allMovies) => <MovieCard key={ allMovies.title } movie={ allMovies } />)}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
