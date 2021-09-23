import React from "react";
import image from "../../assets/image/screenshot/batatabit-baner.png";
import "../styles/Modal.css";
const URL =
  "https://dbriceno10.github.io/Daniel-proyecto-2-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First/";

const urlRepo =
  "https://github.com/dbriceno10/Daniel-proyecto-2-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First";
const Proyect01 = () => {
  return (
    <React.Fragment>
      <div className="modal-internal-container">
        <img src={image} alt="image" className="proyect-image" />
        <div>
          <p className="modal__title">Batatabit trading page</p>
          <p>
            Be attentive to the real-time update of various crypto-assets, it
            has a validation for credit card purchases based on the Luhn
            algorithm. This website is made with the mobile first technique,
            fully responsive.
            <br />
            Technologies applied: HTML, CSS, JavaScript, Figma, Git/Github.
          </p>
          <div className="link-container">
            <a href={URL} target="__blank" className="btn btn_primary">
              Visit Page
            </a>
            <a href={urlRepo} target="__blank" className="btn btn_secundary">
              View Code
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Proyect01;
