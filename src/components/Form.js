import React, { useEffect, useState } from "react";
import { validateEmail } from "../utils/utils.js";
import "./styles/Form.css";
import swal from "sweetalert";
const urlApi = "https://portfolio-contact-form-api.vercel.app/api/data";
const Form = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [required, setRequired] = useState({});
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setRequired(
      validate({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
  };
  const validate = (data) => {
    let errors = {};
    if (!data.fullname) errors.fullname = "Fullname is Required";
    if (!data.email || !validateEmail(data.email))
      errors.email = "Email isRequired";
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
    if (
      data.email.length === 0 ||
      data.fullname.length === 0 ||
      required.hasOwnProperty("fullname") ||
      required.hasOwnProperty("email")
    ) {
      return swal({
        title: "Error",
        text: "Debe completar el formulario correctamente antes de enviarlo.",
        icon: "error",
      }).then(() => setError(false));
    }
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
          text: "Gracias por tus comentarios, me comunicare con usted en la brevedad posible.",
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
          text: "Ha ocurrido un error inesperado, por favor intenta nuevamente.",
          icon: "error",
        }).then(() => setError(false));
      });
  };

  // useEffect(() => {
  //   if (
  //     data.fullname.length > 0 &&
  //     data.email.length > 0 &&
  //     validateEmail(data.email)
  //   ) {
  //     setError(false);
  //   } else {
  //     setError(true);
  //   }
  // }, [data, setError]);
  return (
    <form id="valid-form" onSubmit={handleSubmit}>
      <div className="inputs-container">
        <div className="input-div">
          {/* <label className="form-paceholder">Full Name</label> */}
          <label className="form-paceholder">Nombre Completo</label>

          <input
            type="text"
            name="fullname"
            value={data.fullname}
            // placeholder="Full Name"
            placeholder="Nombre Completo"
            onChange={handleChange}
            className={required.hasOwnProperty("fullname") ? "error" : null}
          />
        </div>
        <div className="input-div">
          <label className="form-paceholder">Email</label>
          <input
            name="email"
            type="email"
            value={data.email}
            placeholder="Email"
            onChange={handleChange}
            className={required.hasOwnProperty("email") ? "error" : null}
          />
        </div>
      </div>
      <div className="textarea-container">
        <textarea
          // placeholder="Message"
          placeholder="Mensaje"
          maxLength="5000"
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
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
