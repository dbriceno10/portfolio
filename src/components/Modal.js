import React from "react"
// import Modals from "./Modals"
// import images from "../assets/image/photo-perfil.png"
import "./styles/Modal.css"

// const Proyect01 = (props) => {
//     return <Modal01 isOpen={props.isOpen} onClose={props.onClose} >
//     <div>
//         <div className="modal-popup">
//             <img src={images} alt="proyect-01" />
//             <div className="modal-popup__desc">
//                 <h5>Droplet</h5>
//                 <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
//                 <ul className="modal-popup__cat">
//                     <li>Branding</li>
//                     <li>Product Design</li>
//                 </ul>
//             </div>
//         <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
//         </div>
//         </div>
//     </Modal01>
// }

const Modal = ({ children, isOpen, closeModal }) => {
    const handleModalContainerClick = e => e.stopPropagation()
    return (
        <article onClick={closeModal} className={`modal ${isOpen && "is-open"}` }>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <button className="modal-close" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>
    )
}

export default Modal