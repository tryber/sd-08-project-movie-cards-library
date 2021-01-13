import React, { Component } from 'react';
import styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer style={ styles }>
        Made with
        <span style={ { color: 'red' } }> &#9829; </span>
        by
        <a className={ styles['linked-in'] } href="https://www.linkedin.com/in/paulohbsimoes/" rel="noreferrer" target="_blank"> Paulo Simões </a>
      </footer>
    );
  }
}

export default Footer;
