import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css"
const Header = () => {
  return (
    <header className="s-header layout">
      <div className="row s-header__nav-wrap">
        <nav className="s-header__nav">
          <ul>
            <li id="home">
              <NavLink activeClassName="current" to="/" exact>
                Home
              </NavLink>
            </li>
            <li id="about">
              <NavLink activeClassName="current" to="/about">
                About
              </NavLink>
            </li>
            <li id="portfolio">
              <NavLink activeClassName="current" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li id="contact">
              <NavLink activeClassName="current" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header