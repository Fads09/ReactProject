import React from "react";
import { Link } from "react-router-dom";
import './App.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header >
    <nav className='topnav'>
      <img  className="logo-img"
            src="" 
            srcset=""
            width="" 
            height="40px" 
            alt="AI, Big Data and Cloud Logo"/>
      <ul>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          
      </ul>
    </nav>
  </header>
);

export default Header;
