import React from "react";

const Skill = ({ skill, src, title, alt, porcent }) => {
  return (
    <div>
      <li>
        <strong>{skill}</strong>
        <img className="stiker" src={src} title={title} alt={alt} />
        {/* <div className={`progress percent${porcent}`} /> */}
      </li>
      <br />
    </div>
  );
};

export default Skill;
