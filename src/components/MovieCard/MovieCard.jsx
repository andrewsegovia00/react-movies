import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const cardStyle = {
    background: `url("${movie.posterPath}") center center / cover no-repeat`,
  };

  return (
    <Link className="movie-link" to={`/movies/${movie.title}`}>
      <div className="item-card" style={cardStyle}>
        <div className="title">
          <h1>{movie.title}</h1>
          <h4 style={{ color: 'white', padding: '1rem' }}>Released: {movie.releaseDate}</h4>
        </div>
      </div>
    </Link>
  );
}

