import React from "react"
import { Link } from "react-router-dom"
import getHash from "../utils/getHash"
class Header extends React.Component {
    render() {
        return (
            <header className="s-header layout">
                <div className="row s-header__nav-wrap">
                    <nav className="s-header__nav">
                        <ul>
                            {/* <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                            <li><a className="smoothscroll" href="#contact">Say Hello</a></li> */}
                            <li id="home" className="current" onClick = { ()=> {
                                const i =  getHash()
                                console.log(`i es: ${i}`)
                                let element = document.getElementById("home")
                                if ( i === "") {
                                    element.classList.add("current")
                                }
                                element = document.getElementById("about")
                                element.classList.remove("current")
                                element = document.getElementById("resume")
                                element.classList.remove("current")
                                element = document.getElementById("portfolio")
                                element.classList.remove("current")
                                element = document.getElementById("testimonials")
                                element.classList.remove("current")
                                element = document.getElementById("contact")
                                element.classList.remove("current")
                            }}><Link className="smoothscroll" to="/">Home</Link></li>
                            <li id="about" onClick = { ()=> {
                                const i =  getHash()
                                console.log(`i es: ${i}`)
                                let element = document.getElementById("about")
                                if ( i === "about") {
                                    element.classList.add("current")
                                }
                                element = document.getElementById("home")
                                element.classList.remove("current")
                                element = document.getElementById("resume")
                                element.classList.remove("current")
                                element = document.getElementById("portfolio")
                                element.classList.remove("current")
                                element = document.getElementById("testimonials")
                                element.classList.remove("current")
                                element = document.getElementById("contact")
                                element.classList.remove("current")
                            }}><Link className="smoothscroll" to="/about">About</Link></li>
                            <li id="resume" onClick = { ()=> {
                                const i =  getHash()
                                console.log(`i es: ${i}`)
                                let element = document.getElementById("resume")
                                if ( i === "resume") {
                                    element.classList.add("current")
                                }
                                element = document.getElementById("about")
                                element.classList.remove("current")
                                element = document.getElementById("home")
                                element.classList.remove("current")
                                element = document.getElementById("portfolio")
                                element.classList.remove("current")
                                element = document.getElementById("testimonials")
                                element.classList.remove("current")
                                element = document.getElementById("contact")
                                element.classList.remove("current")
                            }}><Link className="smoothscroll" to="/resume">Resume</Link></li>
                            <li id="portfolio" onClick = { ()=> {
                                const i =  getHash()
                                console.log(`i es: ${i}`)
                                let element = document.getElementById("portfolio")
                                if ( i === "portfolio") {
                                    element.classList.add("current")
                                }
                                element = document.getElementById("about")
                                element.classList.remove("current")
                                element = document.getElementById("resume")
                                element.classList.remove("current")
                                element = document.getElementById("home")
                                element.classList.remove("current")
                                element = document.getElementById("testimonials")
                                element.classList.remove("current")
                                element = document.getElementById("contact")
                                element.classList.remove("current")
                            }}><Link className="smoothscroll" to="/portfolio">Works</Link></li>
                            <li id="testimonials" onClick = { ()=> {
                                const i =  getHash()
                                console.log(`i es: ${i}`)
                                let element = document.getElementById("testimonials")
                                if ( i === "testimonials") {
                                    element.classList.add("current")
                                }
                                element = document.getElementById("about")
                                element.classList.remove("current")
                                element = document.getElementById("resume")
                                element.classList.remove("current")
                                element = document.getElementById("portfolio")
                                element.classList.remove("current")
                                element = document.getElementById("home")
                                element.classList.remove("current")
                                element = document.getElementById("contact")
                                element.classList.remove("current")
                            }}><Link className="smoothscroll" to="/testimonials">Testimonials</Link></li>
                            <li id="contact" onClick = { ()=> {
                                const i =  getHash()
                                console.log(`i es: ${i}`)
                                let element = document.getElementById("contact")
                                if ( i === "contact") {
                                    element.classList.add("current")
                                }
                                element = document.getElementById("about")
                                element.classList.remove("current")
                                element = document.getElementById("resume")
                                element.classList.remove("current")
                                element = document.getElementById("portfolio")
                                element.classList.remove("current")
                                element = document.getElementById("testimonials")
                                element.classList.remove("current")
                                element = document.getElementById("home")
                                element.classList.remove("current")
                            }}><Link className="smoothscroll" to="/contact">Say Hello</Link></li>
                        </ul>
                    </nav>
                </div>
                <a className="s-header__menu-toggle" href="#0" title="Menu">
                    <span className="s-header__menu-icon" />
                </a>
            </header>
        )
    }
}

export default Header