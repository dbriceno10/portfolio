import React from "react";
import image from "../../assets/image/screenshot/spacebadges-baner3.png";
import "../styles/Modal.css";
const URL = "https://dbriceno10.github.io/Curso-React-JS-platzi-badges/#/";

const Proyect02 = () => {
  return (
    <React.Fragment>
      <div className="modal-internal-container">
        <img src={image} alt="image" className="proyect-image" />
        <div className="">
          <p className="modal__title">Space Badges</p>
          <p>
            A Single-page application, built with react js and bootstrap, fully
            responsive, which consumes the api https://rickandmortyapi.com/.
            Brings the possibility of an infinite pseudo scroll bringing all the
            characters.
            <br />
            Technologies applied: HTML, CSS, JavaScript, Git/Github, React JS,
            Bootstrap.
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

export default Proyect02;
