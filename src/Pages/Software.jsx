import React from "react";
import Header from "../Components/Desktop";
import "../Styles/Software.css";
const Software = () => {
  const scrollFn = (name) => {
    switch (name) {
      case "dashboard":
        document.querySelector(".slide").style.backgroundColor = "red";
        break;
      case "order":
        document.querySelector(".slide").style.backgroundColor = "red";
        break;
      case "inventory":
        document.querySelector(".slide").style.backgroundColor = "red";
        break;
      case "inbound-shipment":
        document.querySelector(".slide").style.backgroundColor = "red";
        break;
      case "fba-request":
        document.querySelector(".slide").style.backgroundColor = "red";
        break;
    }
  };

  return (
    <div>
      <Header />
      <div className="main">
        <div className="sectionOne">
          <div className="sub-section-1">
            <h1>
              Stay <span>connected</span>
            </h1>
            <span>Your eCommerce store all in one place</span>
          </div>
          <div className="sub-section-2">
            <img src="./main/softwareDesktop.svg" alt="desktop" />
            <img src="./main/softwareMobile.svg" alt="mobile" />
            <span>
              Never miss a beat with LIBREX. Manage your eCommerce store from
              anywhere on any computer, phone or tablet.
            </span>
          </div>
        </div>
        <div className="sectionTwo">
          <div className="sub-section-1">
            <div className="c-1">Services We Offer</div>

            <div className="radio-btn">
              <div>
                <input type="radio" name="checked" id="dashboard" />
                <label
                  htmlFor="dashboard"
                  onClick={(e) => scrollFn(e.target.getAttribute("for"))}
                >
                  Dashboard
                </label>
              </div>
              <div>
                <input type="radio" name="checked" id="order" />
                <label htmlFor="order">Order</label>
              </div>
              <div>
                <input type="radio" name="checked" id="inventory" />
                <label htmlFor="inventory">Inventory</label>
              </div>
              <div>
                <input type="radio" name="checked" id="inbound-shipment" />
                <label htmlFor="inbound-shipment">Inbound Shipment</label>
              </div>
              <div>
                <input type="radio" name="checked" id="fba-request" />
                <label htmlFor="fba-request">FBA Request</label>
              </div>
            </div>
          </div>
          <div className="sub-section-2">
            <div className="slide">
              <div className="data">
                <div>
                  <h1>Dashboard</h1>
                  <div>
                    Get a full overview of your eCommerce business in seconds.
                    Preview all of your important store data all in one place.
                  </div>
                  <div>FEATURES</div>
                  <ul>
                    <li>Full account overview</li>
                    <li>Inventory status alerts</li>
                    <li>Sales trends</li>
                  </ul>
                </div>
                <img src="./main/dashboard.png" alt="png" />
              </div>
              <div className="data">
                <div>
                  <h1>Dashboard</h1>
                  <div>
                    Get a full overview of your eCommerce business in seconds.
                    Preview all of your important store data all in one place.
                  </div>
                  <div>FEATURES</div>
                  <ul>
                    <li>Full account overview</li>
                    <li>Inventory status alerts</li>
                    <li>Sales trends</li>
                  </ul>
                </div>
                <img src="./main/dashboard.png" alt="png" />
              </div>
              <div className="data">
                <div>
                  <h1>d</h1>
                  <div>
                    Get a full overview of your eCommerce business in seconds.
                    Preview all of your important store data all in one place.
                  </div>
                  <div>FEATURES</div>
                  <ul>
                    <li>Full account overview</li>
                    <li>Inventory status alerts</li>
                    <li>Sales trends</li>
                  </ul>
                </div>
                <img src="./main/dashboard.png" alt="png" />
              </div>
              <div className="data">
                <div>
                  <h1>Dashboard</h1>
                  <div>
                    Get a full overview of your eCommerce business in seconds.
                    Preview all of your important store data all in one place.
                  </div>
                  <div>FEATURES</div>
                  <ul>
                    <li>Full account overview</li>
                    <li>Inventory status alerts</li>
                    <li>Sales trends</li>
                  </ul>
                </div>
                <img src="./main/dashboard.png" alt="png" />
              </div>
              <div className="data">
                <div>
                  <h1>Dashboard</h1>
                  <div>
                    Get a full overview of your eCommerce business in seconds.
                    Preview all of your important store data all in one place.
                  </div>
                  <div>FEATURES</div>
                  <ul>
                    <li>Full account overview</li>
                    <li>Inventory status alerts</li>
                    <li>Sales trends</li>
                  </ul>
                </div>
                <img src="./main/dashboard.png" alt="png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
