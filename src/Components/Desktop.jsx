import React, { useState } from "react";
import "../Styles/Header.css";
import "../App.css";
import Logo from "./Logo";

const Desktop = () => {
  const [path, setPath] = useState(window.location.pathname);
  console.log(path);
  return (
    <div className="header">
      <Logo />
      <div className="navs">
        {path == "/" ? (
          <a className="active">
            Home
          </a>
        ) : (
          <a href="/" className="not-active">
            Home
          </a>
        )}
        {path == "/fulfillment" ? (
          <a className="active">
            Fulfillment
          </a>
        ) : (
          <a href="/fulfillment" className="not-active">
            Fulfillment
          </a>
        )}
        {path == "/fba-prep" ? (
          <a className="active">
            FBA Prep
          </a>
        ) : (
          <a href="/fba-prep" className="not-active">
            FBA Prep
          </a>
        )}
        {path == "/software" ? (
          <a className="active">
            Software
          </a>
        ) : (
          <a href="/software" className="not-active">
            Software
          </a>
        )}
        {path == "/about" ? (
          <a className="active">
            About
          </a>
        ) : (
          <a href="/about" className="not-active">
            About
          </a>
        )}
        {path == "/get-started" ? (
          <a className="active">
            Get Started
          </a>
        ) : (
          <a href="/get-started" className="not-active">
            Get Started
          </a>
        )}
        {path == "/fulfillment" ? (
          <a className="active">
            Dashboard
          </a>
        ) : (
          <a href="/" className="not-active">
            Dashboard
          </a>
        )}
      </div>
      <div className="links">
        <a href=""><i className="uil uil-instagram"></i></a>
        <a href=""><i className="uil uil-facebook-f"></i></a>
      </div>
    </div>
  );
};

export default Desktop;
