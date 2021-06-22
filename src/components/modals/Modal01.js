import React from "react"
import image from "../../assets/image/screenshot/batata.jpg"

const Modal01 = () => {
    return(
        <div className="column folio-item">
        <div className="folio-item__thumb">
          <img src={image} alt="image" />
        </div>
      </div>
    )
}

export default Modal01

// srcSet="images/portfolio/droplet.jpg 1x, 
//         images/portfolio/droplet@2x.jpg 2x" alt