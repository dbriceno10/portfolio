import React from "react"

class Contactus extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section id="contact" className="s-contact target-section">
  <div className="row s-contact__header">
    <div className="column large-12">
      <h3 className="section-header-allcaps">Say Hello</h3>
    </div>
  </div>
  <div className="row s-contact__content">
    <div className="column large-7 medium-12">
      <h4 className="huge-text">
        Have a new project in mind? Let's collaborate and build something awesome. 
        Let's turn that idea to an even greater product :)
      </h4><br/>
      {/* <h4 className="huge-text">
        Github: <a href="https://github.com/dbriceno10" target="__blank">dbriceno10</a>
      </h4><br/>
      <h4 className="huge-text">
        Linkedin: <a href="https://www.linkedin.com/in/daniel-alejandro-687539137/" target="__blank">Daniel Alejandro Briceño Salazar</a>
      </h4> */}
    </div>
    <div className="column large-4 medium-12">
      <div className="row contact-infos">
        <div className="column large-12 medium-6 tab-12">
          <div className="contact-block">
            <h5 className="contact-block__header">
              Email
            </h5>
            <p className="contact-block__content">
              <a className="mailtoui" href="daniel.b100726@gmail.com">daniel.b100726@gmail.com</a>
            </p>
          </div> {/* end contact-block */}
        </div>
        <div className="column large-12 medium-6 tab-12">
          <div className="contact-block">
            <h5 className="contact-block__header">
              Phone
            </h5>
            <p className="contact-block__content">
              <a href="tel:+1975432345">+58 0424-950-1974</a>
            </p>
            <h5 className="contact-block__header">
              Github
            </h5>
            <p className="contact-block__content">
              <a href="https://github.com/dbriceno10" target="__blank">dbriceno10</a>
            </p>
            <h5 className="contact-block__header">
              Linkedin
            </h5>
            <p className="contact-block__content">
              <a href="https://www.linkedin.com/in/daniel-alejandro-687539137/" target="__blank">Daniel Alejandro Briceño Salazar</a>
            </p>
          </div> {/* end contact-block */}
        </div>
        {/* <div className="column large-12">
          <a href="mailto:sayhello@ceevee.com" className="mailtoui btn btn--primary h-full-width">Let's Talk</a>
        </div> */}
      </div> {/* end contact-infos */}
    </div>
  </div> {/* s-contact__content */}
</section>
            </React.Fragment>
        )
    }
}

export default Contactus