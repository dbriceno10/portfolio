import React from "react"
import ReactDOM from "react-dom"
import Modal from "./Modal"
import "./styles/Modal.css"
import { useModal } from "./useModal"
// import image from "../assets/image/linkedin.png"

// const Modal01 = (props) => {
//     if(!props.isOpen) {
//         return null
//     }
//     return (
//         ReactDOM.createPortal(
//             <div>
//                 <div>
//                     <button onClick={props.onClose}>X</button>
//                     {props.children}
//                 </div>
//             </div>
//             , document.getElementById("modal-01")
//         )
//     )
// }
const image = "http://placekitten.com/200/300"
const image2 = "https://placekitten.com/200/138"

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)

    return(
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <p>contenido</p>
                <img src={image} />
            </Modal>
            <button onClick={openModal2}>Modal 2</button>
            <h3>Otro Modal</h3>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <p>otro contenido</p>
                <img src={image2} />
            </Modal>
        </div>
    )
}

export default Modals