import React from "react";
import Modal from "./Modal";
import "./styles/Modal.css";
import { useModal } from "./useModal";
import ModalElement from "./modals/ModalElement";
import Modal01 from "../assets/image/screenshot/batatabit-def.jpg";
import Proyect01 from "./modals/Proyect01";
import Modal02 from "../assets/image/screenshot/spacebadges-def.jpg";
import Proyect02 from "./modals/Proyect02";
// import Modal03 from "../assets/image/screenshot/product-app-def.jpg";
// import Proyect03 from "./modals/Proyect03";
import Modal04 from "../assets/image/screenshot/memo-app-def.jpg";
import Proyect04 from "./modals/Proyect04";
import Modal05 from "../assets/image/screenshot/datasheet.jpg";
import Proyect05 from "./modals/Proyect05";
import Modal06 from "../assets/image/screenshot/simon-says-miniatura.png";
import Proyect06 from "./modals/Proyect06";
import Modal07 from "../assets/image/screenshot/food-app.jpg";
import Proyect07 from "./modals/Proyect07";
import Modal08 from "../assets/image/screenshot/miniatura-pi.png";
import Proyect08 from "./modals/Proyect08";
import Modal09 from "../assets/image/screenshot/miniatura-learnzilla.png";
import Proyect09 from "./modals/Proyect09";
import Modal10 from "../assets/image/screenshot/avocado-app.png";
import Proyect10 from "./modals/Proyect10";
import Modal11 from "../assets/image/screenshot/weather-app.png";
import Proyect11 from "./modals/Proyect11";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  // const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);
  const [isOpenModal5, openModal5, closeModal5] = useModal(false);
  const [isOpenModal6, openModal6, closeModal6] = useModal(false);
  const [isOpenModal7, openModal7, closeModal7] = useModal(false);
  const [isOpenModal8, openModal8, closeModal8] = useModal(false);
  const [isOpenModal9, openModal9, closeModal9] = useModal(false);
  const [isOpenModal10, openModal10, closeModal10] = useModal(false);
  const [isOpenModal11, openModal11, closeModal11] = useModal(false);

  return (
    <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
      <ModalElement
        image={Modal09}
        e={openModal9}
        imgTitle="Learnzilla"
        imgDesc="Plataforma online para cursos, creada con React, Node y Express"
      />
      <Modal isOpen={isOpenModal9} closeModal={closeModal9}>
        <Proyect09 />
      </Modal>

      <ModalElement
        image={Modal08}
        e={openModal8}
        imgTitle="WikiDex"
        imgDesc="Una SPA con temática de Pokemon, creada con React, Node y Express."
      />
      <Modal isOpen={isOpenModal8} closeModal={closeModal8}>
        <Proyect08 />
      </Modal>

      <ModalElement
        image={Modal01}
        e={openModal1}
        imgTitle="Batatabit"
        imgDesc="Una Landing Page con temática de cripto-activos creada con HTML y CSS."
      />
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <Proyect01 />
      </Modal>

      <ModalElement
        image={Modal02}
        e={openModal2}
        imgTitle="Space Badges"
        imgDesc="Una SPA con temática de Rick and Morty, creada con React."
      />
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <Proyect02 />
      </Modal>

      <ModalElement
        image={Modal05}
        e={openModal5}
        imgTitle="Rick & Morty Data Sheet"
        imgDesc="Una Landing Page temática creada con HTML, CSS y JavaScript."
      />
      <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
        <Proyect05 />
      </Modal>

      <ModalElement
        image={Modal06}
        e={openModal6}
        imgTitle="Simon Says"
        imgDesc="Una recreación del famoso juego Simon Says creado con HTML, CSS y JavaScript."
      />
      <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
        <Proyect06 />
      </Modal>

      <ModalElement
        image={Modal11}
        e={openModal11}
        imgTitle="Weather App"
        imgDesc="Una simple aplicación de clima, creada con React y TypeScript."
      />
      <Modal isOpen={isOpenModal11} closeModal={closeModal11}>
        <Proyect11 />
      </Modal>

      <ModalElement
        image={Modal10}
        e={openModal10}
        imgTitle="Avocado App"
        imgDesc="Una SPA con temática de Aguacates, desarollada con Next Js y TypeScript"
      />
      <Modal isOpen={isOpenModal10} closeModal={closeModal10}>
        <Proyect10 />
      </Modal>

      <ModalElement
        image={Modal04}
        e={openModal4}
        imgTitle="Memo App"
        imgDesc="Aplicación para notas, creada con HTML, CSS y JavaScript."
      />
      <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
        <Proyect04 />
      </Modal>

      <ModalElement
        image={Modal07}
        e={openModal7}
        imgTitle="Food App"
        imgDesc="Aplicación CRUD para ordenar platillos, creada con Node y Express."
      />
      <Modal isOpen={isOpenModal7} closeModal={closeModal7}>
        <Proyect07 />
      </Modal>

      {/* <ModalElement image={Modal03} e={openModal3} />
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <Proyect03 />
      </Modal> */}
    </div>
  );
};

export default Modals;
