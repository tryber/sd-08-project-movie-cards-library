import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class Moviecard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <article className="movie-card">
        <img className="movie-card-image" alt="Poster" src={ imagePath } />
        <div className="movie-card-body">
          <h4 className="movie-card-tile">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={ rating } />
        </div>
      </article>
    );
  }
}

Moviecard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default Moviecard;
