import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import MoviesListPage from '../../Pages/MoviesListPage/MoviesListPage';
import MovieDetailPage from '../../Pages/MovieDetailPage/MovieDetailPage';
import ActorListPage from '../../Pages/ActorListPage/ActorListPage';
import NavBar from '../../Pages/NavBar/NavBar';
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user && <NavBar user={user} />}
      <Routes>
        {user ? (
          <>
            <Route
              path="/"
              element={<MoviesListPage movies={movies} />}
            />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorListPage />} />
          </>
        ) : (
          <Route path="/" element={<LoginPage setUser={setUser} />} />
        )}
      </Routes>
    </main>
  );
}
