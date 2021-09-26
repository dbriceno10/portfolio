import React from "react";
import "./styles/From.css";
import swal from "sweetalert";
const urlApi = "https://portfolio-contact-form-api.vercel.app/api/data";
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
    const button = document.getElementById("input");
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    button.setAttribute("disabled", true);
    const values = JSON.stringify(this.state);
    fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: values,
    })
      .then((element) => {
        swal({
          title: "Ok",
          text: "Thank you for your comments! We will write to you shortly",
          icon: "success",
        }).then(() => {
          fullname.value = "";
          email.value = "";
          message.value = "";
          button.removeAttribute("disabled");
        });
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: "An unexpected error has occurred, please try again",
          icon: "Error",
        }).then(() => button.removeAttribute("disabled"));
      });
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
            <input
              value="Send"
              type="submit"
              className="btn btn-primary send"
              id="input"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
