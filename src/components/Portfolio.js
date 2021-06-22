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
      {/* <div className="column folio-item">
        <a href="#modal-01" className="folio-item__thumb">
          <img src="images/portfolio/droplet.jpg" srcSet="images/portfolio/droplet.jpg 1x, 
        images/portfolio/droplet@2x.jpg 2x" alt />
        </a>
      </div> */}
      {/* <div className="column folio-item">
      <a href="#modal-02" className="folio-item__thumb">
      <img src="images/portfolio/lamp.jpg" srcSet="images/portfolio/lamp.jpg 1x, 
      images/portfolio/lamp@2x.jpg 2x" alt />
      </a>
      </div> */}
      {/* <div className="column folio-item">
      <a href="#modal-03" className="folio-item__thumb">
      <img src="images/portfolio/minimalismo.jpg" srcSet="images/portfolio/minimalismo.jpg 1x, 
      images/portfolio/minimalismo@2x.jpg 2x" alt />
      </a>
      </div> */}
      {/* <div className="column folio-item">
      <a href="#modal-04" className="folio-item__thumb">
      <img src="images/portfolio/shutterbug.jpg" srcSet="images/portfolio/shutterbug.jpg 1x, 
      images/portfolio/shutterbug@2x.jpg 2x" alt />
      </a>
      </div> */}
      {/* <div className="column folio-item">
      <a href="#modal-05" className="folio-item__thumb">
      <img src="images/portfolio/fuji.jpg" srcSet="images/portfolio/fuji.jpg 1x, 
      images/portfolio/fuji@2x.jpg 2x" alt />
      </a>
      </div> */}
      {/* <div className="column folio-item">
      <a href="#modal-06" className="folio-item__thumb">
      <img src="images/portfolio/skaterboy.jpg" srcSet="images/portfolio/skaterboy.jpg 1x, 
      images/portfolio/skaterboy@2x.jpg 2x" alt />
      </a>
      </div> */}
      {/* <div className="column folio-item">
      <a href="#modal-07" className="folio-item__thumb">
      <img src="images/portfolio/rucksack.jpg" srcSet="images/portfolio/rucksack.jpg 1x, 
      images/portfolio/rucksack@2x.jpg 2x" alt />
      </a>
      </div> */}
      {/* <div className="column folio-item">
      <a href="#modal-08" className="folio-item__thumb">
      <img src="images/portfolio/sanddunes.jpg" srcSet="images/portfolio/sanddunes.jpg 1x, 
      images/portfolio/sanddunes@2x.jpg 2x" alt />
      </a>
      </div> */}
   {/* end folio-list */}
    {/* Modal Templates Popup
    =========================================================== */}
    {/* <div id="modal-01" hidden>
    <div className="modal-popup">
    <img src="images/portfolio/gallery/g-droplet.jpg" alt />
    <div className="modal-popup__desc">
    <h5>Droplet</h5>
    <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
    <ul className="modal-popup__cat">
    <li>Branding</li>
    <li>Product Design</li>
    </ul>
    </div>
    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
    </div>
    </div>
    <div id="modal-02" hidden>
    <div className="modal-popup">
    <img src="images/portfolio/gallery/g-lamp.jpg" alt />
    <div className="modal-popup__desc">
    <h5>The Lamp</h5>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <ul className="modal-popup__cat">
    <li>Branding</li>
    </ul>
    </div>
    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
    </div>
    </div>
    <div id="modal-03" hidden>
    <div className="modal-popup">
    <img src="images/portfolio/gallery/g-minimalismo.jpg" alt />
    <div className="modal-popup__desc">
    <h5>Minimalismo</h5>
    <p>Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.</p>
    <ul className="modal-popup__cat">
    <li>Product Design</li>
    </ul>
    </div>
    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
    </div>
    </div>
    <div id="modal-04" hidden>
    <div className="modal-popup">
    <img src="images/portfolio/gallery/g-shutterbug.jpg" alt />
    <div className="modal-popup__desc">
    <h5>Shutterbug</h5>
    <p>Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.</p>
    <ul className="modal-popup__cat">
    <li>E-Commerce</li>
    </ul>
    </div>
    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
    </div>
    </div>
    <div id="modal-05" hidden>
    <div className="modal-popup">
    <img src="images/portfolio/gallery/g-fuji.jpg" alt />
    <div className="modal-popup__desc">
    <h5>Fuji</h5>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <ul className="modal-popup__cat">
    <li>Product Design</li>
    </ul>
    </div>
    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
    </div>
    </div>
    <div id="modal-06" hidden>
    <div className="modal-popup">
    <img src="images/portfolio/gallery/g-skaterboy.jpg" alt />
    <div className="modal-popup__desc">
    <h5>Skaterboy</h5>
    <p>Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis bibendum auctor.</p>
    <ul className="modal-popup__cat">
    <li>Branding</li>
    <li>Product Design</li>
    </ul>
    </div>
    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
    </div>
    </div>
    <div id="modal-07" hidden>
    <div className="modal-popup">
    <img src="images/portfolio/gallery/g-rucksack.jpg" alt />
    <div className="modal-popup__desc">
    <h5>Rucksack</h5>
    <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
    <ul className="modal-popup__cat">
    <li>Branding</li>
    <li>Product Design</li>
    </ul>
    </div>
    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
    </div>
    </div>
    <div id="modal-08" hidden>
    <div className="modal-popup">
    <img src="images/portfolio/gallery/g-sanddunes.jpg" alt />
    <div className="modal-popup__desc">
    <h5>Sand Dunes</h5>
    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
    <ul className="modal-popup__cat">
    <li>Web Design</li>
    </ul>
    </div>
    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
    </div>
    </div> */}
    </section>
    )
  }
}

export default Portfolio