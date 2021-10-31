import React from "react";

const Skill = ({ skill, src, title, alt, porcent }) => {
  return (
    <React.Fragment>
      <li className="grid">
        <strong>{skill}</strong>
        <img className="stiker" src={src} title={title} alt={alt} />
        <div className={`progress percent${porcent}`} />
      </li>
      <br />
    </React.Fragment>
  );
};

export default Skill;
