import React from "react"
import "./styles/Modal.css"

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