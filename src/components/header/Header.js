import React from "react"
import { Link } from "react-router-dom"
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
                            <li className="current"><Link className="smoothscroll" to="/">Home</Link></li>
                            <li><Link className="smoothscroll" to="/about">About</Link></li>
                            <li><Link className="smoothscroll" to="/resume">Resume</Link></li>
                            <li><Link className="smoothscroll" to="/portfolio">Works</Link></li>
                            <li><Link className="smoothscroll" to="/testimonials">Testimonials</Link></li>
                            <li><Link className="smoothscroll" to="/contact">Say Hello</Link></li>
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