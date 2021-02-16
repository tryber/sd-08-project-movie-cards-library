import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ movies } />
      </div>
    );
  }
}
