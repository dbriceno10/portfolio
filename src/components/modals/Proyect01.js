import React from "react"
// import image from "../../../public/images/portfolio/gallery/g-droplet.jpg"
const image = "http://placekitten.com/200/300"
const Proyect01 = () => {
    return(
        <div id="modal-01">
            <div className="modal-popup">
                <img src={image} alt />
                <div className="modal-popup__desc">
                    <h5>Droplet</h5>
                    <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                    <ul className="modal-popup__cat">
                        <li>Branding</li>
                        <li>Product Design</li>
                    </ul>
                </div>
                <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
            </div>
        </div>
    )
}



export default Proyect01