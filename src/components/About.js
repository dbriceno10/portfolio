import React from "react"
import userPhoto from "../assets/image/photo-perfil5.jpg"
import "./styles/About.css"
import CV from "../assets/cv/Daniel_Briceno_CV.pdf"

import { Link } from "react-router-dom"

class Header extends React.Component {
  render() {
      return (
          <header className="s-header layout">
              <div className="row s-header__nav-wrap">
                  <nav className="s-header__nav">
                      <ul>
                          <li id="home"><Link className="smoothscroll" to="/">Home</Link></li>
                          <li id="about" className="current"><Link className="smoothscroll" to="/about">About</Link></li>
                          <li id="portfolio"><Link className="smoothscroll" to="/portfolio">Portfolio</Link></li>
                          <li id="contact"><Link className="smoothscroll" to="/contact">Contact</Link></li>
                      </ul>
                  </nav>
              </div>
          </header>
      )
  }
}
class About extends React.Component {
    render() {
        return (
          <React.Fragment>
          <Header />
          <section id="about" className="s-about target-section">
            <div className="row">
              <div className="column large-3 tab-12">
                <img className="s-about__pic" src={userPhoto} alt="user avatar" />
              </div>
              <div className="column large-9 tab-12 s-about__content">
                <h1 className="about-me">About Me</h1>
                <p className="about-description">
                Hi, I'm Daniel, Font-end developer, I have completed my training thanks to the IBM CAD101EN course: Introduction to Cloud Development with HTML, CSS, and JavaScript. I am passionate about technologies and tools for the web, JavaScript enthusiast, although especially for React Js, since I started using it I couldn't stop, I love it. I’m currently available for technology work. If you have a collaborative project work looking for a profile like mine, then get in touch.
                </p>
                <hr />
                <h2 className="about-me">What I Do</h2>
                <br/>
                <h3 className="about-me center">Front-end</h3>
                <p className="about-description">As a javascript developer, I have experience in using HTML and CSS, also in handling some frameworks like JQuery, mainly React JS. I can connect applications with an API with no problem to fetch data.</p>
                <hr/>
                <div className="row s-about__content-bottom">
                  <div className="column w-1000-stack cv">
                    <a className="btn btn--download" href={CV} download="Daniel_Briceno_CV">Download CV</a>
                  </div>
                </div> 
              </div>
            </div>
          </section>
          <section className="s-resume target-section">
            <div className="row s-resume__section ">
                <div className="column large-3 tab-12">
                  <h3 className="section-header-allcaps">Skills</h3>
                </div>
                <div className="column large-9 tab-12">
                  <div className="resume-block">
                    <ul className="skill-bars-fat">
                      <li>
                        <div className="progress percent95" />
                        <strong>HTML</strong>
                      </li>
                      <li>
                        <div className="progress percent95" />
                        <strong>CSS</strong>
                      </li>
                      <li>
                        <div className="progress percent90" />
                        <strong>Javascript</strong>
                      </li>
                      <li>
                        <div className="progress percent75" />
                        <strong>Figma</strong>
                      </li>
                      <li>
                        <div className="progress percent80" />
                        <strong>React JS</strong>
                      </li>
                      <li>
                        <div className="progress percent85" />
                        <strong>Git</strong>
                      </li>
                      <li>
                        <div className="progress percent50" />
                        <strong>NodeJS</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </React.Fragment>
        )
    }
}

export default About