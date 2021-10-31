import React from "react";
import { Link } from "react-router-dom";

const HeroButton = ({ path, text }) => {
  return (
    <Link className="btn btn-hero" to={path}>
      {text}
    </Link>
  );
};

export default HeroButton;
