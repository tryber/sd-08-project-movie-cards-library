// implement Header component here
import React from 'react';

import Logo from './Logo';

export default class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <Logo />
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}
