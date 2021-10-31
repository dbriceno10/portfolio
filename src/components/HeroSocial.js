import React from "react";
const HeroSocial = ({ href = "", target = "_blank", src, alt, title }) => {
  return (
    <a href={href} target={target}>
      <img className="hero--logo" src={src} alt={alt} title={title} />
    </a>
  );
};

export default HeroSocial;
