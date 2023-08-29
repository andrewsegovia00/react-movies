// ActorListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../../data';

export default function ActorListPage() {
  const allActors = new Set();
  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      allActors.add(actor);
      console.log(actor)
    });
  });
  console.log(allActors)

  const uniqueActors = Array.from(allActors);

  return (
    <div className="actors-list">
      {uniqueActors.map((actor, index) => (
        <div key={index} className="actor-card">
          <Link to={`/actors`}>{actor}</Link>
        </div>
      ))}
    </div>
  );
}
