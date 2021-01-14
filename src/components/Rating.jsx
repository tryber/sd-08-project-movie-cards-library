// implement Rating component here
import React from 'react';
import propTypes from 'prop-types';

function Rating(props) {
  const { rating } = props;
  return (
    <div>
      <p className="rating">{rating}</p>
    </div>
  );
}

Rating.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Rating;
