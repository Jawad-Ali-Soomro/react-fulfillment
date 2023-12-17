import React from "react";
import Header from "../Components/Desktop";
import "../Styles/Fulfillment.css";

const Fulfillment = () => {
  return (
    <div className="fullfilment">
      <Header />
      <div className="hero-top flex col">
        <h1>eCommerce Fulfillment in Three Easy steps</h1>
        <span className="quote flex">
          GET A QUOTE <i className="uil uil-angle-right"></i>
        </span>
        <div className="bottom flex">
          <div className="left-sect flex col">
            <p>HOW IT HAPPENS</p>
            <span>Hover over each section to see the step in action!</span>
            <div className="wrap-content flex">
              <div className="numbering">1</div>
              <div className="number-content">
                <h2>Receive</h2>
                <p>Your products arrive at a Eastern Fulfillment warehouse</p>
              </div>
            </div>
            <div className="wrap-content flex">
              <div className="numbering flex">2</div>
              <div className="number-content">
                <h2>Store</h2>
                <p>
                  Eastern Fulfillment stores your items in our temperature
                  controlled facilities
                </p>
              </div>
            </div>
            <div className="wrap-content flex">
              <div className="numbering">3</div>
              <div className="number-content">
                <h2>Ship</h2>
                <p>
                  Eastern Fulfillment packs and ships your orders the same day
                  they're received
                </p>
              </div>
            </div>
          </div>
          <div className="right-sect flex">
            <img src="./fulfill.png" alt="" />
          </div>
        </div>
      </div>
      <div className="fees">
        <div className="top-sect flex col">
          <h1>
            There's <span>no hidden fees.</span>
          </h1>
          <p>
            We are very transparent about our pricing so we will never surprise
            you with extra charges. We keep it simple with one payment for each
            of the three steps:
          </p>
        </div>
        <div className="bottom-sect flex">
          <div className="flex col">
            <h2>Receiving</h2>
            <p>
              When your items first arrive at our warehouse, we go by a 10 point
              checklist to make sure your items arrive as expected. 95% of
              customers take less than 2 hours to offload their items into our
              warehouse.
            </p>
          </div>
          <div className="flex col">
            <h2>Storage</h2>
            <p>
              Storage is charged monthly. Each SKU is stored separately from one
              another so they can be accurately picked & packed by our warehouse
              team.
            </p>
          </div>
          <div className="flex col">
            <h2>Shipping</h2>
            <p>
              Eastern Fulfillment offers flat rate shipping up to 10lbs which
              takes away the complexities of zone-wise shipping. Eastern
              Fulfillment ships domestically and internationally to all 195
              countries.
            </p>
          </div>
        </div>
      </div>
      <div className="easy-step flex">
        <div className="left-sect">
          <img src="./step.png" alt="" />
        </div>
        <div className="right-sect flex col">
          <h2>Easy Setup</h2>
          <p>
            Our in-house software enables you to set up your selling channel in
            5 minutes or less. This software enables all of your orders to be
            shipped out automatically.
          </p>
        </div>
      </div>
      <div className="easy-step flex">
        <div className="right-sect flex col">
          <h2>Retail Distribution Power</h2>
          <p>
            Librex’s warehouse network allows you to store your products closest
            to your customers, enabling short transit times.
          </p>
        </div>
        <div className="left-sect">
          <img src="./distribute.png" alt="" />
        </div>
      </div>
      <div className="easy-step flex">
        <div className="left-sect">
          <img src="./shipping.png" alt="" className="small" />
        </div>
        <div className="right-sect flex col">
          <h2>2-Day Discounted Shipping</h2>
          <p>
            All Librex customers can take advantage of our expedited shipping
            contracts. Reach your customer in 2-3 days—with no slow or delayed
            shipments.
          </p>
        </div>
      </div>
      <div className="easy-step flex">
        <div className="right-sect flex col">
          <h2>2-Day Discounted Shipping</h2>
          <p>
            All Librex customers can take advantage of our expedited shipping
            contracts. Reach your customer in 2-3 days—with no slow or delayed
            shipments.
          </p>
        </div>
        <div className="left-sect">
          <img src="./inventory-manage.png" alt="" className="small" />
        </div>
      </div>
    </div>
  );
};

export default Fulfillment;
