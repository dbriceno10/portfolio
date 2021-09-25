import React from "react";
import "./styles/From.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      message: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const values = JSON.stringify(this.state);
    console.log(values)
    alert(values);
  };

  render() {
    const { fullname, email, message } = this.state;
    return (
      <React.Fragment>
        <form id="valid-form" onSubmit={this.handleSubmit}>
          <div className="inputs-container">
            <div>
              <label className="form-paceholder">Full Name</label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                value={fullname}
                placeholder="Full Name"
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label className="form-paceholder">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="textarea-container">
            <textarea
              id="message"
              placeholder="Message"
              maxLength="2000"
              name="message"
              value={message}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="btn-form-container">
            <input Value="Send" type="submit" className="btn btn-primary send"/>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
