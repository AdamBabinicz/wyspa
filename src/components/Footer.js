import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Chochoł 2021 - {new Date().getFullYear()}.</p>
    </footer>
  );
};

export default Footer;
