import React from 'react';
import PropTypes, { string } from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((value) => <MovieCard key={ value.title } movie={ value } />)}
        ;
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string,
};

MovieList.defaultProps = {
  movies: string,
};

export default MovieList;
