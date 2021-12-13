import React from "react";
import image from "../../assets/image/screenshot/batatabit-baner.png";
import "../styles/Modal.css";
import Proyect from "./Proyect";
const URL =
  "https://dbriceno10.github.io/Daniel-proyecto-2-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First/";

const urlRepo =
  "https://github.com/dbriceno10/Daniel-proyecto-2-Curso-de-Responsive-Design-Maquetaci-n-Mobile-First";
const Proyect01 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Batatabit trading page"
      // proyectDesc="Be attentive to the real-time update of various crypto-assets, it
      //       has a validation for credit card purchases based on the Luhn
      //       algorithm. This website is made with the mobile first technique,
      //       fully responsive."
      proyectDesc="Una maquetación para un sitio de información y actualización en tiempo real de cripto-activos. Implementa una validación para tarjétas de crédito con el algorimo de Luhn. Un sitio totalmente responsivo, siguiendo la metodología mobile first"
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, Figma, Git/Github."
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect01;
