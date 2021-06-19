import React from "react"
import { Link } from "react-router-dom"
import logoGithub from "../assets/image/github (1).png"
import logoLinkedin from "../assets/image/linkedin.png"
import "./styles/Hero.css"
const linkedinLink = "https://www.linkedin.com/in/daniel-alejandro-687539137/"
const gihubLink = "https://github.com/dbriceno10"
class Hero extends React.Component {
    render() {
        return(
            
<section id="hero" className="s-hero target-section">
  <div className="s-hero__bg rellax" data-rellax-speed={-7} />
  <div className="row s-hero__content">
    <div className="column">
      <div className="s-hero__content-about">
        <h1>I'm Daniel Briceño</h1>
        {/* <h3>
            I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
            effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
            and learn more <a className="smoothscroll" href="#about">about me</a>.
        </h3> */}
        <h3>
        <span>I'm a  Front-end Developer, and electrical engineering student.</span>
        </h3>
        <div className="s-hero__content-social">
          {/* <a href="#0"><i className="fab fa-facebook-square" aria-hidden="true" /></a> */}
          {/* <a href="#0"><i className="fab fa-twitter" aria-hidden="true" /></a> */}
          {/* <a href="#0"><i className="fab fa-instagram" aria-hidden="true" /></a> */}
          {/* <a href="#0"><i className="fab fa-dribbble" aria-hidden="true" /></a> */}
          {/* <a href="#0"><i className="fab fa-behance" aria-hidden="true" /></a> */}
          {/* <a href="#0" target="_blank"><i className="fab fa-linkedin" aria-hidden="true" /></a> */}
          <a href={linkedinLink} target="_blank"><img className="hero--logo" src={logoLinkedin} alt="logo de linkedin" title="my linkedin" /></a>
          <a href={gihubLink} target="_blank"><img className="hero--logo" src={logoGithub} alt="logo de github" title="my github" /></a>
        </div>
      </div> {/* end s-hero__content-about */}
    </div>
  </div> {/* s-hero__content */}
  {/* <div className="s-hero__scroll">
    <a href="#about" className="s-hero__scroll-link smoothscroll">
      <span className="scroll-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
      </span>
      <span className="scroll-text">Scroll Down</span>
    </a>
  </div> */}
  <div className="s-hero__scroll links">
    <Link className="btn" to="/contact">Hire Me</Link>
    <Link className="btn" to="/portfolio">Explore Me</Link>
  </div>
</section>
        )
    }
}

export default Hero