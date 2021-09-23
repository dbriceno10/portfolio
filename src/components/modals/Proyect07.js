import React from "react";
import image from "../../assets/image/screenshot/food-app-baner.png";
import "../styles/Modal.css";
const URL = "https://dbriceno10.github.io/food-app/food-app-web/";
const urlRepo = "https://github.com/dbriceno10/food-app";

const Proyect07 = () => {
  return (
    <React.Fragment>
      <div className="modal-internal-container">
        <img src={image} alt="image" className="proyect-image" />
        <div>
          <p className="modal__title">Food App</p>
          <p>
            An application where users can register and log in to order
            different meals (Arepas for now), where the administrator can see
            the orders to pass them on to the cook. It integrates an API
            developed with node js, express and mongodb as a database.
            <br />
            Technologies applied: HTML, CSS, JavaScript, Nodejs, Express, MongoDB, Git/Github.
          </p>
          <div className="link-container">
            <a href={URL} target="__blank" className="btn btn_primary">
              Visit Page
            </a>
            <a href={urlRepo} target="__blank" className="btn btn_primary">
              View Code
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Proyect07;
