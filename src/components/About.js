import React, { useEffect } from "react";
import Skills from "./Skills";
import userPhoto from "../assets/image/fondo-blanco.png";
import "./styles/About.css";
import CV from "../assets/cv/Daniel_Briceno_CV.pdf";

const About = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    handleScrollToTop()
  }, [])

  return (
    <React.Fragment>
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src={userPhoto} alt="user avatar" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h1 className="about-me">
              <span className="about-description font-500">Sobre Mí</span>
            </h1>
            <div>
              <p className="about-description">
                Hola 🖐️😉, mi nombre es Daniel Briceño, Full Stack Developer. 💻🤓.
              </p>

              <p className="about-description">
                Soy entusiasta de la educación digital y apasionado de la educación efectiva 💻🤓, del rápido aprendizaje y del crecimiento personal y profesional, me encanta crear productos digitales. Aunque mi especialidad es frontend, hoy me estoy desarrollando como especialista en backend para ser un fullstack web javascript developer. 📲💻📲💻📲💻
              </p>

              <p className="about-description">
                La comunicación y el trabajo en equipo es para mí esencial para poder crecer como desarrollador. Soy proactivo y metódico, siempre busco nuevos retos y me adapto fácilmente a los cambios, estoy abierto a aprender nuevas tecnologías y lenguajes.

              </p>

              <p className="about-description">
                ✅ Técnologías: HTML, CSS, JavaScript, React JS/React Native, Next JS, Redux JS, TypeScript, Bootstrap, Less, Node JS, Nest JS, Express, SQL, PostgreSQL, Sequelize, MongoDB, Mongoose, JsonWebToken, Figma, Git.

              </p>
            </div>
            <hr size="8px" color="white" />
            <h2 className="about-me">
              <span className="about-description font-500">
                ¿Qué puedo hacer?
              </span>
            </h2>
            <br />
            <h3 className="about-me center font-500">Front-End</h3>
            <p className="about-description">
              {/* Como desarrollador en javascript, tengo experiencia en el manejo
              de HTML y CSS, además del manejo de frameworks y liberías,
              especialmente React JS. Puedo dar estilos, crear componentes
              reactivos y darles vida a las aplicaciones conectandolas con APIs. */}
              Como desarrollador frontend, tengo experiencia en el manejo
              de HTML y CSS, además del manejo de frameworks y liberías,
              especialmente React JS.

            </p>
            <p className="about-description">
              Mi proyecto favorito en este sentido sería WikiDex, es una SPA, la cual, conectada a un backend permite al usuario traer a todos los pokemones existentes para renderizarlos en una serie de cards. Permite buscarlos por nombre o por id, así como también poder filtrarlos mediante varios filtros predefinidos. La app tambie nos da la posibilidad, mediante un formulario controlado, crear nuevos pokemones con atributos definidos por el usuario (estos se guardaran en una base de datos).
            </p>
            <p className="about-description">
              Esta app hace uso de la libería React-Redux para manejar estados globales en la misma, además de los estados locales propios de cada componente en React. Cuenta distintas secciones y páginas panejadas por rutas, sobre las que aprovecho las características de React para reutilizar componentes. Las tecnologías que utilicé fueron HTML, CSS, JavaScript, React JS, React-Redux, Node JS, Express, PostgreSQL, Sequelize, Git/Github.
            </p>
            <br />
            <h3 className="about-me center font-500">Back-End</h3>
            <p className="about-description">
              Utilizando Express y Node, puedo crear rutas para APIs REST,
              protegerlas e implementar bases de datos SQL y
              NoSQL como PostgreSQL y MongoDB.
            </p>
            <p className="about-description">
              En este sentido mi proyecto fue el de Learnzilla - Academia Online, proyecto colaborativo en el cual me estuve desempeñando principalmente como desarrollador backend. Es una plataforma de cursos online, con un backend creado principalmente con Node, Express y Sequelize como ORM para PostgreSQL. Para el mismo se han definido diferentes rutas para crear registros (de usuarios, cursos, videos, etc), permir que los usuarios inicien seción validando su información, editar y eliminar distintos registros y hacer peticiones a la base de datos.
            </p>
            <p className="about-description">
              Adicionalmente se implementó mediante Multer, la característica de poder cargar distintos archivos multimedias al proyecto y poder guardarlos en Google Dirve. Las tecnologías que utilicé fueron HTML, CSS, JavaScript, React JS, React-Redux, Material UI , Node JS, Express, PostgreSQL, Sequelize, Figma, Multer, Google-Drive-Api, Git/Github.
            </p>
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack cv">
                <a
                  id="btn-donwload-cv"
                  className="btn btn--download btn-donwload"
                  href={CV}
                  download="Daniel_Briceno_CV"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </React.Fragment>
  );
};

export default About;
