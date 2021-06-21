import React from "react"

class Resume extends React.Component {
    render() {
        return(
  <section id="resume" className="s-resume target-section">
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Career</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Dropbox</h4>
            <p className="resume-block__header-meta">
              <span>Product Designer</span> 
              <span className="resume-block__header-date">
                August 2019 - Present
              </span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
          </p>
        </div> {/* end resume-block */}
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Facebook</h4>
            <p className="resume-block__header-meta">
              <span>UI/UX Designer</span> 
              <span className="resume-block__header-date">
                August 2016 - July 2019
              </span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
          </p>
        </div> {/* end resume-block */}
      </div>
    </div> {/* s-resume__section */}
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Education</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">University of Life</h4>
            <p className="resume-block__header-meta">
              <span>Master in Graphic Design</span> 
              <span className="resume-block__header-date">
                April 2015
              </span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
          </p>
        </div> {/* end resume-block */}
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">School of Cool Designers</h4>
            <p className="resume-block__header-meta">
              <span>B.A. Degree in Graphic Design</span> 
              <span className="resume-block__header-date">
                August 2012
              </span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
          </p>
        </div> {/* end resume-block */}
      </div>
    </div> {/* s-resume__section */}
    {/* <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Skills</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
          </p>
          <ul className="skill-bars-fat">
            <li>
              <div className="progress percent85" />
              <strong>HTML</strong>
            </li>
            <li>
              <div className="progress percent85" />
              <strong>CSS</strong>
            </li>
            <li>
              <div className="progress percent65" />
              <strong>Javascript</strong>
            </li>
            <li>
              <div className="progress percent90" />
              <strong>Figma</strong>
            </li>
            <li>
              <div className="progress percent75" />
              <strong>Illustrator</strong>
            </li>
            <li>
              <div className="progress percent60" />
              <strong>Photoshop</strong>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
</section>
        )
    }
}

export default Resume