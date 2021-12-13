import React from "react";
import image from "../../assets/image/screenshot/memoapp-baner.jpg";
import Proyect from "./Proyect";
const URL = "https://dbriceno10.github.io/memo-app/";
const urlRepo = "https://github.com/dbriceno10/memo-app";

const Proyect04 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Memo App"
      // proyectDesc="A simple notes app, to organize quick tasks, made with bootstrap and
      //       fully responsive."
      proyectDesc="Una simple app de notas, para anotar tareas rápidas."
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, Git/Github, Bootstrap."
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect04;
