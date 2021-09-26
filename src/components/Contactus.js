import React from "react";
import { Link } from "react-router-dom";
import "./styles/Contactus.css";
import Form from "./Form";
const email = "daniel.b100726@gmail.com";
const cellPhone = "tel:+0424-950-1974";
const githubLink = "https://github.com/dbriceno10";
const linkedinLink = "https://www.linkedin.com/in/dbriceno10/";
const telegramLink = "https://t.me/dbriceno";

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
              <li id="contact" className="current">
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

class Contactus extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section id="contact" className="s-contact target-section">
          <div className="row s-contact__header">
            <div className="column large-12">
              <h3 className="section-header-allcaps">
                <span className="black-background">Say Hello</span>
              </h3>
            </div>
          </div>
          <div className="row s-contact__content">
            <div className="column large-7 medium-12">
              <h4 className="huge-text">
                <span className="black-background">
                  Let's start a new project together, I want to collaborate to
                  materialize that idea into a successful project.
                </span>
              </h4>
              <Form />
            </div>
            <div className="column large-4 medium-12">
              <div className="row contact-infos">
                <div className="column large-12 medium-6 tab-12">
                  <div className="contact-block">
                    <h5 className="contact-block__header">
                      <span className="black-background">Email</span>
                    </h5>
                    <p className="contact-block__content">
                      <span className="black-background">
                        <a className="mailtoui" href={email}>
                          daniel.b100726@gmail.com
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="column large-12 medium-6 tab-12">
                  <div className="contact-block">
                    <h5 className="contact-block__header">
                      <span className="black-background">Phone</span>
                    </h5>
                    <p className="contact-block__content">
                      <span className="black-background">
                        <a href={cellPhone}>+58 424-950-1974</a>
                      </span>
                    </p>
                    <h5 className="contact-block__header">
                      <span className="black-background">Github</span>
                    </h5>
                    <p className="contact-block__content">
                      <span className="black-background">
                        <a href={githubLink} target="__blank">
                          dbriceno10
                        </a>
                      </span>
                    </p>
                    <h5 className="contact-block__header">
                      <span className="black-background">Linkedin</span>
                    </h5>
                    <p className="contact-block__content">
                      <span className="black-background">
                        <a href={linkedinLink} target="__blank">
                          Daniel Alejandro Briceño Salazar
                        </a>
                      </span>
                    </p>
                    <h5 className="contact-block__header">
                      <span className="black-background">Telegram</span>
                    </h5>
                    <p className="contact-block__content">
                      <span className="black-background">
                        <a href={telegramLink} target="__blank">
                          @dbriceno
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contactus;
