import React from 'react';
import './App.css';

import MovieList from './components/MovieList';
import Header from './components/Header';
import movies from './data';

class Index extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default Index;
