import React from "react";
import "../styles/Modal.css";

const ModalElement = ({ image, e }) => {
  return (
    <div className="col folio-item">
      <a className="folio-item__thumb" onClick={e}>
        <div className="folio-item__thumb">
          <img src={image} alt="image" className="modal__image" />
        </div>
      </a>
    </div>
  );
};

export default ModalElement;
