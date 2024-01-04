import React, { useState } from "react";
import Button from "../Components/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const ForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSentText, setOtpSentText] = useState("");
  const [otpsent, setOtpSent] = useState("");
  const [user, setUser] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);
  const [verifiedText, setVerifiedText] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

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
        setOtpSentText(
          `Verification code Sent to your registered phone number ${phoneNumber}`
        );
      } catch (err) {
        console.log("Error in Sending Code is", err);
      }
    } else {
      alert("Enter phone number");
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Check if passwords match when the confirm password field changes
    setPasswordsMatch(e.target.value === password);
  };

  const handleOtpVerification = async () => {
    if (otpsent !== "") {
      try {
        const data = await user.confirm(otpsent);
        console.log(data);
        alert("OTP verified");
        console.log("Otp verified successfully");
        setOtpVerified(true);
        setVerifiedText(
          "OTP Verified successfully, U can change your password now"
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Enter otp");
    }

    // console.log("Otp verified successfully");
    // setOtpVerified(true);
    // setVerifiedText(
    //   "OTP Verified successfully, U can change your password now"
    // );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordsMatch) {
      console.log("Form submitted successfully! , password is", password);
    } else {
      console.error("Passwords do not match!");
    }
  };

  return (
    <div>
      <div className="login-text" style={{ padding: 110 }}>
        <p>{otpSentText}</p>
        <PhoneInput
          placeholder="Enter phone number"
          country={"in"}
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
        <Button text="Send code" onClick={sendOTP} />
        <div id="recaptcha"></div>

        {otpVerified ? (
          <>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  required
                  style={{ marginTop: 15 }}
                  placeholder="Enter new password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div>
                <input
                  required
                  style={{ marginTop: 15 }}
                  placeholder="Confirm New password"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              {!passwordsMatch && <p>Passwords do not match!</p>}
              <button
                style={{ marginTop: 15 }}
                className="btn btn-secondary"
                type="submit"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <>
            <p>{verifiedText}</p>
            <input
              type="text"
              placeholder="Enter code"
              onChange={(e) => setOtpSent(e.target.value)}
            />{" "}
            <br />
            <button
              className="btn btn-primary"
              onClick={handleOtpVerification}
              style={{ marginTop: 15 }}
            >
              Verify Code
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

// ***************************************************************************8
