import React from "react"
// import ReactDOM from "react-dom"
import Modal from "./Modal"
import "./styles/Modal.css"
import { useModal } from "./useModal"
// const image = "http://placekitten.com/200/300"
// const image2 = "https://placekitten.com/200/138"
import ModalElement  from "./modals/ModalElement"
import Modal01 from "../assets/image/screenshot/batata.jpg"
import Proyect01 from "./modals/Proyect01"
import Modal02 from "../assets/image/screenshot/spacebadges.jpg"
import Proyect02 from "./modals/Proyect02"


const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)

    return(
        <React.Fragment>
        <div className="column folio-item">
            <a onClick={openModal1}><ModalElement image={Modal01} /></a>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <Proyect01 />
            </Modal>
        </div>
        <div className="colum folio-item">
            <a onClick={openModal2}><ModalElement image={Modal02}/></a>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <Proyect02 />
            </Modal>
        </div>
        </React.Fragment>
    )
}

export default Modals