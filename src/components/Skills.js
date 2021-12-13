import React from "react";
import Skill from "./Skill";
import htmlStiker from "../assets/image/html.png";
import cssStiker from "../assets/image/css-logo.png";
import javascriptStiker from "../assets/image/javascript-logo-svg-vector.svg";
import figmaStiker from "../assets/image/figma-1-logo-svg-vector.svg";
import reactStiker from "../assets/image/react-logo22.png";
import gitStiker from "../assets/image/git-logo2.png";
import nodeStiker from "../assets/image/nodejs-icon-logo-svg-vector.svg";
import expressStiker from "../assets/image/express.png";
import typescriptStiker from "../assets/image/typescript-programming-language.svg";
import mongodbtStiker from "../assets/image/mongodb-leaf-logo.png";
import reduxStiker from "../assets/image/redux.svg";
import psqlStiker from "../assets/image/postgresql-icon.svg";
import sequelizeStiker from "../assets/image/sequelizejs-icon.svg";

const Skills = () => {
  return (
    <section className="s-resume target-section">
      <div className="row s-resume__section ">
        <div className="column  tab-12">
          <h3 id="skills" className="section-header-allcaps">
            Skills
          </h3>
        </div>
        <div className="column large-10 tab-12">
          <div className="resume-block">
            <ul className="skill-bars-fat">
              <Skill
                skill="HTML"
                src={htmlStiker}
                title="html-skill"
                alt="html-logo"
                porcent="95"
              />
              <Skill
                skill="CSS"
                src={cssStiker}
                title="css-skill"
                alt="css-logo"
                porcent="95"
              />
              <Skill
                src={javascriptStiker}
                title="javascript-skill"
                alt="javascript-logo"
                porcent="95"
              />
              <Skill
                skill="React JS"
                src={reactStiker}
                title="react-skill"
                alt="react-logo"
                porcent="90"
              />
              <Skill
                skill="React-Redux"
                src={reduxStiker}
                title="redux-skill"
                alt="rexu-logo"
                porcent="75"
              />
              <Skill
                skill="Node JS"
                src={nodeStiker}
                title="node-skill"
                alt="node-logo"
                porcent="80"
              />
              <Skill
                skill="Express"
                src={expressStiker}
                title="express-skill"
                alt="file.js-logo"
                porcent="80"
              />
              <Skill
                skill="TypeScript"
                src={typescriptStiker}
                title="typescript-skill"
                alt="typescript-logo"
                porcent="55"
              />
              <Skill
                skill="MongoDB"
                src={mongodbtStiker}
                title="mongodb-skill"
                alt="mongodb-leaf-logo"
                porcent="65"
              />
              <Skill
                skill="Postgresql"
                src={psqlStiker}
                alt="psql-logo"
                porcent="70"
              />
              <Skill
                skill="Sequelize"
                src={sequelizeStiker}
                alt="sequelize-logo"
                porcent="70"
              />
              <Skill
                skill="Git"
                src={gitStiker}
                title="git-skill"
                alt="git-logo"
                porcent="95"
              />
              <Skill
                skill="Figma"
                src={figmaStiker}
                title="figma-skill"
                alt="figma-logo"
                porcent="75"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
