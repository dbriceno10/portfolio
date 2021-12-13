import React from "react";
import logoGithub from "../assets/image/github (3).png";
import logoLinkedin from "../assets/image/linkedin.png";
import logoTelegram from "../assets/image/telegram-logo.png";
import HeroButton from "./HeroButton";
import HeroSocial from "./HeroSocial";
import "./styles/Hero.css";
const linkedinLink = "https://www.linkedin.com/in/dbriceno10/";
const gihubLink = "https://github.com/dbriceno10";
const telegramLink = "https://t.me/dbriceno";

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
                <span>Full-Stack JavaScript Developer.</span>
              </h3>
              <div className="s-hero__content-social">
                <HeroSocial
                  href={linkedinLink}
                  src={logoLinkedin}
                  alt="logo de linkedin"
                  title="my linkedin"
                />
                <HeroSocial
                  href={gihubLink}
                  src={logoGithub}
                  alt="logo de github"
                  title="my github"
                />
                <HeroSocial
                  href={telegramLink}
                  src={logoTelegram}
                  alt="logo de telegram"
                  title="Telegram: @dbriceno"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="s-hero__scroll links">
          <HeroButton path="/contact" text="Hire Me" />
          <HeroButton path="/portfolio" text="Explore Me" />
        </div>
      </section>
  );
};

export default Hero;
