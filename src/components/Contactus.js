import React from "react";
import "./styles/Contactus.css";
import Form from "./Form";
import gmailStiker from "../assets/image/gmail.png";
import phoneStiker from "../assets/image/1220365_whatsapp_chat_communication_message_phone_icon.png";
import githubStiker from "../assets/image/github (3).png";
import linkedinStiker from "../assets/image/linkedin.png";
import telegranStiker from "../assets/image/telegram-logo.png";
import ContactNetwork from "./ContactNetwork";
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
              <div
                className="column large-12 medium-6 tab-12"
                id="ContactNetwork-Container"
              >
                <div className="contact-block">
                  <ContactNetwork
                    stiker={gmailStiker}
                    alt="gmail-Stiker"
                    title="Gmail Stiker"
                    header="Email"
                    linkName="daniel.b100726@gmail.com"
                  />
                  <ContactNetwork
                    stiker={phoneStiker}
                    alt="phone-Stiker"
                    title="Phone Stiker"
                    header="Phone"
                    href={cellPhone}
                    linkName="+58 424-950-1974"
                  />
                  <ContactNetwork
                    stiker={githubStiker}
                    alt="github-Stiker"
                    title="Github Stiker"
                    header="Github"
                    href={githubLink}
                    target="_black"
                    linkName="dbriceno10"
                  />
                  <ContactNetwork
                    stiker={linkedinStiker}
                    alt="linkedin-Stiker"
                    title="Linkedin Stiker"
                    header="Linkedin"
                    href={linkedinLink}
                    target="_black"
                    linkName="Daniel Briceño"
                  />
                  <ContactNetwork
                    stiker={telegranStiker}
                    alt="telegram-Stiker"
                    title="Telegram Stiker"
                    header="Telegram"
                    href={telegramLink}
                    target="_black"
                    linkName="@dbriceno"
                  />
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
