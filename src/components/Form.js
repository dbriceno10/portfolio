import React, { useEffect, useState } from "react";
import "./styles/Form.css";
import swal from "sweetalert";
const urlApi = "https://portfolio-contact-form-api.vercel.app/api/data";
const Form = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(true);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
    const values = JSON.stringify(data);
    fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: values,
    })
      .then(() => {
        swal({
          title: "Ok",
          text: "Thank you for your comments! We will write to you shortly",
          icon: "success",
        }).then(() => {
          setData({
            fullname: "",
            email: "",
            message: "",
          });
          setError(false);
        });
      })
      .catch(() => {
        swal({
          title: "Error",
          text: "An unexpected error has occurred, please try again",
          icon: "Error",
        }).then(() => setError(false));
      });
  };

  useEffect(() => {
    if (data.fullname.length > 0 && data.email.length > 0) setError(false);
    else setError(true);
  }, [data, setError]);
  return (
    <React.Fragment>
      <form id="valid-form" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <div>
            <label className="form-paceholder">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={data.fullname}
              placeholder="Full Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-paceholder">Email</label>
            <input
              name="email"
              type="email"
              value={data.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="textarea-container">
          <textarea
            placeholder="Message"
            maxLength="2000"
            name="message"
            value={data.message}
            onChange={handleChange}
          ></textarea>
          {/* <p className="form-paceholder">{data.message.length} of 2000</p> */}
        </div>
        <div className="btn-form-container">
          <button
            type="submit"
            className="btn btn-primary send"
            id="input"
            disabled={error}
          >
            Send
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
