import React from 'react';
import './App.css';

import MovieList from './components/MovieList';

import Header from './components/Header';

import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <MovieList movies={ data } />
      </div>
    </div>
  );
}

export default App;
