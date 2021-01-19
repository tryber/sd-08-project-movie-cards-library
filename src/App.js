import React from 'react';

import Header from './components/Header';

import './App.css';
import MovieList from './components/MovieList';
import movies from './data';


function App() {
  return (
    <main>
      <Header />
      <MovieList movies={ movies } />
    </main>
  );
}

export default App;
