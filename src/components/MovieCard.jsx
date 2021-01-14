import React from 'react';
import propTypes from 'prop-types';

import Rating from './Rating';

export default function MovieCard(props) {
  const { movie } = props;
  const { title, subtitle, storyline, rating, imagePath } = movie;
  return (
    <div>
      <div>
        <img src={ imagePath } alt="" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: {
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    imagePath: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
  }.isRequired,
};
