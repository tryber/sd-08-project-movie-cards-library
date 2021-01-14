import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <MovieList movies={ movies } />
      </main>
    );
  }
}

export default App;
