import React from "react"
import image from "../../assets/image/screenshot/batatabit-baner.png"
import "../styles/Modal.css"

const Proyect01 = () => {
    return(
        <React.Fragment>
            <div className="modal-internal-container">
                <img src={image} alt="image" className="" />
                <div className="">
                <p className="modal__title">Batatabit trading page</p>
                <p>
                Be attentive to the real-time update of various crypto-assets, it has a validation for credit card purchases based on the Luhn algorithm. This website is made with the mobile first technique, fully responsive.<br />Technologies applied: HTML, CSS, JavaScrip, Figma, Git/Github.
                </p>
                <div className="link-container">
                    <a href="https://dbriceno10.github.io/Daniel-proyecto-2-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First/" target="__blank" className="btn btn_primary">Visit Page</a>
                </div>
                    {/* <h5>Droplet</h5>
                    <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                    <ul className="modal-popup__cat">
                        <li>Branding</li>
                        <li>Product Design</li>
                    </ul>
                    <a href="https://www.behance.net/" className="">Project link</a> */}
                </div>               
            </div>
        </React.Fragment>
    )
}



export default Proyect01