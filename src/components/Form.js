import React from "react";
import "./styles/From.css";

class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form id="valid-form">
          <div className="inputs-container">
            <div>
              <p className="form-paceholder">Full Name</p>
              <input
                id="fullname"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <p className="form-paceholder">Email</p>
              <input id="email" type="email" placeholder="Email" required />
            </div>
          </div>
          <div className="textarea-container">
            <textarea
              id="message"
              placeholder="Message"
              maxLength="2000"
            ></textarea>
          </div>
          <div className="btn-form-container">
            <buton className="btn btn-primary send">Send</buton>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
