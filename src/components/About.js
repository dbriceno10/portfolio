import React from "react"
import userPhoto from "../assets/image/avatar1.jpg"
import "./styles/About.css"
import CV from "../assets/cv/Daniel_Briceno_CV.pdf"
class About extends React.Component {
    render() {
        return (
          <React.Fragment>
          <section id="about" className="s-about target-section">
            <div className="row">
              <div className="column large-3 tab-12">
                {/* <img className="s-about__pic" src="images/avatars/user-06.jpg" alt /> */}
                <img className="s-about__pic" src={userPhoto} alt="user avatar" />
              </div>
              <div className="column large-9 tab-12 s-about__content">
                {/* <h3>About Me</h3> */}
                <h1 className="about-me">About Me</h1>
                {/* <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                  quae ab illo inventore veritatis et quasi architecto beatae vitae 
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
                  eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                  sed quia non numquam eius modi tempora incidunt ut labore et dolore 
                  magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
                  nostrum exercitationem ullam corporis suscipit laboriosam.
                </p> */}
                <p className="about-description">
                Hi, I'm Daniel, Font-end developer, I have completed my training thanks to the IBM CAD101EN course: Introduction to Cloud Development with HTML, CSS, and JavaScript. I am passionate about technologies and tools for the web, JavaScript enthusiast, although especially for React Js, since I started using it I couldn't stop, I love it.I’m currently available for technology work. If you have a collaborative project work looking for a profile like mine, then get in touch.
                </p>
                <hr />
                <h2 className="about-me">What I Do</h2>
                <br/>
                <h3 className="about-me center">Front-end</h3>
                <p className="about-description">As a javascript developer, I have experience in using HTML and CSS, also in handling some frameworks like JQuery, mainly React JS. I can connect applications with an API with no problem to fetch data.</p>
                <hr/>
                <div className="row s-about__content-bottom">
                  {/* <div className="column w-1000-stack">
                    <h3>Contact Details</h3>
                    <p>
                      Jonathan Doe <br />
                      1600 Amphitheatre Parkway <br />
                      Mountain View, CA 94043 US <br />
                      <a href="tel:+1975432345">+197 543 2345</a> <br />
                      <a href="mailto:#0">sayhello@ceevee.com</a>
                    </p>
                  </div> */}
                  <div className="column w-1000-stack cv">
                    {/* <a href="#0" className="btn btn--download">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                      Download CV
                    </a> */}
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
                    {/* <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                      vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                      aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                      nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                    </p> */}
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