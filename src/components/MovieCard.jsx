import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <section className="movie-card">
        <section className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt="movie cover" />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={ rating } />
        </section>
      </section>
    );
  }
}


MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};
export default MovieCard;
