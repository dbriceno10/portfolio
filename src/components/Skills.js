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
import reactNativeStiker from "../assets/image/react-native-1.svg"
import herokuStiker from "../assets/image/heroku-4.svg"
import postmanStiker from "../assets/image/postman.svg"
// import githubStiker from "../assets/image/github (3).png"
import vscodeStiker from "../assets/image/visual-studio-code-1.svg"
import bootstrapStiker from "../assets/image/bootstrap-5-1.svg"
import sassStiker from "../assets/image/sass-1.svg"
import lessStiker from "../assets/image/less.svg"


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
                skill="bootstrap"
                src={bootstrapStiker}
                title="bootstarp-skill"
                alt="bootstrap-logo"
              />
              <Skill
                skill="sass"
                src={sassStiker}
                title="sass-skill"
                alt="sass-logo"
              />
              <Skill
                skill="less"
                src={lessStiker}
                title="less-skill"
                alt="less-logo"
              />
              <Skill
              skill="JavaScript"
                src={javascriptStiker}
                title="javascript-skill"
                alt="javascript-logo"
                porcent="95"
              />
              <Skill
                skill="React"
                src={reactStiker}
                title="react-skill"
                alt="react-logo"
                porcent="90"
              />
              <Skill 
                skill="ReactNative"
                src={reactNativeStiker}
                title="react-native-skill"
                alt="react-native-logo"
              />
              <Skill
                skill="Redux"
                src={reduxStiker}
                title="redux-skill"
                alt="rexu-logo"
                porcent="75"
              />
              <Skill
                skill="Node"
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
              {/* <Skill 
                skill="github"
                src={githubStiker}
                alt="github-logo"
              /> */}
              <Skill 
                skill="postman"
                src={postmanStiker}
                title="postman-skill"
                alt="postman-logo"
              />
              <Skill 
                skill="vscode"
                src={vscodeStiker}
                title="vscode"
                alt="vscode-logo"
              />
              <Skill 
                skill="heroku"
                src={herokuStiker}
                title="heroku"
                alt="heroku-logo"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
