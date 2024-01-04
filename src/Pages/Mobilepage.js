import React from "react";

import { ReactComponent as Business } from "../Components/SvgImages/Business.svg";

import "../Pages/Mobilepage.css";

const Mobilepage = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 main">
            <div className="">
              <img
                src="https://i.ibb.co/sQ4GmFG/MBL.png"
                className="mobile"
                alt="mobile"
              />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="para-container">
              <h1 className="mobile-heading">Paws & Tails Bazaar:</h1>
              <p className="mobile-para">
                Elevate your pet's world with our store, where care meets
                quality. Discover a curated range of premium supplies, from
                nourishing food to delightful toys. Choose a haven where every
                purchases ensure your furry friends happiness and well-being
                nearby you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-line"></div>
      {/* Business card*/}
      {/* <div className="business"> 
        <div> 
          <Business className="business-img" /> 
        </div> 
        <div className="business-container"> 
          <h1 className="business-heading">Open For Business</h1> 
          <button onClick={scrollToContact} className="business-button"> 
            Contact Us 
          </button> 
        </div> 
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 business">
            <div>
              <Business className="business-img" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="business-container">
              <h1 className="business-heading">Open For Business</h1>
              <button onClick={scrollToContact} className="business-button">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mobilepage;
