import React from "react";

const ContactUs = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="container" id="contact">
        <div className="row top-contact">
          <div className="left-top-contact col-xs-12 col-md-6">
            {" "}
            <h3>Want To Connect with Us ?</h3>
            <p>
              We're actively working on our launch, and we're constantly
              available for a chat. Do you have any feedback to share? Are there
              specific features you'd like to see? Interested in collaborating
              with us? No matter the reason, don't hesitate to drop us a quick
              message, and we'll be sure to respond promptly.
            </p>
          </div>
          <div className=" col-xs-12 col-md-6">
            <input
              type="text"
              placeholder="Full Name"
              className="fullname-mail"
            />
            <input type="text" placeholder="Mail" className="fullname-mail" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="message"
            ></textarea>
            <center>
              <button className="btn btn-primary send-button">Send</button>
            </center>
          </div>

          <div className="bottom-contact ">
            <center>
              <p>
                Copyright One Love 2022, All Rights Reserved <br /> Chicago, IL
              </p>
              <p
                onClick={scrollToContact}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "blue",
                }}
              >
                Contact Us
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// *********************************************************************************************
