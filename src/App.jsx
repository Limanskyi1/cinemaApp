import React from 'react';
import { Home } from './pages/Home';
import { Routes , Route } from 'react-router-dom';
import { BookMarked } from './pages/BookMarked';
import { MovieDetails } from './components/MovieDetails';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pinned" element={<BookMarked/>} />
        <Route path="/film/:id" element={<MovieDetails/>}/>
      </Routes>
      
  );
}

export default App;
