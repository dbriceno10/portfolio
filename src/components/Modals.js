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
        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
            <ModalElement image={Modal01} e={openModal1} />
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <Proyect01 />
            </Modal>
    
            <ModalElement image={Modal02} e={openModal2} />
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <Proyect01 />
            </Modal>
        </div>
    )
}

export default Modals