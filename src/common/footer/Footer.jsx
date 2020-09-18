import React from "react";

import "./Footer.scss";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <p>Copy right © {date}</p>
    </div>
  );
};

export default Footer;
