import React from "react";
import image from "../../assets/image/screenshot/baner-avocado-app.png";
import Proyect from "./Proyect";
const URL = "http://curso-nextjs-platzi.vercel.app/";
const urlRepo = "https://github.com/dbriceno10/curso-nextjs-platzi";

const Proyect10 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Avocado App"
      proyectDesc="Una simple SPA donde vamos cargando distintos tipos de aguacates."
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, Next JS, TypeScript, Node JS, Semantic UI CSS/React, Git/Github"
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect10;
