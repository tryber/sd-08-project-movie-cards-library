import React from 'react';
import './App.css';

import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default App;
