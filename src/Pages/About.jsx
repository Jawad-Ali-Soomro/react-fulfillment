import React from "react";
import Header from "../Components/Desktop";
import "../Styles/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-black">
      <Header />
      <div className="about-main">
        <div className="section-1">
          <div className="sub-section-1">
            <h1>Why grow with Librex?</h1>
            <div className="content">
              Librex brings the capabilities of retail fulfillment to every
              eCommerce seller
            </div>
            <Link to="/">{`GO FOR IT >`}</Link>
          </div>
          <div className="sub-section-2">
            <div className="icon">
              <img src="./main/customer.svg" alt="svg" />
              <div className="icon-content">
                <h1>800+</h1>
                <p>Customers</p>
              </div>
            </div>
            <div className="icon">
              <img src="./main/transaction.svg" alt="svg" />
              <div className="icon-content">
                <h1>$180M+</h1>
                <p>Value Shipped 2020</p>
              </div>
            </div>
            <div className="icon">
              <img src="./main/sale-increase.svg" alt="svg" />
              <div className="icon-content">
                <h1>32%</h1>
                <p>Average Customer YOY Growth</p>
              </div>
            </div>
            <div className="icon">
              <img src="./main/2hrs.svg" alt="svg" />
              <div className="icon-content">
                <h1>2.5hr</h1>
                <p>Response Time</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2">
          <h1>OUR STORY</h1>
          <div className="detail">
            <div>
              Founded in 2016, Librex has always stuck by the principle that
              delivering your product should be simple and inexpensive. Retail
              giants setting customer expectations for 1-2 day shipping has made
              this goal increasingly difficult to achieve.
            </div>
            <div>
              Librex accomplishes simplicity through a 3 step pricing structure,
              custom software providing improved order insight, and world-class
              US-based 24/7 customer service.
            </div>
          </div>
        </div>
        <div className="section-3">
          <div className="sub-section-1">
            <div className="time-stemp">
              <img src="./main/living-groom.svg" alt="living-groom.svg" />
              <div>
                <h2>2016</h2>
                <p>Packing items on the livingroom floor</p>
                <img src="./main/line-1.svg" alt="line-1.svg" />
              </div>
            </div>
            <div className="time-stemp">
              <img src="./main/inc.svg" alt="inc.svg" />
              <div>
                <h2>2016</h2>
                <p>Packing items on the livingroom floor</p>
              </div>
            </div>
            <div className="time-stemp">
              <img src="./main/line-2.svg" alt="line-5.svg" />
            </div>
          </div>
          <div className="sub-section-2">
            <div className="time-stemp">
              <img
                src="./main/mult-small-warehouses.svg"
                alt="mult-small-warehouses.svg"
              />
              <div>
                <h2>Early 2018</h2>
                <p>Started using multiple small warehouses in Illinois</p>
              </div>
            </div>
            <div className="time-stemp">
              <img src="./main/line-3.svg" alt="line-3.svg" />
            </div>
            <div className="time-stemp">
              <img src="./main/small-warehouse.svg" alt="inc.svg" />
              <div>
                <h2>Mid 2017 </h2>
                <p>Started using a small warehouse in Fredrick, Maryland</p>
              </div>
            </div>
          </div>
          <div className="sub-section-3">
            <div className="time-stemp">
              <img src="./main/line-4.svg" alt="line-4.svg" />
            </div>
            <div className="time-stemp">
              <img src="./main/small-warehouse.svg" alt="inc.svg" />
              <div>
                <h2>Late 2018 </h2>
                <p> Launched our portal software services</p>
              </div>
            </div>
            <div className="time-stemp">
              <img src="./main/line-5.svg" alt="line-5.svg" />
            </div>
          </div>
          <div className="sub-section-4">
            <div>
              <h2>HOW WE GREW</h2>
              <div>
                <div>
                  Our story begins by helping friends and family overseas from
                  our living room. On a daily basis we would pack all their
                  orders and drive them down to our local post office.
                </div>
                <div>
                  It didn't take long for word of our services to spread and our
                  operation to out grow the living room. We needed help so we
                  turned to the internet in search for reliable fulfillment
                  partners. Our research left us empty handed and feeling
                  uncomfortable with the options in the market. This is when we
                  decided that e-commerce companies need a simple seamless
                  extension to scale the physical aspects of their business.
                </div>
                <div>
                  Our first expansion was to a storage facility close to home.
                  We quickly took up all of the large storage units and were
                  forced to expand again. This time we moved into our first
                  warehouse located in Frederick, Maryland. Shortly after Librex
                  added a second warehouse in Chicago, Illinois to handle bulk
                  LTL services.
                </div>
                <div>
                  After building our warehouse network it was time for Librex to
                  refine our customer experience. Increasing transparency in our
                  operations was the first step, which is why we launched our
                  cloud-based portal service Librex GO. With Librex GO our
                  clients gain full control over their products stored in our
                  warehouse and increased visibility into our day-to-day
                  operations.
                </div>
                <div>
                  From day one Librex has believed in transparent pricing and a
                  simple fulfillment process. Schedule a phone call with us
                  today to learn how you can become a part of the Librex family.
                </div>
              </div>
            </div>
            <div className="time-stemp">
              <img src="./main/big-warehouse.svg" alt="big-warehouse.svg" />
              <div>
                <h2>Mid 2017 </h2>
                <p>Started using a small warehouse in Fredrick, Maryland</p>
              </div>
            </div>
          </div>
          {/* <div className="sub-section-2">
            <div className="time-stemp">
              <img src="./main/inc.svg" alt="inc.svg" />
              <div>
                <h2>2016</h2>
                <p>Packing items on the livingroom floor</p>
                <img src="./main/line-2.svg" alt="line-2.svg" />
              </div>
            </div>
            <div className="time-stemp">
              <img src="./main/inc.svg" alt="inc.svg" />
              <div>
                <h2>2016</h2>
                <p>Packing items on the livingroom floor</p>
                <img src="./main/line-2.svg" alt="line-2.svg" />
              </div>
            </div>
            <div className="time-stemp">
              <img src="./main/inc.svg" alt="inc.svg" />
              <div>
                <h2>2016</h2>
                <p>Packing items on the livingroom floor</p>
                <img src="./main/line-2.svg" alt="line-2.svg" />
              </div>
            </div>
          </div> */}
        </div>
        <div className="section-4">
          <h3>OUR LOCATIONS</h3>
          <img src="./main/location-map.svg" alt="location-map.svg" />
        </div>
        <div className="section-5">
          <div>
            <div>Get Started Today</div>
            <div>
              Get connected with a dedicated customer support representative to
              answer all of your questions and create your custom fulfillment
              quote.
            </div>
            <button className="purple">Shedule a Free Phone Call Now</button>
          </div>
          <div>
            <span>OR</span>
          </div>
          <form className="form-style">
            <div className="row-1">
              <img src="./media/customer-icon.svg" alt="" />
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
              />
            </div>
            <div className="row-2">
              <img src="./media/email-icon.svg" alt="" />
              <input type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className="row-3">
              <img src="./media/phone-icon.svg" alt="" />
              <input
                type="text"
                name="countryCode"
                id="countryCode"
                placeholder="Country Code"
              />
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
              />
            </div>
            <button className="blue">Connect with a representative</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
