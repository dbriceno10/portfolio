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
                Inicio
              </NavLink>
            </li>
            <li id="about">
              <NavLink activeClassName="current" to="/about">
                Acerca de
              </NavLink>
            </li>
            <li id="portfolio">
              <NavLink activeClassName="current" to="/portfolio">
                Proyectos
              </NavLink>
            </li>
            <li id="contact">
              <NavLink activeClassName="current" to="/contact">
                Contáctame
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header