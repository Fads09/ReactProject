import React from "react";
import { Link } from "react-router-dom";
import './App.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className='topnav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
