import React from "react"
import Modals from "./Modals"

class Portfolio extends React.Component {

render() {
  return(
    <section id="portfolio" className="s-portfolio target-section">
    <div className="row s-portfolio__header">
      <div className="column large-12">
        <h3>A Few Of My Latest Creations</h3>
      </div>
    </div>
    <Modals />
    </section>
    )
  }
}

export default Portfolio