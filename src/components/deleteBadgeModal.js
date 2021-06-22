import React from "react"
import Modal from "./modal"
import "../global.css"
//Ahora vamos a crear el componente especializado DeleteBadgeModal, a partir de los children que podamos asignar
const DeleteBadgeModal = (props) => {
    return <Modal isOpen={props.isOpen} onClose={props.onClose} >
        <div className="DeleteBadgeModal">
            <h1>Are You Sure?</h1>
            <p>You are about to delete this badge.</p>
        </div>
        <div className="container-modal-buttons">
            <button onClick={props.onDeleteBadge} className="btn btn-danger margin-right-4-global mr-4">Delete</button>
            <button onClick={props.onClose} className=" btn btn-primary">Cancel</button>
        </div>
    </Modal>
} 

export default DeleteBadgeModal