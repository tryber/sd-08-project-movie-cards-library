// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, subtitle, storyline, rating } } = this.props;

    return (
      <div className="movie-card">
        <body className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt="Imagem do filme" />
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <div className="movie-card-rating">
            <Rating rating={ rating } />
          </div>
        </body>
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
