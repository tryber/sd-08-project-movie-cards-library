import React from 'react';

import Headers from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Headers />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
