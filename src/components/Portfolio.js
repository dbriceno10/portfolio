import React from "react";
import Modals from "./Modals";
import "./styles/Portfolio.css";
const Portfolio = () => {
  return (
      <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-portfolio__header">
          <div className="column large-12">
            <h3 className="font-500">{/*A Few Of My Latest Creations*/}Mis últimos proyectos</h3>
          </div>
        </div>
        <Modals />
      </section>
  );
};

export default Portfolio;
