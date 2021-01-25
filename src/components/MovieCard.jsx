import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <img className="movie-card-image" src={ movie.imagePath } alt="movies" />
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
        </section>
        <section className="movie-card-rating">
          <Rating rating={ movie.rating } />
        </section>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: {
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }.isRequired,
};

export default MovieCard;
