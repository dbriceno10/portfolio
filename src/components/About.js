import React, { useEffect } from "react";
import Skills from "./Skills";
import userPhoto from "../assets/image/fondo-blanco.png";
import "./styles/About.css";
import CV from "../assets/cv/Daniel_Briceno_CV.pdf";

const About = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

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
                Hola, mi nombre es Daniel Briceño, Full Stack Developer.
              </p>

              <p className="about-description">
                Soy un apasionado desarrollador full stack con más de 2 años de
                experiencia profesional. He tenido la oportunidad de trabajar en
                proyectos de mediano y largo alcance, implementando clientes con
                React y React Native, además de trabajar en el lado del servidor
                implementando APIs y trabajando bajo la arquitectura de micro
                servicios. Siempre prestando especial atención a los detalles,
                trabajando bajo principios SOLID y arquitecturas como hexagonal
                y MCV para garantizar un código limpio y mantenible.
              </p>

              <p className="about-description">
                La comunicación y el trabajo en equipo es para mí esencial para
                poder crecer como desarrollador. Soy proactivo y metódico,
                siempre busco nuevos retos y me adapto fácilmente a los cambios,
                estoy abierto a aprender nuevas tecnologías y lenguajes.
              </p>

              <p className="about-description">
                Técnologías: HTML, CSS, JavaScript, React JS/React Native, Next
                JS, Redux JS, TypeScript, Bootstrap, Less, Node JS, Nest JS,
                Express, SQL, PostgreSQL, Sequelize, MongoDB, Mongoose,
                JsonWebToken, Figma, Git.
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
              Como desarrollador frontend, tengo experiencia en el manejo de
              HTML y CSS, además del manejo de frameworks y liberías,
              especialmente React JS y React Native. He trabajado en proyectos
              de escala mediana y grandes, implementando soluciones de código
              eficientes, trabajado con arquitecturas de software escalables y
              fácilmente mantenibles.
            </p>
            <br />
            <h3 className="about-me center font-500">Back-End</h3>
            <p className="about-description">
              Utilizando Express y Node, puedo crear rutas para APIs REST,
              protegerlas e implementar bases de datos SQL y NoSQL como
              PostgreSQL y MongoDB. De igualmanera he trabajado con
              arquitecturas de software escalables y mantenibles, implementando
              módulos manteniendo separadas las distintas capas de un proyecto.
            </p>
            <p className="about-description">
              He trabajado en proyectos medianos y grandes, desde su
              planteamiento a su ejecución final, teniendo cada día la
              oportunidad de aprender cada día acerca de como ayudar al cliente
              a desarrollar su producto deseado resolviendo cualquier problema
              presentado. He tenido la oportunidad de trabajar en el desarrollo
              de aplicaciones web y móbiles, empleando las mejores prácticas,
              escribiendo código limpio, legible y mantenible, siempre teniendo
              en mente optimizar al máximo el rendimiento del prouducto final.
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
                  Descargar CV
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
