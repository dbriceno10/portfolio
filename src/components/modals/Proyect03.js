import React from "react";
import image from "../../assets/image/screenshot/productapp-baner.png";
import Proyect from "./Proyect";
const URL = "https://dbriceno10.github.io/aplicacion-de-productos-2/";
const urlRepo = "https://github.com/dbriceno10/aplicacion-de-productos-2";

const Proyect03 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="E-commerce Product App"
      proyectDesc="A simple E-commerce type product app, with quick bootstrap styles,
            fully responsive."
      tecn="Technologies applied: HTML, CSS, JavaScript, Git/Github, Bootstrap."
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect03;
