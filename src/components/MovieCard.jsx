import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ movie.imagePath } alt="Foto do filme" />
          <h4 className="page-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <Rating rating={ movie.rating } />
        </div>
      </section>
    );
  }
}
MovieCard.propTypes = { movie: PropTypes.objectOf.isRequired };
export default MovieCard;
