import React from "react"
import Modal from "./Modal"
import "./styles/Modal.css"
import { useModal } from "./useModal"
import ModalElement  from "./modals/ModalElement"
import Modal01 from "../assets/image/screenshot/batatabit-def.jpg"
import Proyect01 from "./modals/Proyect01"
import Modal02 from "../assets/image/screenshot/spacebadges-def.jpg"
import Proyect02 from "./modals/Proyect02"
import Modal03 from "../assets/image/screenshot/product-app-def.jpg"
import Proyect03 from "./modals/Proyect03"
import Modal04 from "../assets/image/screenshot/memo-app-def.jpg"
import Proyect04 from "./modals/Proyect04"
import Modal05 from "../assets/image/screenshot/datasheet.jpg"
import Proyect05 from "./modals/Proyect05"
import Modal06 from "../assets/image/screenshot/simon-says2.jpg"
import Proyect06 from "./modals/Proyect06"

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)
    const [isOpenModal3, openModal3, closeModal3] = useModal(false)
    const [isOpenModal4, openModal4, closeModal4] = useModal(false)
    const [isOpenModal5, openModal5, closeModal5] = useModal(false)
    const [isOpenModal6, openModal6, closeModal6] = useModal(false)

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

            <ModalElement image={Modal05} e={openModal5} />
            <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
                <Proyect05 />
            </Modal>

            <ModalElement image={Modal06} e={openModal6} />
            <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
                <Proyect06 />
            </Modal>
        </div>
    )
}

export default Modals