import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <section>
        <h5 className="rating">{rating}</h5>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
