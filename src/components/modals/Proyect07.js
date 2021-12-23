import React from "react";
import image from "../../assets/image/screenshot/food-app-baner.png";
import Proyect from "./Proyect";
const URL = "https://dbriceno10.github.io/food-app/food-app-web/";
const urlRepo = "https://github.com/dbriceno10/food-app";

const Proyect07 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Food App (Demo)"
      // proyectDesc="An application where users can register and log in to order
      //       different meals (Arepas for now), where the administrator can see
      //       the orders to pass them on to the cook. It integrates an API
      //       developed with node js, express and mongodb as a database."
      proyectDesc="Una aplicación donde los usuarios pueden registrarse, inicar seción y hacer pedidos de un menú. El administrador puede ver las distintas órdenes para realizarlas. Integra un API desarrollada con node js, express y mongodb (aún en desarrollo)."
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, Node JS, Express, MongoDb, Git/Github"
      urlPage={URL}
      urlRepo={urlRepo}
      btnPage="Visit Demo"
    />
  );
};

export default Proyect07;
