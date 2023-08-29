import React from 'react';
import { movies } from '../../data'; // Adjust the path accordingly

export default function MoviesListPage() {
  return (
    <div className="movies-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}
