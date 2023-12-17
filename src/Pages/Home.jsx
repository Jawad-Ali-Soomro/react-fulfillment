import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import Header from "../Components/Desktop";
import Slider from "../Components/Swiper";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";
const Home = () => {
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
  const [tab, setTab] = useState("Dashboard");
  return (
    <div className="home-page">
      <Header />
      <div className="main-hero">
        <div className="top-content">
          <h1>
            <span>STORE </span>
            <span>PREP</span>
            <span>PACK</span>
            <span>SHIP</span>
          </h1>
          <h2>Trusted By Online Sellers Worldwide</h2>
          <a href="/get-started">
            GO FOR IT <i className="uil uil-angle-right"></i>
          </a>
        </div>
        <div className="bottom-content">
          <p>
            We had made it <span>simple</span>, and we take care of the tough
            parts for you with:
          </p>
          <div className="main-carousel">
            <div className="main-tags">
              <h1>Same Day Shipping</h1>
              <h1>World Class Customer Service</h1>
              <h1>No Minimums</h1>
              <h1>Flate Rate Shipping</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="work-flow">
        <div className="content">
          <h4>HOW IT WORKS</h4>
          <p>
            Eastern Fulfillment is not your conventional Third Party Logistics
            partner (3PL). We strive to make the fulfillment process painless
            and easy to understand. With our trustworthy customer service and
            flat rate shipping fees there are never any surprise costs.
          </p>
          <p>
            We take care of your <span>inventory</span> in <span>three</span>{" "}
            easy steps:
          </p>
        </div>
      </div>
      <div className="steps">
        <div className="step">
          <div className="top-sect">
            <img src="./send.png" alt=""  style={{width:'200px' , height:'150px'}}/>
          </div>
          <section className="main-step">
            <h1>1</h1>
            <h2>Send & Connect</h2>
          </section>
        </div>
        <div className="step">
          <div className="top-sect">
            <img src="./store.png" alt="" style={{width:'200px' , height:'150px'}} />
          </div>
          <section className="main-step">
            <h1>2</h1>
            <h2>Store</h2>
          </section>
        </div>
        <div className="step not">
          <div className="top-sect">
            <img src="./ship.png" alt="" style={{width:'200px' , height:'150px'}}  />
          </div>
          <section className="main-step">
            <h1>3</h1>
            <h2>Ship</h2>
          </section>
        </div>
      </div>
      {isMobile == false ? (
        <>
          <div className="benefits">
            <div className="left">
              <p>WHAT COMES WITH PARTNERSHIP</p>
              <ul>
                {tab == "Dashboard" ? (
                  <li className="tab-active">Dashboard</li>
                ) : (
                  <li
                    className="tab-inactive"
                    onClick={() => setTab("Dashboard")}
                  >
                    Dashboard
                  </li>
                )}
                {tab == "Orders" ? (
                  <li className="tab-active">Orders</li>
                ) : (
                  <li className="tab-inactive" onClick={() => setTab("Orders")}>
                    Orders
                  </li>
                )}
                {tab == "Inventory" ? (
                  <li className="tab-active">Inventory</li>
                ) : (
                  <li
                    className="tab-inactive"
                    onClick={() => setTab("Inventory")}
                  >
                    Inventory
                  </li>
                )}
                {tab == "Inbound Shipments" ? (
                  <li className="tab-active">Inbound Shipments</li>
                ) : (
                  <li
                    className="tab-inactive"
                    onClick={() => setTab("Inbound Shipments")}
                  >
                    Inbound Shipments
                  </li>
                )}
                {tab == "FBA Requests" ? (
                  <li className="tab-active">FBA Requests</li>
                ) : (
                  <li
                    className="tab-inactive"
                    onClick={() => setTab("FBA Requests")}
                  >
                    FBA Requests
                  </li>
                )}
              </ul>
            </div>
            <div className="right">
              {tab == "Dashboard" ? (
                <div className="right-main">
                  <section className="content">
                    <h1>Dashboard</h1>
                    <p>
                      Get a full overview of your eCommerce business in seconds.
                      Preview all of your important store data all in one place.
                    </p>
                    <h3>FEATURES</h3>
                    <div className="feature-step">
                      <span>1</span>
                      <h5>Full account overview</h5>
                    </div>
                    <div className="feature-step">
                      <span>2</span>
                      <h5>Inventory status alerts</h5>
                    </div>
                    <div className="feature-step">
                      <span>3</span>
                      <h5>Sales trends</h5>
                    </div>
                  </section>
                  <section>
                    <img src="./dashboard.png" alt="" />
                  </section>
                </div>
              ) : (
                this
              )}
              {tab == "Orders" ? (
                <div className="right-main">
                  <section className="content">
                    <h1>Orders</h1>
                    <p>
                      Our support team works around the clock to ensure that all
                      of your orders are being processed in real time. Our
                      Eastern Fulfillment Go Dashboard supports seamless
                      integrations with unlimited selling channels.
                    </p>
                    <h3>FEATURES</h3>
                    <div className="feature-step">
                      <span>1</span>
                      <h5>Same-day Order Processing</h5>
                    </div>
                    <div className="feature-step">
                      <span>2</span>
                      <h5>Real-time Order Reporting</h5>
                    </div>
                    <div className="feature-step">
                      <span>3</span>
                      <h5>Error-free Turn Around</h5>
                    </div>
                  </section>
                  <section>
                    <img src="./orders.png" alt="" />
                  </section>
                </div>
              ) : (
                this
              )}
              {tab == "Inventory" ? (
                <div className="right-main">
                  <section className="content">
                    <h1>Inventory</h1>
                    <p>
                      Managing inventory can become really frustrating
                      especially when you have multiple selling channels. Our
                      in-house software takes all the stress off of having to
                      keep track of your inventory.
                    </p>
                    <h3>FEATURES</h3>
                    <div className="feature-step">
                      <span>1</span>
                      <h5>Live Inventory Updates</h5>
                    </div>
                    <div className="feature-step">
                      <span>2</span>
                      <h5>Manage and Transfer Inventory</h5>
                    </div>
                    <div className="feature-step">
                      <span>3</span>
                      <h5>Inventory Lifecycle (Coming soon)</h5>
                    </div>
                  </section>
                  <section>
                    <img src="./inventory.png" alt="" />
                  </section>
                </div>
              ) : (
                this
              )}
              {tab == "Inbound Shipments" ? (
                <div className="right-main">
                  <section className="content">
                    <h1>Inbound Shipments</h1>
                    <p>
                      Send us containers, pallets or individual cartons, and our
                      team will turn around all inbound shipments in less than 8
                      hours so you can simply start shipping your products the
                      day they arrive.
                    </p>
                    <h3>FEATURES</h3>
                    <div className="feature-step">
                      <span>1</span>
                      <h5>Same Day Receiving</h5>
                    </div>
                    <div className="feature-step">
                      <span>2</span>
                      <h5>
                        Retail Storage Network keeps your inventory closest to
                        your customers
                      </h5>
                    </div>
                  </section>
                  <section>
                    <img src="./inbound.png" alt="" />
                  </section>
                </div>
              ) : (
                this
              )}
              {tab == "FBA Requests" ? (
                <div className="right-main">
                  <section className="content">
                    <h1>FBA Requests</h1>
                    <p>
                      Keeping up with inventory restrictions from Amazon can be
                      tedious. Whether it’s an FBA prep or replenishment
                      request, we will take care of it within 1 business day.
                      Simply upload your labels to our software and we will take
                      it from there.
                    </p>
                    <h3>FEATURES</h3>
                    <div className="feature-step">
                      <span>1</span>
                      <h5>Same Day Forwarding</h5>
                    </div>
                    <div className="feature-step">
                      <span>2</span>
                      <h5>Custom Work Orders for Bundles and more</h5>
                    </div>
                  </section>
                  <section>
                    <img src="./fba.png" alt="" />
                  </section>
                </div>
              ) : (
                this
              )}
            </div>
          </div>
        </>
      ) : (
        <Slider />
      )}
      <div className="integrations">
        <p>Our Integrations</p>
        <span>Librex offers unlimited selling integrations for all accounts via custom API’s to top ecommerce platforms. We can integrate them all!</span>
        <div className="main-integrarions">
          <div className="main-icon">
            <img src="./amazon.png" alt="" />
            <p>Amazon</p>
          </div>
          <div className="main-icon">
            <img src="./ebay.png" alt="" />
            <p>Ebay</p>
          </div>
          <div className="main-icon">
            <img src="./shopify.png" alt="" />
            <p>Shopify</p>
          </div>
          <div className="main-icon">
            <img src="./woocom.png" alt="" />
            <p>woocommerce</p>
          </div>
          <div className="main-icon">
            <img src="./wix.png" alt="" />
            <p>wix</p>
          </div>
          <div className="main-icon">
            <img src="./wallmart.png" alt="" />
            <p>walmart</p>
          </div>
        </div>
      </div>
      <div className="inquiry">
        <p>INQUIRE NOW</p>
        <section>
          <div className="main-image">
            <a href="">
              <img src="./chat.svg" alt="" />
              <h1>Live Chat</h1>
            </a>
          </div>
          <div className="main-image">
            <a href="">
              <img src="./notes.svg" alt="" />
              <h1>Get Started</h1>
            </a>
          </div>
          <div className="main-image">
            <a href="">
              <img src="./phone.svg" alt="" />
              <h1>Make A Call</h1>
            </a>
          </div>
        </section>
      </div>
      <Reviews />
      <div className="join-us">
        <div>
          <h1>Join the community of hundreds of sellers just like you.</h1>
          <span>
            GO FOR IT <i className="uil uil-angle-right"></i>
          </span>
        </div>
        <div>
          <img src="./community.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
