import React from "react";
import userPhoto from "../assets/image/photo-perfil.jpg";
import "./styles/About.css";
import CV from "../assets/cv/Daniel_Briceno_CV.pdf";
import htmlStiker from "../assets/image/html.png";
import cssStiker from "../assets/image/css-logo.png";
import javascriptStiker from "../assets/image/javascript-logo-svg-vector.svg";
import figmaStiker from "../assets/image/figma-1-logo-svg-vector.svg";
import reactStiker from "../assets/image/react-logo22.png";
import gitStiker from "../assets/image/git-logo2.png";
import nodeStiker from "../assets/image/nodejs-icon-logo-svg-vector.svg";
import expressStiker from "../assets/image/javascript.png";
import typrscriptStiker from "../assets/image/TypeScript-logo.png";
import mongodbtStiker from "../assets/image/mongodb-leaf-logo.png";

class About extends React.Component {
  render() {
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
                Development with HTML, CSS, and JavaScript. I am passionate
                about technologies and tools for the web, JavaScript enthusiast,
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
        <section className="s-resume target-section">
          <div className="row s-resume__section ">
            <div className="column  tab-12">
              <h3 id="skills" className="section-header-allcaps">
                Skills
              </h3>
            </div>
            <div className="column large-10 tab-12">
              <div className="resume-block">
                <ul className="skill-bars-fat">
                  <li className="grid">
                    <strong>HTML</strong>
                    <img
                      className="stiker"
                      src={htmlStiker}
                      title="html-skill"
                      alt="html-logo"
                    />
                    <div className="progress percent95" />
                  </li>
                  <br />
                  <li className="grid">
                    <strong>CSS</strong>
                    <img
                      className="stiker"
                      src={cssStiker}
                      title="css-skill"
                      alt="css-logo"
                    />
                    <div className="progress percent95" />
                  </li>
                  <br />
                  <li className="grid">
                    <strong>Javascript</strong>
                    <img
                      className="stiker suavice-border"
                      src={javascriptStiker}
                      title="javascript-skill"
                      alt="javascript-logo"
                    />
                    <div className="progress percent95" />
                  </li>

                  <br />
                  <li className="grid">
                    <strong>Git</strong>
                    <img
                      className="stiker"
                      src={gitStiker}
                      title="git-skill"
                      alt="git-logo"
                    />
                    <div className="progress percent95" />
                  </li>
                  <br />
                  <li className="grid">
                    <strong>Figma</strong>
                    <img
                      className="stiker"
                      src={figmaStiker}
                      title="figma-skill"
                      alt="figma-logo"
                    />
                    <div className="progress percent75" />
                  </li>
                  <br />
                  <li className="grid">
                    <strong>React JS</strong>
                    <img
                      className="stiker"
                      src={reactStiker}
                      title="react-skill"
                      alt="react-logo"
                    />
                    <div className="progress percent80" />
                  </li>
                  <br />

                  <li className="grid">
                    <strong>Node JS</strong>
                    <img
                      className="stiker"
                      src={nodeStiker}
                      title="node-skill"
                      alt="node-logo"
                    />
                    <div className="progress percent70" />
                  </li>
                  <br />
                  <li className="grid">
                    <strong>Express</strong>
                    <img
                      className="stiker"
                      src={expressStiker}
                      title="express-skill"
                      alt="file.js-logo"
                    />
                    <div className="progress percent65" />
                  </li>
                  <br />
                  <li className="grid">
                    <strong>TypeScript</strong>
                    <img
                      className="stiker"
                      src={typrscriptStiker}
                      title="typescript-skill"
                      alt="typescript-logo"
                    />
                    <div className="progress percent50" />
                  </li>
                  <br />
                  <li className="grid">
                    <strong>MongoDB</strong>
                    <img
                      className="stiker"
                      src={mongodbtStiker}
                      title="mongodb-skill"
                      alt="mongodb-leaf-logo"
                    />
                    <div className="progress percent60" />
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
