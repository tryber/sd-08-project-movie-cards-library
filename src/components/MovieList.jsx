// implement MovieList component here
import React from 'react';

import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((mv) => (<MovieCard
          key={ mv.title }
          movie={ mv }
          className="movie-card"
        />)) }
        ;
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieList;
