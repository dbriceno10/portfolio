import React from "react"
// import images from "../../../public/images/portfolio/droplet.jpg"
const image = "http://placekitten.com/200/300"
const Modal01 = () => {
    return(
        <div className="column folio-item">
        <div className="folio-item__thumb">
          <img src={image} />
        </div>
      </div>
    )
}

export default Modal01

// srcSet="images/portfolio/droplet.jpg 1x, 
//         images/portfolio/droplet@2x.jpg 2x" alt