import React from "react";
import Modals from "./Modals";
import "./styles/Portfolio.css";
class Portfolio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio" className="s-portfolio target-section">
          <div className="row s-portfolio__header">
            <div className="column large-12">
              <h3 className="font-500">A Few Of My Latest Creations</h3>
            </div>
          </div>
          <Modals />
        </section>
      </React.Fragment>
    );
  }
}

export default Portfolio;
