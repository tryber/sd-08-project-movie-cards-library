import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <section className="App">
      <Header />
      <MovieList movies={ movies } />
    </section>
  );
}

export default App;
