import React from "react";
import image from "../../assets/image/screenshot/simon-says-baner2.jpg";
import "../styles/Modal.css";
const URL =
  "https://dbriceno10.github.io/Proyecto-Curso-Fundamentos-de-JavaScript-Juego-de-Simon-Dice/";
const urlRepo =
  "https://github.com/dbriceno10/Proyecto-Curso-Fundamentos-de-JavaScript-Juego-de-Simon-Dice";

const Proyect06 = () => {
  return (
    <React.Fragment>
      <div className="modal-internal-container">
        <img src={image} alt="image" className="proyect-image" />
        <div>
          <p className="modal__title">Simon Says</p>
          <p>
            A recreation of the addictive simon says game, perfect to relax for
            a while playing, on the pc or on the cell phone.
            <br />
            Technologies applied: HTML, CSS, JavaScript, Git/Github
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

export default Proyect06;
