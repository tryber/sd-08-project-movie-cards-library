import React from 'react';
import './App.css';
import Header from './components/Header';
 import MovieCard from './components/MovieCard';
 import MovieList from './components/MovieList';
// import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCard> <MovieList movies/></MovieCard>
    </div>
  );
}

export default App;