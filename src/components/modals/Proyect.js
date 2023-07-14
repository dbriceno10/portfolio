import React from "react";
const Proyect = ({
  srcImg,
  proyectTile,
  proyectDesc,
  tecn,
  urlPage,
  urlRepo,
  btnPage,
}) => {
  return (
    <div className="modal-internal-container">
      <img src={srcImg} alt="proyect" title="Proyect" className="proyect-image" />
      <div>
        <p className="modal__title">{proyectTile}</p>
        <p>
          {proyectDesc}
          <br />
          {tecn}
        </p>
        <div className="link-container">
          <a href={urlPage} target="__blank" className="btn btn_primary">
            {btnPage ? btnPage : <p>Visit Page</p>}
          </a>
          <a href={urlRepo} target="__blank" className="btn btn_secundary">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
