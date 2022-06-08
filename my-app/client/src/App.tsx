import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import MoviePage from './components/pages/MoviePage';
import TVPage from './components/pages/TVPage';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/tv" element={<TVPage />} />
          <Route path="/tv/:id" element={<MoviePage movie={false} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
