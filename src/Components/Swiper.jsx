import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../Styles/Swiper.css";
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-intro">
            <h2>What Comes with our partnership!</h2>
            <i className="uil uil-arrow-right"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="right-main" style={{ flexDirection: "column" }}>
            <section className="content">
              <h1 style={{fontSize:'2.5rem'}}>Dashboard</h1>
              <p style={{ maxWidth: "80%", marginLeft: "10%" }}>
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
              <img
                src="./dashboard.png"
                alt=""
                style={{
                  width: "300px",
                  marginLeft: "10%",
                  height: "200px",
                }}
              />
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="right-main" style={{ flexDirection: "column" }}>
            <section className="content">
              <h1 style={{fontSize:'2.5rem'}}>Orders</h1>
              <p style={{ maxWidth: "80%", marginLeft: "10%" }}>
                Our support team works around the clock to ensure that all of
                your orders are being processed in real time. Our Eastern
                Fulfillment Go Dashboard supports seamless integrations with
                unlimited selling channels.
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
              <img
                src="./orders.png"
                alt=""
                style={{
                  maxWidth: "80%",
                  marginLeft: "10%",
                  maxHeight: "320px",
                }}
              />
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="right-main" style={{ flexDirection: "column" }}>
            <section className="content">
              <h1 style={{fontSize:'2.5rem'}}>Inventory</h1>
              <p style={{ maxWidth: "80%", marginLeft: "10%" }}>
                Managing inventory can become really frustrating especially when
                you have multiple selling channels. Our in-house software takes
                all the stress off of having to keep track of your inventory.
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
              <img
                src="./inventory.png"
                alt=""
                style={{
                  maxWidth: "80%",
                  marginLeft: "10%",
                  maxHeight: "320px",
                }}
              />
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="right-main" style={{ flexDirection: "column" }}>
            <section className="content">
              <h1 style={{fontSize:'2.5rem'}}>Inbound Shipments</h1>
              <p style={{ maxWidth: "80%", marginLeft: "10%" }}>
                Send us containers, pallets or individual cartons, and our team
                will turn around all inbound shipments in less than 8 hours so
                you can simply start shipping your products the day they arrive.
              </p>
              <h3>FEATURES</h3>
              <div className="feature-step">
                <span>1</span>
                <h5>Same Day Receiving</h5>
              </div>
              <div className="feature-step">
                <span>2</span>
                <h5>Retail Storage Network</h5>
              </div>
            </section>
            <section>
              <img
                src="./inbound.png"
                alt=""
                style={{
                  maxWidth: "80%",
                  marginLeft: "10%",
                  maxHeight: "320px",
                }}
              />
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="right-main" style={{ flexDirection: "column" }}>
            <section className="content">
              <h1 style={{fontSize:'2.5rem'}}>FBA Requests</h1>
              <p style={{ maxWidth: "80%", marginLeft: "10%" }}>
                Keeping up with inventory restrictions from Amazon can be
                tedious. Whether it’s an FBA prep or replenishment request, we
                will take care of it within 1 business day. Simply upload your
                labels to our software and we will take it from there.
              </p>
              <h3>FEATURES</h3>
              <div className="feature-step">
                <span>1</span>
                <h5>Same Day Forwarding</h5>
              </div>
              <div className="feature-step">
                <span>2</span>
                <h5>Custom Work Orders for Bundles</h5>
              </div>
            </section>
            <section>
              <img
                src="./fba.png"
                alt=""
                style={{
                  maxWidth: "80%",
                  marginLeft: "10%",
                  maxHeight: "320px",
                }}
              />
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
