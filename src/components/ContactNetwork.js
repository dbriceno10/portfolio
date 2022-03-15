import React from "react";

const ContactNetwork = ({
  stiker,
  alt,
  title,
  header,
  href,
  target,
  linkName,
}) => {
  return (
    <section>
        <div className="grid2">
          <img className="stiker2" src={stiker} alt={alt} title={title} />
          <h5 className="contact-block__header">
            {/* <span className="black-background">{header}</span> */}
            <span className="black-background">
            {!target?<a className="mailtoui" href={href}>
              {linkName}
            </a>:<a className="mailtoui" href={href} target={target}>
              {linkName}
            </a>}
          </span>
          </h5>
        </div>
        <p className="contact-block__content">
          {/* <span className="black-background">
            {!target?<a className="mailtoui" href={href}>
              {linkName}
            </a>:<a className="mailtoui" href={href} target={target}>
              {linkName}
            </a>}
          </span> */}
        </p>
    </section>
  );
};

export default ContactNetwork;
