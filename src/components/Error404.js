import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Error.css";
import error500 from "../assets/image/Error404.jpg";

const Error404 = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    handleScrollToTop()
  }, [])


  return (
    <div className="PageError">
      <Link to="/">
        <img
          className="error-img"
          src={error500}
          alt="server-internal error"
        />
      </Link>
      <div className="Badges__buttons">
        <Link className="btn btn-primary btn-home" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
