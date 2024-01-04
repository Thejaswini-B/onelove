import React from "react";

import ContactUs from "./ContactUs";
import Landingpage from "./Landingpage";
import Mobilepage from "./Mobilepage";
import Dog from "./Dog";
import AboutPage from "./AboutPage";

// import { ReactComponent as Sample } from "../Components/SvgImage/Sample.svg";
const Home = () => {
  // const scrollToContact = () => {
  //   const contactSection = document.getElementById("contact");
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div>
      <div>
        <Landingpage />
      </div>
      <div className="main-line"></div>
      <AboutPage />
      <div className="main-line"></div>
      <Mobilepage /> <div className="main-line"></div>
      {/* Conatct us button   here */}
      {/* <div className="d-flex flex-row">
        <div className="col-6" style={{ paddingLeft: 100 }}>
          <Business />
        </div>
        <div className="col-6">
          <center style={{ paddingTop: 200 }}>
            <h3>Open For Business</h3>
             <button className="btn btn-primary" onClick={scrollToContact}>
              Contact Us
            </button> 
          </center>
        </div>
      </div> */}
      <Dog /> <div className="main-line"></div>
      <ContactUs />
    </div>
  );
};

export default Home;
