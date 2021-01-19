// implement MovieCard component here
import React from 'react';

import PropTypes from 'prop-types';

import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <img
          className="movie-card-image"
          src={ movie.imagePath }
          alt={ movie.title }
        />
        <section>
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="mivie-card-storyline">{ movie.storyline }</p>
        </section>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: null,
};

export default MovieCard;
