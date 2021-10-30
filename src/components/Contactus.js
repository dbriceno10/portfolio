import React from "react";
import "./styles/Contactus.css";
import Form from "./Form";
import gmailStiker from "../assets/image/gmail.png";
import phoneStiker from "../assets/image/1220365_whatsapp_chat_communication_message_phone_icon.png";
import githubStiker from "../assets/image/github (3).png";
import linkedinStiker from "../assets/image/linkedin.png";
import telegranStiker from "../assets/image/telegram-logo.png";
// const email = "daniel.b100726@gmail.com";
const cellPhone = "tel:+0424-950-1974";
const githubLink = "https://github.com/dbriceno10";
const linkedinLink = "https://www.linkedin.com/in/dbriceno10/";
const telegramLink = "https://t.me/dbriceno";

const Contactus = () => {
  return (
    <React.Fragment>
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
                  <div className="grid2">
                    <img
                      className="stiker2"
                      src={gmailStiker}
                      alt="gmail-Stiker"
                      title="Gmail Stiker"
                    />
                    <h5 className="contact-block__header">
                      <span className="black-background">Email</span>
                    </h5>
                  </div>
                  <p className="contact-block__content">
                    <span className="black-background">
                      <a className="mailtoui">daniel.b100726@gmail.com</a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                  <div className="grid2">
                    <img
                      className="stiker2"
                      src={phoneStiker}
                      alt="phone-Stiker"
                      title="Phone Stiker"
                    />
                    <h5 className="contact-block__header">
                      <span className="black-background">Phone</span>
                    </h5>
                  </div>
                  <p className="contact-block__content">
                    <span className="black-background">
                      <a href={cellPhone}>+58 424-950-1974</a>
                    </span>
                  </p>
                  <div className="grid2">
                    <img
                      className="stiker2"
                      src={githubStiker}
                      alt="github-Stiker"
                      title="Github Stiker"
                    />
                    <h5 className="contact-block__header">
                      <span className="black-background">Github</span>
                    </h5>
                  </div>
                  <p className="contact-block__content">
                    <span className="black-background">
                      <a href={githubLink} target="__blank">
                        dbriceno10
                      </a>
                    </span>
                  </p>

                  <div className="grid2">
                    <img
                      className="stiker2"
                      src={linkedinStiker}
                      alt="linkedin-Stiker"
                      title="Linkedin Stiker"
                    />
                    <h5 className="contact-block__header">
                      <span className="black-background">Linkedin</span>
                    </h5>
                  </div>
                  <p className="contact-block__content">
                    <span className="black-background">
                      <a href={linkedinLink} target="__blank">
                        Daniel Briceño
                      </a>
                    </span>
                  </p>
                  <div className="grid2">
                    <img
                      className="stiker2"
                      src={telegranStiker}
                      alt="telegram-Stiker"
                      title="Telegram Stiker"
                    />
                    <h5 className="contact-block__header">
                      <span className="black-background">Telegram</span>
                    </h5>
                  </div>
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
};

export default Contactus;
