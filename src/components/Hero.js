import React from "react";
import logoGithub from "../assets/image/github (3).png";
import logoLinkedin from "../assets/image/linkedin.png";
import logoTwitter from "../assets/image/twitter.png";
import HeroButton from "./HeroButton";
import HeroSocial from "./HeroSocial";
import "./styles/Hero.css";
const linkedinLink = "https://www.linkedin.com/in/dbriceno10/";
const gihubLink = "https://github.com/dbriceno10";
const twitterLink = "https://twitter.com/dbriceno10dev";

const Hero = () => {
  return (
    <section id="hero" className="s-hero target-section">
      <div className="s-hero__bg rellax" data-rellax-speed={-7} />
      <div className="row s-hero__content">
        <div className="column">
          <div className="s-hero__content-about">
            <h1>
              <span className="font-500">Daniel Briceño</span>
            </h1>
            <h3>
              <span>Front-End && Full-Stack Web Developer</span>
            </h3>
            <div className="s-hero__content-social">
              <HeroSocial
                href={linkedinLink}
                src={logoLinkedin}
                alt="logo de linkedin"
                title="LinkedIn"
              />
              <HeroSocial
                href={gihubLink}
                src={logoGithub}
                alt="logo de github"
                title="Github"
              />
              <HeroSocial
                href={twitterLink}
                src={logoTwitter}
                alt="logo de telegram"
                title="Twitter"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s-hero__scroll links">
        <HeroButton
          path="/contact"
          // text="Hire Me"
          text="Contáctame"
        />
        <HeroButton
          path="/portfolio"
          //text="Explore Me"
          text="Proyectos"
        />
      </div>
    </section>
  );
};

export default Hero;
