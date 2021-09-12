import React from "react";
import image from "../../assets/image/screenshot/datasheet-baner.jpg";
import "../styles/Modal.css";
const URL = "https://dbriceno10.github.io/proyecto-con-api-de-rick-and-morty/";

const Proyect05 = () => {
  return (
    <React.Fragment>
      <div className="modal-internal-container">
        <img src={image} alt="image" className="proyect-image" />
        <div className="">
          <p className="modal__title">Rick and Morty Data Sheet</p>
          <p>
            A simple application, made with vanilla JavaScript, CSS and HTML,
            fully responsive, which consumes the api
            https://rickandmortyapi.com/. We will change the page bringing all
            the characters in the series and showing their data.
            <br />
            Technologies applied: HTML, CSS, JavaScript, Git/Github.
          </p>
          <div className="link-container">
            <a href={URL} target="__blank" className="btn btn_primary">
              Visit Page
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Proyect05;
