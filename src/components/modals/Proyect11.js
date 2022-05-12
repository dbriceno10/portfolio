import React from "react";
import image from "../../assets/image/screenshot/weather-app-banner.png";
import Proyect from "./Proyect";
const URL = "https://weather-app-dbriceno10.vercel.app/";
const urlRepo = "https://github.com/dbriceno10/weather-app";

const Proyect11 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Weather App"
      proyectDesc="Una simple y clásica app para visualizar el pronóstico del clima de cualquier ubicación."
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, TypeScript, Material-UI, Git/Github"
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect11;
