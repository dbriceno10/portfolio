import React from "react";
import { Link } from "react-router-dom";
import logoGithub from "../assets/image/github (3).png";
import logoLinkedin from "../assets/image/linkedin.png";
import logoTelegram from "../assets/image/telegram-logo.png";
import "./styles/Hero.css";
const linkedinLink = "https://www.linkedin.com/in/dbriceno10/";
const gihubLink = "https://github.com/dbriceno10";
const telegramLink = "https://t.me/dbriceno";

const Hero = () => {
  return (
    <React.Fragment>
      <section id="hero" className="s-hero target-section">
        <div className="s-hero__bg rellax" data-rellax-speed={-7} />
        <div className="row s-hero__content">
          <div className="column">
            <div className="s-hero__content-about">
              <h1>
                <span className="font-500">I'm Daniel Briceño</span>
              </h1>
              <h3>
                <span>I'm a Front-end Developer.</span>
              </h3>
              <div className="s-hero__content-social">
                <a href={linkedinLink} target="_blank">
                  <img
                    className="hero--logo"
                    src={logoLinkedin}
                    alt="logo de linkedin"
                    title="my linkedin"
                  />
                </a>
                <a href={gihubLink} target="_blank">
                  <img
                    className="hero--logo"
                    src={logoGithub}
                    alt="logo de github"
                    title="my github"
                  />
                </a>
                <a href={telegramLink} target="_blank">
                  <img
                    className="hero--logo"
                    src={logoTelegram}
                    alt="logo de telegram"
                    title="Telegram: @dbriceno"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="s-hero__scroll links">
          <Link className="btn btn-hero" to="/contact">
            Hire Me
          </Link>
          <Link className="btn btn-hero" to="/portfolio">
            Explore Me
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
