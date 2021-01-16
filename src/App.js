import React from 'react';

import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      <Footer />
    </div>
  );
}

export default App;
