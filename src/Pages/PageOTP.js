import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "../Components/Button";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const PageOTP = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState(null);
  const [otpsent, setOtpSent] = useState("");
  const [otp, setOtp] = useState("");

  const handlePhoneChange = (value) => {
    setPhoneNumber("+" + value);
  };

  const sendOTP = async () => {
    console.log(phoneNumber);

    if (phoneNumber !== "") {
      try {
        const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
        console.log("recaptcha sent");
        const confirmation = await signInWithPhoneNumber(
          auth,
          phoneNumber,
          recaptcha
        );

        setUser(confirmation);
        console.log(confirmation);
        setOtpSent(`OTP Sent to your registered phone number ${phoneNumber}`);
      } catch (err) {
        console.log("Error in Sending OTP is", err);
      }
    } else {
      alert("Enter phone number");
    }
  };

  const resendOTP = async () => {
    console.log(phoneNumber);

    if (phoneNumber !== "") {
      try {
        const recaptcha = new RecaptchaVerifier(auth, "recaptcharesend", {});
        console.log("Recaptcha resent");
        const confirmation = await signInWithPhoneNumber(
          auth,
          phoneNumber,
          recaptcha
        );

        setUser(confirmation);
        setOtpSent(`OTP resent to  registered phone number ${phoneNumber}`);

        console.log("OTP resent successfully");
      } catch (err) {
        console.log("Error in resending OTP is", err);
      }
    } else {
      alert("Enter phone number");
    }
  };

  const verifyOtp = async () => {
    if (otp !== "") {
      try {
        const data = await user.confirm(otp);
        console.log(data);
        alert("OTP verified");
        console.log("Otp verified successfully");
        navigate("/home");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Enter otp");
    }
  };

  return (
    <div>
      <div>
        <p>{otpsent}</p>
        <div style={{ padding: 110 }}>
          <PhoneInput
            placeholder="Enter phone number"
            country={"in"}
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
          <Button onClick={sendOTP} text="Send OTP" />
          <div id="recaptcha"></div>
          <div id="recaptcharesend"></div>
          <input
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
          <br />
          <button
            className="btn btn-primary"
            onClick={verifyOtp}
            style={{ marginTop: 15 }}
          >
            Verify OTP
          </button>
          <button
            className="btn btn-secondary"
            style={{ marginTop: 15, marginLeft: 10 }}
            onClick={resendOTP}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageOTP;
