import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark mb-5">
        <div className="container">
          <ul className="navbar-nav ml-auto d-inline-block">
            <li className="nav-item d-inline-block p-4 mr-1">
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item d-inline-block p-4 mr-1">
              <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li className="nav-item d-inline-block p-4 mr-1">
              <NavLink activeClassName="active" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )
  }

  export default Navbar;
