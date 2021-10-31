import React from "react";
import image from "../../assets/image/screenshot/food-app-baner.png";
import Proyect from "./Proyect";
const URL = "https://dbriceno10.github.io/food-app/food-app-web/";
const urlRepo = "https://github.com/dbriceno10/food-app";

const Proyect07 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Food App"
      proyectDesc="An application where users can register and log in to order
            different meals (Arepas for now), where the administrator can see
            the orders to pass them on to the cook. It integrates an API
            developed with node js, express and mongodb as a database."
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect07;
