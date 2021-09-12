import React from "react";
import { Link } from "react-router-dom";
import "./styles/Error.css";
import error500 from "../assets/image/Error404.jpg";

class Header extends React.Component {
  render() {
    return (
      <header className="s-header layout">
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li id="home">
                <Link className="smoothscroll" to="/">
                  Home
                </Link>
              </li>
              <li id="about">
                <Link className="smoothscroll" to="/about">
                  About
                </Link>
              </li>
              <li id="portfolio">
                <Link className="smoothscroll" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li id="contact">
                <Link className="smoothscroll" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
class Error404 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="PageError">
          <Link to={`/`}>
            <img
              className="error-img"
              src={error500}
              alt="server-internal error"
            />
          </Link>
          <div className="Badges__buttons">
            <Link className="btn btn-primary btn-home" to={`/`}>
              Home
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Error404;
