import React from "react"
import Modals from "./Modals"

import { Link } from "react-router-dom"
class Header extends React.Component {
  render() {
      return (
          <header className="s-header layout">
              <div className="row s-header__nav-wrap">
                  <nav className="s-header__nav">
                      <ul>
                          <li id="home"><Link className="smoothscroll" to="/">Home</Link></li>
                          <li id="about"><Link className="smoothscroll" to="/about">About</Link></li>
                          <li id="portfolio" className="current"><Link className="smoothscroll" to="/portfolio">Portfolio</Link></li>
                          <li id="contact"><Link className="smoothscroll" to="/contact">Contact</Link></li>
                      </ul>
                  </nav>
              </div>
          </header>
      )
  }
}

class Portfolio extends React.Component {
  render() {
    return(
      <React.Fragment>
      <Header />
        <section id="portfolio" className="s-portfolio target-section">
          <div className="row s-portfolio__header">
            <div className="column large-12">
              <h3>A Few Of My Latest Creations</h3>
            </div>
          </div>
          <Modals />
        </section>
      </React.Fragment>
    )
  }
}

export default Portfolio