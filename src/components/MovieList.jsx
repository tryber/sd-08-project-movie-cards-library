// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movie = movies;
    return (
      <div>
        {movie.map((item) => <MovieCard key={ item.title } movie={ item } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieList;
