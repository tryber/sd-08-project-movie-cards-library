// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    // const cards = movies.map((each) => <MovieCard key={ each.title } movie={ each } />);
    return (
      <div className="movie-list">
        { movies.map((each) => <MovieCard key={ each.title } movie={ each } />) }
      </div>);
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};

export default MovieList;
