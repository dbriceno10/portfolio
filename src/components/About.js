import React from "react";
import Skills from "./Skills";
import userPhoto from "../assets/image/photo-perfil.jpg";
import "./styles/About.css";
import CV from "../assets/cv/Daniel_Briceno_CV.pdf";

const About = () => {
  return (
    <React.Fragment>
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src={userPhoto} alt="user avatar" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h1 className="about-me">
              <span className="about-description font-500">About Me</span>
            </h1>
            <p className="about-description">
              Hi, I'm Daniel, Font-end developer, I have completed my training
              thanks to the IBM CAD101EN course: Introduction to Cloud
              Development with HTML, CSS, and JavaScript. I am passionate about
              technologies and tools for the web, JavaScript enthusiast,
              although especially for React Js, since I started using it I
              couldn't stop, I love it. I’m currently available for technology
              work. If you have a collaborative project work looking for a
              profile like mine, then get in touch.
            </p>
            <hr size="8px" color="white" />
            <h2 className="about-me">
              <span className="about-description font-500">What I Do</span>
            </h2>
            <br />
            <h3 className="about-me center font-500">Front-end</h3>
            <p className="about-description">
              As a javascript developer, I have experience in using HTML and
              CSS, also in handling some frameworks like JQuery, mainly React
              JS. I can connect applications with an API with no problem to
              fetch data.
            </p>
            <br />
            <h3 className="about-me center font-500">Back-end</h3>
            <p className="about-description">
              Utilising frameworks such as Express and Nodejs, I've written
              services supporting thousands of users, including REST APIs.
              Implementing mongodb as a database, achieving applications with
              functionality to log in and create users.
            </p>
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack cv">
                <a
                  id="btn-donwload-cv"
                  className="btn btn--download btn-donwload"
                  href={CV}
                  download="Daniel_Briceno_CV"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </React.Fragment>
  );
};

export default About;
