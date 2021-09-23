import React from "react";
import image from "../../assets/image/screenshot/productapp-baner.png";
import "../styles/Modal.css";
const URL = "https://dbriceno10.github.io/aplicacion-de-productos-2/";
const urlRepo = "https://github.com/dbriceno10/aplicacion-de-productos-2";

const Proyect03 = () => {
  return (
    <React.Fragment>
      <div className="modal-internal-container">
        <img src={image} alt="image" className="proyect-image" />
        <div>
          <p className="modal__title">E-commerce Product App</p>
          <p>
            A simple E-commerce type product app, with quick bootstrap styles,
            fully responsive.
            <br />
            Technologies applied: HTML, CSS, JavaScript, Git/Github, Bootstrap.
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

export default Proyect03;
