import React from "react";
import image from "../../assets/image/screenshot/pelis-app-baner.png";
import Proyect from "./Proyect";
const URL = "https://github.com/dbriceno10/pelis-react-native-app";
const urlRepo = "https://github.com/dbriceno10/pelis-react-native-app";

const Proyect12 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Pelis App"
      proyectDesc="App móvil simple para buscar películas y guardarlas en favoritos."
      tecn="Tecnologías utilizadas: JavaScript, React Native, TypeScript, Node JS, Git/Github."
      urlPage={URL}
      urlRepo={urlRepo}
      btnPage="Visit Demo"
    />
  );
};

export default Proyect12;
