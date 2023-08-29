import React from 'react';
import { movies } from '../../data';
import MovieCard from '../../components/MovieCard/MovieCard'

export default function MoviesListPage() {
  return (
    <div className="movies-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}
