import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OnlySpinner from "../components/OnlySpinner/OnlySpinner";
import toast from "react-hot-toast";
import { baseUrl } from "../baseUrl/url";
import { useSelector } from "react-redux";

const OTPPage = () => {
  const { currentUser, token } = useSelector((state) => state.user);

  const [value, setValue] = useState();
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, value, recaptcha);
      setUser(confirmation);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(currentUser);

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      setResults(data.user);
      const res = await fetch(`${baseUrl}/api/user-phone/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mobileVerified: currentUser?.mobileVerified }),
      });
      const response = await res.json();
      console.log(response);
      toast.success("Phone number verified");
    } catch (error) {
      console.log(error);
      toast.error("Issue in verifying your phone number");
    }
  };

  //   useEffect(() => {
  //     console.log(results.providerId);
  //   }, []);

  return (
    <div>
      <div>
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
      </div>
      <div>
        <button onClick={sendOtp}>Send OTP</button>
      </div>
      <div id="recaptcha"></div>
      <div>
        <input
          onChange={(e) => setOtp(e.target.value)}
          type="number"
          name="VerifyOTP"
        />
      </div>
      <div>
        <button onClick={verifyOtp}>Verify OTP</button>
      </div>
      {results.providerId && <OnlySpinner /> &&
      results.providerId === "firebase" ? (
        <span>You are verified with mobile number</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default OTPPage;
