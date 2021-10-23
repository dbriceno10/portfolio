import React from "react";
import { Link } from "react-router-dom";
import "./styles/Error.css";
import error500 from "../assets/image/Error404.jpg";

class Error404 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="PageError">
          <Link to={`/`}>
            <img
              className="error-img"
              src={error500}
              alt="server-internal error"
            />
          </Link>
          <div className="Badges__buttons">
            <Link className="btn btn-primary btn-home" to={`/`}>
              Home
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Error404;
