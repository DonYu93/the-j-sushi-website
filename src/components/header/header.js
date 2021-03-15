import './header.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div id="header">
      <div id="header-area">
        <Link to="/">
          <img src="/images/icons/logo.png" alt="logo" />
        </Link>
        <ul id="nav-area">
          <li>
            <NavLink exact to="/" className="item" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              className="item"
              activeClassName="active"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/menu" className="item" activeClassName="active">
              MENU
            </NavLink>
          </li>
          <li>
            <a
              href="https://wfdt.ca"
              target="_blank"
              rel="noreferrer"
              className="item"
              activeClassName="active"
            >
              DELIVERY
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
