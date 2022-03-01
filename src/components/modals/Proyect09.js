import React from "react";
import image from "../../assets/image/screenshot/baner-learnzilla.png";
import Proyect from "./Proyect";
const URL = "https://learnzilla-app.vercel.app/";
const urlRepo = "https://github.com/dbriceno10/sh_learning-app";

const Proyect09 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Learnzilla - Academia Online"
      proyectDesc="Proyecto final para el Bootcamp Henry, junto a un equipo de desarrolladores hemos creado una plataforma online de cursos"
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, React-Redux, Material UI , Node JS, Express, PostgreSQL, Sequelize, Figma, Multer, Google-Drive-Api, Git/Github"
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect09;
