import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import './components/Style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
