import React from "react";
import Header from "../Components/Desktop";
import "../Styles/Software.css";
import { useEffect } from "react";
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
            <img src="./softwareDesktop.svg" alt="desktop" />
            <img src="./softwareMobile.svg" alt="mobile" />
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
                <img src="./dashboard.png" alt="png" />
              </div>
              <div className="data">
                <div>
                  <h1>Order</h1>
                  <div className="content">
                    Our support team works around the clock to ensure that all
                    of your orders are being processed in real time. Our Librex
                    Go Dashboard supports seamless integrations with unlimited
                    selling channels.
                  </div>
                  <div className="title">FEATURES</div>
                  <ul>
                    <li>Same-day Order Processing</li>
                    <li>Real-time Order Reporting</li>
                    <li>Error-free Turn Around</li>
                  </ul>
                </div>
                <img src="./orders.png" alt="png" />
              </div>
              <div className="data">
                <div>
                  <h1>Inventory</h1>
                  <div className="content">
                    Managing inventory can become really frustrating especially
                    when you have multiple selling channels. Our in-house
                    software takes all the stress off of having to keep track of
                    your inventory.
                  </div>
                  <div className="title">FEATURES</div>
                  <ul>
                    <li>Live Inventory Updates</li>
                    <li>Manage and Transfer Inventory</li>
                    <li>Inventory Lifecycle (Coming soon)</li>
                  </ul>
                </div>
                <img src="./inventory.png" alt="png" />
              </div>
              <div className="data">
                <div>
                  <h1>Inbound Shipment</h1>
                  <div className="content">
                    Send us containers, pallets or individual cartons, and our
                    team will turn around all inbound shipments in less than 8
                    hours so you can simply start shipping your products the day
                    they arrive.
                  </div>
                  <div className="title">FEATURES</div>
                  <ul>
                    <li>Same Day Receiving</li>
                    <li>
                      Retail Storage Network keeps your inventory closest to
                      your customers
                    </li>
                  </ul>
                </div>
                <img src="./inbound.png" alt="png" />
              </div>
              <div className="data">
                <div>
                  <h1>FBA Request</h1>
                  <div className="content">
                    Keeping up with inventory restrictions from Amazon can be
                    tedious. Whether it’s an FBA prep or replenishment request,
                    we will take care of it within 1 business day. Simply upload
                    your labels to our software and we will take it from there.
                  </div>
                  <div className="title">FEATURES</div>
                  <ul>
                    <li>Same Day Forwarding</li>
                    <li>FBA Prep 2 Day Turnaround</li>
                    <li> Custom Work Orders for Bundles and more</li>
                  </ul>
                </div>
                <img src="./fba.png" alt="png" />
              </div>
            </div>
          </div>
        </div>
        <div className="sectionThree">
          <h1>Software Feature</h1>
          <div className="main-container">
            <IconComponent
              location={"./support.svg"}
              content={`24/7 U.S. Based Customer Support`}
            />
            <IconComponent
              location={"./integrations.svg"}
              content={`Unlimited Selling Integrations`}
            />
            <IconComponent
              location={"./dataImporting.svg"}
              content={`Data Importing`}
            />
            <IconComponent
              location={"./realtimeUpdates.svg"}
              content={`Real-time Updates`}
            />
            <IconComponent
              location={"./return.svg"}
              content={`Return Management`}
            />
            <IconComponent
              location={"./analysis.svg"}
              content={`Reporting & Analytics`}
            />
            <IconComponent
              location={"./softwareSuite.svg"}
              content={`On Website Software Suite`}
            />
            <IconComponent
              location={"./inventoryManagement2.svg"}
              content={`Inventory Management`}
            />
            <IconComponent
              location={"./orderTracking.svg"}
              content={`Order Tracking`}
            />
            <IconComponent
              location={"./cloudBased.svg"}
              content={`Cloud Based Platform`}
            />
            <IconComponent
              location={"./orderProcessing.svg"}
              content={`Automated Order Processing`}
            />
            <IconComponent
              location={"./brandedPackaging.svg"}
              content={`Branded Packaging Slips & Labels`}
            />
          </div>
        </div>
        <div className="sectionFour">
          <div className="sub-section-1">
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
            <div>
              <div className="mainbox">
                <img src="./boxBottom.svg" alt="boxBottom.svg" />
                <img src="./ebay.webp" alt="ebay" />
                <img src="./walmart.webp" alt="ebay" />
                <img src="./amazon.webp" alt="ebay" />
                <img src="./woocom.svg" alt="ebay" />
                <img src="./boxTop.svg" alt="topBox" />
              </div>
            </div>
          </div>
          <div className="sub-section-2">
            <div className="menu">
              <div>
                <div>
                  <img src="./ebay.webp" alt="ebay" />
                </div>
                <span>Ebay</span>
              </div>
              <div>
                <div>
                  <img src="./amazon.webp" alt="ebay" />
                </div>
                <span>Amazon Marketplace</span>
              </div>
              <div>
                <div>
                  <img src="./shopify.webp" alt="shopify" />
                </div>
                <span>Shopify</span>
              </div>
              <div>
                <div>
                  <img src="./walmart.webp" alt="walmart" />
                </div>
                <span>walmart</span>
              </div>
              <div>
                <div>
                  <img src="./woocom.svg" alt="wooCommerce" />
                </div>
                <span>WooCommerce</span>
              </div>
              <div>
                <div>
                  <img src="./etsy.svg" alt="etsy" />
                </div>
                <span>etsy</span>
              </div>
            </div>
            <input type="checkbox" name="show" id="show" />
            <div className="show-menu">
              <div>
                <div>
                  <img src="./google.svg" alt="google" />
                </div>
                <span>Google</span>
              </div>
              <div>
                <div>
                  <img src="./bigcommerce.svg" alt="bigcommerce" />
                </div>
                <span>BigCommerce</span>
              </div>
              <div>
                <div>
                  <img src="./squarespace.webp" alt="squarespace" />
                </div>
                <span>SquareSpace</span>
              </div>
              <div>
                <div>
                  <img src="./wix.webp" alt="wix" />
                </div>
                <span>Wix</span>
              </div>
              <div>
                <div>
                  <img src="./wish.svg" alt="wish" />
                </div>
                <span>Wish</span>
              </div>
              <div>
                <div>
                  <img src="./weebly.svg" alt="weebly" />
                </div>
                <span>Weebly</span>
              </div>
            </div>
            <div className="show-menu">
              <div>
                <div>
                  <img src="./magento.svg" alt="maganto" />
                </div>
                <span>Magento</span>
              </div>
              <div>
                <div>
                  <img src="./stitchLabs.png" alt="stitchLabs" />
                </div>
                <span>StitchLabs</span>
              </div>
              <div>
                <div>
                  <img src="./ecwid.svg" alt="ecwid" />
                </div>
                <span>Ecwid</span>
              </div>
              <div>
                <div>
                  <img src="./sellbrite.png" alt="sellbrite" />
                </div>
                <span>Sellbrite</span>
              </div>
              <div>
                <div>
                  <img src="./3dCart.svg" alt="3dCart" />
                </div>
                <span>3dCart</span>
              </div>
              <div>
                <div>
                  <img src="./openCart.svg" alt="openCart" />
                </div>
                <span>OpenCart</span>
              </div>
            </div>
            <div>
              <label className="showmore" htmlFor={"show"}>
                Show
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
