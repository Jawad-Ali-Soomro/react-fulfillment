import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/Reviews.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Reviews() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./avatar.png" alt="" />
          <h1>John Tran</h1>
          <p>Jan 11, 2021</p>
          <h2>Affordable & Convenient</h2>
          <p>
            I definitely recommend this 3PL company if you are looking to find a
            warehouse to store your products in safe hands. These guys go above
            and beyond to help their clients with their needs and will guide you
            every step of the way. They also have a website that makes it super
            easy to replenish your inventory (super simple steps btw). 100%
            recommend
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./avatar.png" alt="" />
          <h1>Michael Jordan</h1>
          <p>Dec 28, 2020</p>
          <h2>The best 3PL I've used</h2>
          <p>
            Eastern Fulfillment has been a savior for my business. With the boom in online
            sales this year that put a massive strain on the logistics industry,
            I was having severe problems with my previous 3PL provider. I
            switched to Eastern Fulfillment and they simply do what they say they will, on
            time and correctly. Thanks guys!
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./avatar.png" alt="" />
          <h1>Anthony Dickson</h1>
          <p>Dec 21, 2020</p>
          <h2>Eastern Fulfillment is Leading the Way</h2>
          <p>
            Eastern Fulfillment has manage our fulfilment services for the last several
            months. We had to find an alternate due to under performance of our
            previous vendor. They have been excellent with their responsiveness,
            communication, and level of service. I can't say enough about their
            attention to detail and suggestions to improve our operations.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./avatar.png" alt="" />
          <h1>Rochak G</h1>
          <p>Dec 16, 2020</p>
          <h2>Great to work with.</h2>
          <p>
          Been with Eastern Fulfillment for over a year now. Good prices and great support team. Small issues sometimes here and there but It would be unrealistic to expect 100% flawlessness. How Eastern Fulfillment makes up for it is by having a fast and responsive customer support team that are always there for you. They rectify the situations swiftly to the best of there abilities.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
