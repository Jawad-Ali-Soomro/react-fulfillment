import React from "react";
import "../Styles/Footer.css";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <Logo />
        <p>
          Eastern <span>Fulfillment</span>
        </p>
        <h5>Trusted By Sellers Worldwide</h5>
        <h3>&copy;2023 Eastern Fulfillment Co</h3>
      </div>
    </div>
  );
};

export default Footer;
