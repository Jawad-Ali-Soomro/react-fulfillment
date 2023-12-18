import React from "react";
import Header from "../Components/Desktop";
import "../Styles/Software.css";
const Software = () => {
  const scrollFn = (name) => {
    switch (name) {
      case "dashboard":
        document.querySelector(".slide").style.left = "0";
        break;
      case "order":
        document.querySelector(".slide").style.left = "-100%";
        break;
      case "inventory":
        document.querySelector(".slide").style.left = "-200%";
        break;
      case "inbound-shipment":
        document.querySelector(".slide").style.left = "-300%";
        break;
      case "fba-request":
        document.querySelector(".slide").style.left = "-400%";
        break;
    }
  };
  const IconComponent = ({ location, content }) => (
    <div className="iconMenu">
      <img src={location} alt={location} />
      <div className="content">{content}</div>
    </div>
  );

  return (
    <div>
      <Header />
      <div className="software-main">
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
                <input
                  type="radio"
                  name="checked"
                  id="dashboard"
                  onClick={(e) => scrollFn(e.target.getAttribute("id"))}
                />
                <label
                  htmlFor="dashboard"
                  onClick={(e) => scrollFn(e.target.getAttribute("for"))}
                >
                  Dashboard
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="checked"
                  id="order"
                  onClick={(e) => scrollFn(e.target.getAttribute("id"))}
                />
                <label
                  htmlFor="order"
                  onClick={(e) => scrollFn(e.target.getAttribute("for"))}
                >
                  Order
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="checked"
                  id="inventory"
                  onClick={(e) => scrollFn(e.target.getAttribute("id"))}
                />
                <label
                  htmlFor="inventory"
                  onClick={(e) => scrollFn(e.target.getAttribute("for"))}
                >
                  Inventory
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="checked"
                  id="inbound-shipment"
                  onClick={(e) => scrollFn(e.target.getAttribute("id"))}
                />
                <label
                  htmlFor="inbound-shipment"
                  onClick={(e) => scrollFn(e.target.getAttribute("for"))}
                >
                  Inbound Shipment
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="checked"
                  id="fba-request"
                  onClick={(e) => scrollFn(e.target.getAttribute("id"))}
                />
                <label
                  htmlFor="fba-request"
                  onClick={(e) => scrollFn(e.target.getAttribute("for"))}
                >
                  FBA Request
                </label>
              </div>
            </div>
          </div>
          <div className="sub-section-2">
            <div className="slide">
              <div className="data">
                <div>
                  <h1>Dashboard</h1>
                  <div className="content">
                    Get a full overview of your eCommerce business in seconds.
                    Preview all of your important store data all in one place.
                  </div>
                  <div className="title">FEATURES</div>
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
                  <h1>Order</h1>
                  <div className="content">
                    Get a full overview of your eCommerce business in seconds.
                    Preview all of your important store data all in one place.
                  </div>
                  <div className="title">FEATURES</div>
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
                  <h1>Inventory</h1>
                  <div className="content">
                    Get a full overview of your eCommerce business in seconds.
                    Preview all of your important store data all in one place.
                  </div>
                  <div className="title">FEATURES</div>
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
                  <h1>Inbound Shipment</h1>
                  <div className="content">
                    Get a full overview of your eCommerce business in seconds.
                    Preview all of your important store data all in one place.
                  </div>
                  <div className="title">FEATURES</div>
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
                  <h1>FBA Request</h1>
                  <div className="content">
                    Get a full overview of your eCommerce business in seconds.
                    Preview all of your important store data all in one place.
                  </div>
                  <div className="title">FEATURES</div>
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
        <div className="sectionThree">
          <h1>Software Feature</h1>
          <div className="main-container">
            <IconComponent
              location={"./main/support.svg"}
              content={`24/7 U.S. Based Customer Support`}
            />
            <IconComponent
              location={"./main/integrations.svg"}
              content={`Unlimited Selling Integrations`}
            />
            <IconComponent
              location={"./main/dataImporting.svg"}
              content={`Data Importing`}
            />
            <IconComponent
              location={"./main/realtimeUpdates.svg"}
              content={`Real-time Updates`}
            />
            <IconComponent
              location={"./main/return.svg"}
              content={`Return Management`}
            />
            <IconComponent
              location={"./main/analysis.svg"}
              content={`Reporting & Analytics`}
            />
            <IconComponent
              location={"./main/softwareSuite.svg"}
              content={`On Website Software Suite`}
            />
            <IconComponent
              location={"./main/inventoryManagement.svg"}
              content={`Inventory Management`}
            />
            <IconComponent
              location={"./main/orderTracking.svg"}
              content={`Order Tracking`}
            />
            <IconComponent
              location={"./main/cloudBased.svg"}
              content={`Cloud Based Platform`}
            />
            <IconComponent
              location={"./main/orderProcessing.svg"}
              content={`Automated Order Processing`}
            />
            <IconComponent
              location={"./main/brandedPackaging.svg"}
              content={`Branded Packaging Slips & Labels`}
            />
          </div>
        </div>
        <div className="sectionFour">
          <div>
            <div>
              <div>INTEGRATIONS</div>
              <h2>
                LIBREX’s software allows for limitless multi-channel
                integrations
              </h2>
              <p>
                LIBREX’s software allows for limitless multi-channel
                integrations that can be used seamlessly with your online store.
                This is great for a lot of reasons and makes it so easy to use
                Librex. That is why it is so helpful.
              </p>
            </div>
            <div></div>
          </div>
          <div>
            <div className="sub-section-1">
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
