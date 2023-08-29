import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar({ user }) {
  return (
    <nav className="navbar">
      <div className="user-greeting">Welcome, {user}!</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to="/actors">Actors</Link>
        </li>
      </ul>
    </nav>
  );
}
