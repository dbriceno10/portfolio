import React from "react"
import { Link } from "react-router-dom"
import logoGithub from "../assets/image/github (1).png"
import logoLinkedin from "../assets/image/linkedin.png"
import "./styles/Hero.css"
const linkedinLink = "https://www.linkedin.com/in/daniel-alejandro-687539137/"
const gihubLink = "https://github.com/dbriceno10"
class Header extends React.Component {
  render() {
      return (
          <header className="s-header layout">
              <div className="row s-header__nav-wrap">
                  <nav className="s-header__nav">
                      <ul>
                          <li id="home" className="current"><Link className="smoothscroll" to="/">Home</Link></li>
                          <li id="about"><Link className="smoothscroll" to="/about">About</Link></li>
                          <li id="portfolio"><Link className="smoothscroll" to="/portfolio">Portfolio</Link></li>
                          <li id="contact"><Link className="smoothscroll" to="/contact">Contact</Link></li>
                      </ul>
                  </nav>
              </div>
          </header>
      )
  }
}
class Hero extends React.Component {
  render() {
    return(
      <React.Fragment>
      <Header />
        <section id="hero" className="s-hero target-section">
          <div className="s-hero__bg rellax" data-rellax-speed={-7} />
          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">
                <h1><span>I'm Daniel Briceño</span></h1>
                <h3>
                  <span>I'm a  Front-end Developer.</span>
                </h3>
                <div className="s-hero__content-social">
                  <a href={linkedinLink} target="_blank"><img className="hero--logo" src={logoLinkedin} alt="logo de linkedin" title="my linkedin" /></a>
                  <a href={gihubLink} target="_blank"><img className="hero--logo" src={logoGithub} alt="logo de github" title="my github" /></a>
                </div>
              </div> {/* end s-hero__content-about */}
            </div>
          </div>
          <div className="s-hero__scroll links">
            <Link className="btn" to="/contact">Hire Me</Link>
            <Link className="btn" to="/portfolio">Explore Me</Link>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Hero