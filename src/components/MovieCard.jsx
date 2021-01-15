import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className="movie-card-body">
        <div className="movie-card">
          <img className="movie-card-image" src={ imagePath } alt="Card avatar" />
          <div>
            <h4 className="movie-card-title">{title}</h4>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
          </div>
          <div>
            <Rating rating={ rating } />
          </div>
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
