import React from "react";
// import { ReactComponent as Cherry } from "../Components/SvgImages/Cherry.svg";
import "../Pages/Dog.css";

const dog = () => {
  return (
    <div>
      <div className="container background">
        <div>
          <div>
            <center>
              <h1 className="dog-heading">Simplify Pet Care Coordination</h1>

              <p className="dog-para">
                Streamline Pet Care Communication and Tracking
              </p>
            </center>
          </div>
          <div className="download-container">
            <button className="download-1">Download on IOS</button>
            <button className="download-2">Download on Android</button>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/Ssqk7rB/dog-1.png"
            className="dog"
            alt="puppy"
          />
        </div>
      </div>
    </div>
  );
};

export default dog;
