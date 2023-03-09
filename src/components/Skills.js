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
import mongodbtStiker from "../assets/image/mongo.png";
import reduxStiker from "../assets/image/redux.svg";
import psqlStiker from "../assets/image/postgresql-icon.svg";
import sequelizeStiker from "../assets/image/sequelizejs-icon.svg";
import bootstrapStiker from "../assets/image/bootstrap-5-1.svg";
import sassStiker from "../assets/image/sass-1.svg";
import nextStiker from "../assets/image/next-js.svg";
import grapgqlStiker from "../assets/image/graphql.svg";
import materialStiker from "../assets/image/material-ui-1.svg";
import vueStiker from "../assets/image/vue-js-1.svg";
import nestStiker from '../assets/image/nestjs.svg'

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
            <ul className="skill-bars-fat skill-grid">
              <Skill
                skill="HTML"
                src={htmlStiker}
                title="HTML"
                alt="html-logo"
              />
              <Skill skill="CSS" src={cssStiker} title="CSS" alt="css-logo" />
              <Skill
                skill="bootstrap"
                src={bootstrapStiker}
                title="Bootstrap"
                alt="bootstrap-logo"
              />
              <Skill
                skill="sass"
                src={sassStiker}
                title="Sass"
                alt="sass-logo"
              />
              <Skill
                skill="JavaScript"
                src={javascriptStiker}
                title="JavaScript"
                alt="javascript-logo"
              />
              <Skill
                skill="TypeScript"
                src={typescriptStiker}
                title="TypeScript"
                alt="typescript-logo"
              />
              <Skill
                skill="React"
                src={reactStiker}
                title="React Js - React Native"
                alt="react-logo"
              />
              <Skill
                skill="Next"
                src={nextStiker}
                title="Next Js"
                alt="next-logo"
              />
              <Skill
                skill="Vue"
                src={vueStiker}
                title="Vue Js"
                alt="vue-logo"
              />
              <Skill
                skill="MUI"
                src={materialStiker}
                title="Material-UI"
                alt="material-ui-logo"
              />
              <Skill
                skill="Redux"
                src={reduxStiker}
                title="Redux"
                alt="rexu-logo"
              />
              <Skill
                skill="Node"
                src={nodeStiker}
                title="Node Js"
                alt="node-logo"
              />
              <Skill
                skill="Express"
                src={expressStiker}
                title="Express Js"
                alt="express-logo"
              />
              <Skill
                skill="Nest"
                src={nestStiker}
                title="Nest Js"
                alt="nest-logo"
              />
              <Skill
                skill="GraphQL"
                src={grapgqlStiker}
                title="GraphQL"
                alt="graphql-logo"
              />
              <Skill
                skill="MongoDB"
                src={mongodbtStiker}
                title="MongoDB"
                alt="mongodb-leaf-logo"
              />
              <Skill
                skill="Postgresql"
                src={psqlStiker}
                title="PostgreSQL"
                alt="psql-logo"
              />
              <Skill
                skill="Sequelize"
                src={sequelizeStiker}
                title="Sequelize"
                alt="sequelize-logo"
              />
              <Skill skill="Git" src={gitStiker} title="Git" alt="git-logo" />
              <Skill
                skill="Figma"
                src={figmaStiker}
                title="Figma"
                alt="figma-logo"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
