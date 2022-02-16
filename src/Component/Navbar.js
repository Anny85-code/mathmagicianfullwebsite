import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-bar">
    <h1 className="math-text">Math Magicians</h1>
    <ul className="nav-ul">
      <li>
        <Link to="./">Home |</Link>
      </li>
      <li>
        <Link to="./quote">Quote |</Link>
      </li>
      <li>
        <Link to="./calculator">Calculator</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
