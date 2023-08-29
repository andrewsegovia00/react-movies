import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../../data';

export default function MovieDetailPage() {
  const { movieName } = useParams();
  const movie = movies.find((movie) => movie.title === movieName);
  console.log(movie)
  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="movie-detail">
      <img src={movie.posterPath} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Cast: {movie.cast.join(', ')}</p>
    </div>
  );
}

