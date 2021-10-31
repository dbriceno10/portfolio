import React from "react";
import image from "../../assets/image/screenshot/spacebadges-baner3.png";
import Proyect from "./Proyect";
const URL = "https://dbriceno10.github.io/Curso-React-JS-platzi-badges/#/";
const urlRepo = "https://github.com/dbriceno10/Curso-React-JS-platzi-badges";

const Proyect02 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Space Badges"
      proyectDesc=" A Single-page application, built with react js and bootstrap, fully
            responsive, which consumes the api https://rickandmortyapi.com/.
            Brings the possibility of an infinite pseudo scroll bringing all the
            characters."
      tecn=" Technologies applied: HTML, CSS, JavaScript, Git/Github, React JS,
            Bootstrap."
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect02;
