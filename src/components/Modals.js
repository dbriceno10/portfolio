import React from "react"
import Modal from "./Modal"
import "./styles/Modal.css"
import { useModal } from "./useModal"
import ModalElement  from "./modals/ModalElement"
import Modal01 from "../assets/image/screenshot/batata.jpg"
import Proyect01 from "./modals/Proyect01"
import Modal02 from "../assets/image/screenshot/spacebadges.jpg"
import Proyect02 from "./modals/Proyect02"
import Modal03 from "../assets/image/screenshot/productapp.jpg"
import Proyect03 from "./modals/Proyect03"
import Modal04 from "../assets/image/screenshot/memoapp.jpg"
import Proyect04 from "./modals/Proyect04"


const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)
    const [isOpenModal3, openModal3, closeModal3] = useModal(false)
    const [isOpenModal4, openModal4, closeModal4] = useModal(false)

    return(
        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
            <ModalElement image={Modal01} e={openModal1} />
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <Proyect01 />
            </Modal>
    
            <ModalElement image={Modal02} e={openModal2} />
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <Proyect02 />
            </Modal>

            <ModalElement image={Modal03} e={openModal3} />
            <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
                <Proyect03 />
            </Modal>

            <ModalElement image={Modal04} e={openModal4} />
            <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
                <Proyect04 />
            </Modal>
        </div>
    )
}

export default Modals