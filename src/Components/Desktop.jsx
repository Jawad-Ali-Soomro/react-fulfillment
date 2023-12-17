import React, { useState , useEffect} from "react";
import "../Styles/Header.css";
import "../App.css";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate()
  const [path, setPath] = useState(window.location.pathname);
  return (
   <>
   {
    isMobile == false ?  <div className="header">
    <Logo />
    <div className="navs">
      {path == "/" ? (
        <span className="active">Home</span>
      ) : (
        <span className="not-active" onClick={() => navigate('/')}>Home</span>
      )}
      {path == "/fulfillment" ? (
        <span className="active">Fulfillment</span>
      ) : (
        <span className="not-active" onClick={() => navigate('/fulfillment')}>Fulfillment</span>
      )}
      {path == "/fba-prep" ? (
        <span className="active">FBA Prep</span>
      ) : (
        <span className="not-active" onClick={() => navigate('/fba-prep')}>FBA Prep</span>
      )}
      {path == "/software" ? (
        <span className="active">Software</span>
      ) : (
        <span className="not-active" onClick={() => navigate('/software')}>Software</span>
      )}
      {path == "/about" ? (
        <span className="active">About</span>
      ) : (
        <span className="not-active" onClick={() => navigate('/about')}>About</span>
      )}
      {path == "/get-started" ? (
        <span className="active">Get Started</span>
      ) : (
        <span className="not-active" onClick={() => navigate('/get-started')}>Get Started</span>
      )}
      {path == "/dashboard" ? (
        <span className="active">Dashboard</span>
      ) : (
        <span className="not-active" onClick={() => navigate('/dashboard')}>Dashboard</span>
      )}
    </div>
    <div className="links">
      <a href="">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="">
        <i className="uil uil-facebook-f"></i>
      </a>
    </div>
  </div> : <MobileMenu />
   }
   </>
  );
};

export default Header;
