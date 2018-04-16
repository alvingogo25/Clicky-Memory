import React from 'react';

const Nav = (props) => (
    <nav className="nav justify-content-center fixed-top bg-dark">
      <ul className="nav text-light">
        <li className="navbar-brand nav-item">
          <a href="/" className="text-light">Clicky Game</a>
          </li>
          <li className="nav-item"><h5>{`Score: ${props.score} | Top Score: ${props.topScore}`}</h5></li>
      </ul>
    </nav>
);

export default Nav;
