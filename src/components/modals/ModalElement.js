import React from "react";

const ModalElement = ({ image, e }) => {
  return (
    <div className="modal_element">
      <div className="col folio-item">
        <a className="folio-item__thumb" onClick={e}>
          <div className="folio-item__thumb">
            <img src={image} alt="image" className="modal__image" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ModalElement;
