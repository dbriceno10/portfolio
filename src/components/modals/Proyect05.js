import React from "react";
import image from "../../assets/image/screenshot/datasheet-baner.jpg";
import Proyect from "./Proyect";
const URL = "https://dbriceno10.github.io/proyecto-con-api-de-rick-and-morty/";
const urlRepo =
  "https://github.com/dbriceno10/proyecto-con-api-de-rick-and-morty";

const Proyect05 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Rick and Morty Data Sheet"
      // proyectDesc="A simple application, made with vanilla JavaScript, CSS and HTML,
      //       fully responsive, which consumes the api
      //       https://rickandmortyapi.com/. We will change the page bringing all
      //       the characters in the series and showing their data."
      proyectDesc="Una aplicación hecha con JavaScript vanilla, HTML y CSS, responsiva. Consume el API https://rickandmortyapi.com/ para traer uno a uno los personajes de la serie y mostrar sus datos."
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, Git/Github."
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect05;
