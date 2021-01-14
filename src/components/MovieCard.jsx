// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


export default class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating = 0, imagePath } } = this.props;

    return (
      <section className="movie-card">
        <img src={ imagePath } alt="Movie" className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
