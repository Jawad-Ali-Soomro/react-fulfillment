import React from "react";
import "../Styles/Footer.css";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        
        <h3>&copy;2023 Eastern Fulfillment Co</h3>
        <h3>Trusted By Sellers Worldwide</h3>

        <p>
          <i className="uil uil-phone"></i>+1 (239) 451-9226 - Support
        </p>
        <p>
          <i className="uil uil-phone"></i>+1 (301) 337-5467 - Sales (10AM - 8PM
          EST)
        </p>
        <p>
          <i className="uil uil-envelope"></i>sales@librexfulfillment.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
