import React from "react"
import "../styles/Modal.css"

const ModalElement = ({ image }) => {
    return(
        <div className="column folio-item modal__container__image">
        <div className="folio-item__thumb">
          <img src={image} alt="image" className="modal__image" />
        </div>
      </div>
    )
}

export default ModalElement

// srcSet="images/portfolio/droplet.jpg 1x, 
//         images/portfolio/droplet@2x.jpg 2x" alt