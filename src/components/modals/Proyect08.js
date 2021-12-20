import React from "react";
import image from "../../assets/image/screenshot/pi-baner.png";
import Proyect from "./Proyect";
const URL = "https://www.linkedin.com/feed/update/urn:li:activity:6877424908440260608/";
const urlRepo = "https://github.com/dbriceno10/daniel-pi";

const Proyect08 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="WikiDex - Pokemon App"
      proyectDesc="Mi proyecto individual realizado durante el bootcamp Henry, utilizando la pokeApi y una base de datos creada con PostgreSQL, esta app cobra vida al traer a todos los pokemon disponibles, mirar sus estadísticas. El usuario tiene la posibilidad de crear el mismo su pokemon mediante un pequeño formulario."
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, React-Redux, Node JS, Express, PostgreSQL, Sequelize, Git/Github"
      urlPage={URL}
      urlRepo={urlRepo}
      btnPage="Visit Demo"
    />
  );
};

export default Proyect08;
