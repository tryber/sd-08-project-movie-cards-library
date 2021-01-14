import React from 'react';

function Rating(movies) {
  return (
    <div className="movie-card-rating">
      <p className="rating">
        { movies.rating }
      </p>
    </div>
  );
}

export default Rating;
