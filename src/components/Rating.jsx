// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';


class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <span className="movie-card-rating">{ rating }</span>      
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};


export default Rating;
