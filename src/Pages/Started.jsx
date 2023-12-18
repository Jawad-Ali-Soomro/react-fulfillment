import React from "react";
import Header from "../Components/Desktop";
import "../Styles/Started.css";
const SubSectionItems = ({ source, children }) => (
  <div className="item">
    <img src={source} alt="svg" />
    {children}
  </div>
);
const Accord = ({ id, label, content }) => (
  <div className="accord">
    <input type="checkbox" name="checkbox" id={id} />
    <label htmlFor={id}>{label}</label>
    <div className="hide">{content}</div>
  </div>
);

const Started = () => {
  let data = [
    {
      source: `./media/discountedShipment.svg`,
      children: (
        <div>
          Discounted <span className="blue">2-day </span> shipping
        </div>
      ),
    },
    {
      source: `./media/noPickBackFee.svg`,
      children: (
        <div>
          <span className="blue">No</span> pick pack fees or extra charges{" "}
        </div>
      ),
    },
    {
      source: `./media/deductive.svg`,
      children: (
        <div>
          <span className="blue">Dedicated</span> customer support specialist{" "}
        </div>
      ),
    },
    {
      source: `./media/unlimitedIntigration.svg`,
      children: (
        <div>
          <span className="blue">Unlimited</span> selling channel integrations
        </div>
      ),
    },
    {
      source: `./media/specialProject.svg`,
      children: <div>Special projects to take care of any inventory needs</div>,
    },
    {
      source: `./media/ritalFulfilment.svg`,
      children: (
        <div>
          Retail Fulfillment <span className="blue">network</span> capabilities
        </div>
      ),
    },
    {
      source: `./media/noMinimumOrder.svg`,
      children: (
        <div>
          <span className="blue">No </span> minimum order quantities
        </div>
      ),
    },
    {
      source: `./media/customer-packing.svg`,
      children: (
        <div>
          <span className="blue">Customer </span>packing options
        </div>
      ),
    },
    {
      source: `./media/flexibleOption.svg`,
      children: (
        <div>
          Flexible options for
          <span className="blue">all businesses</span>
        </div>
      ),
    },
    {
      source: `./media/inventoryManagement.svg`,
      children: (
        <div>
          <span className="blue">Free </span> Free inventory management software
        </div>
      ),
    },
  ];
  let accordData = [
    {
      id: `c1`,
      label: `What does a fulfillment center do?`,
      content: `A fulfillment center takes care of all your warehousing and shipping needs. Fulfillment partners save their clients time and money so they can focus on their core business.`,
    },
    {
      id: `c2`,
      label: `Does Librex Ship outside of the United States?`,
      content: `Yes, Librex ships orders to all countries. Gain advantage of discounted rates from our international shipping partners to get you the cheapest and quickest delivery.`,
    },
    {
      id: `c3`,
      label: `What does a fulfillment center do?`,
      content: `Yes, Librex lets the customer choose how their product gets packaged. Pick from any of our free packaging options or select your own. We can even design and print your items!`,
    },
    {
      id: `c4`,
      label: `How much does packaging cost?`,
      content: `All packing is FREE! At Librex, standard packaging comes included with fulfillment services.`,
    },
    {
      id: `c5`,
      label: `Does Librex offer FBA prep services?`,
      content: `Yes, Librex has FBA-trained staff preparing your orders. Our accuracy ensures your product will arrive at Amazon warehouses in compliance with their standards.`,
    },
    {
      id: `c6`,
      label: `Can I do Seller Fulfilled Prime?`,
      content: `Librex allows sellers to have Prime listed items without all of the extra fees. Reach all of your clients with standard 2-day shipping.`,
    },
    {
      id: `c7`,
      label: `How can I get a quote?`,
      content: `Complete our form then we will get back to you in 4 hours or less. Want to skip the hassle of email? Call, Text, or WhatsApp us.`,
    },
    {
      id: `c8`,
      label: `How does Librex do its shipping?`,
      content: `Librex receives orders in real-time, then picks, packs and ships the same day. Librex has many shipping partners for International and domestic shipping. Our software compares rates from all shipping carriers to ensure our customers get the fastest shipping options.`,
    },
    {
      id: `c9`,
      label: `How can I view my account activity?`,
      content: `Librex has an online portal where sellers can view their shipments. Accounts get updated in real-time to ensure integrations are always up to date.`,
    },
    {
      id: `c10`,
      label: `
What happens when I get an order?`,
      content: `Orders get pulled into Librex's shipping software in real-time. From here, our warehouse team can view your orders and fulfill them. All orders received before 3 PM EST get pick packed and shipped the same day.`,
    },
    {
      id: `c11`,
      label: `How does customer service work?`,
      content: `Each customer is assigned 2 dedicated customer service representatives. One representative is available for all your general questions software support, and another is dedicated to warehouse and inventory needs. This allows customers to get fast direct answers when they need them.`,
    },
    {
      id: `c12`,
      label: `When should I use a third-party fulfillment partner?`,
      content: `Third-party fulfillment is Ideal for growing businesses and International sellers. Anyone who needs to scale infinitely, save on shipping costs and time needs an experienced fulfillment partner.`,
    },
    {
      id: `c13`,
      label: `What happens when there is an order error?`,
      content: `Librex has 99.999% order fulfillment accuracy. If an error occurs during the fulfillment process, Librex will cover the full cost of fulfillment.`,
    },
    {
      id: `c14`,
      label: `What if I have an issue with my account?`,
      content: `Your dedicated service representative is available to answer all your questions over email, phone call, text, and even Whatsapp!`,
    },
    {
      id: `c15`,
      label: `What is the average order turn around?`,
      content: `We ship all orders the same day if received before 12:30 PM. Amazon prep turn around is 36 hours.`,
    },
    {
      id: `c16`,
      label: `How can I reach Librex directly?`,
      content: `Librex can be reached via , email, text message, or WhatsApp. Our staff works around the clock to answer your inquiries. The average response time is under 2 hours!`,
    },
  ];

  return (
    <div className="started-main">
      <Header />
      <div className="section-1">
        <div className="sub-section-1">
          <div className="gray-text">WHAT'S INCLUDED</div>
          <div className="items">
            {data.map(({ source, children }, index) => {
              return (
                <SubSectionItems key={index} source={source}>
                  {children}
                </SubSectionItems>
              );
            })}
          </div>
        </div>
        <div className="sub-section-2">
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
      <div className="section-2">
        <h1>Want to Skip the hassle of email</h1>
        <div>
          <button className="purple sub-2-btn">
            Shedule a Free Phone Cale Now
          </button>
          <button className="blue sub-2-btn">
            Connect with us on Whatsapp
          </button>
        </div>
      </div>
      <div className="section-3">
        <h1>FAQ</h1>
        <div className="accordion">
          {accordData.map(({ id, label, content }, index) => {
            return (
              <Accord key={index} id={id} label={label} content={content} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Started;
