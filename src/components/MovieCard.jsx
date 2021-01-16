import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MoviCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <section>
        <div>
          <img src={ imagePath } alt={ title } />
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
          <div><Rating rating={ rating } /></div>
        </div>
      </section>
    );
  }
}

MoviCard.propTypes = { movie: PropTypes.arrayOf.isRequired };
export default MoviCard;
