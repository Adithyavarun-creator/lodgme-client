import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OnlySpinner from "../../components/OnlySpinner/OnlySpinner";
import { baseUrl } from "../../baseUrl/url";
import { useDispatch, useSelector } from "react-redux";
import { OTPPageStyles } from "./OTPPageStyle";
import Button from "../../components/Button/Button";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import {
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from "../../redux/user/userSlice";

import { useNavigate } from "react-router-dom";

const OTPPage = () => {
  const { currentUser, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [value, setValue] = useState();
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);
  const [send, setSend] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async () => {
    if (!value) {
      toast.error("Please enter your phone number");
      return;
    }
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, value, recaptcha);
      setUser(confirmation);
      setSend(true);
    } catch (error) {
      toast.error(error.message);
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
      toast.success(
        "Phone number verified , please sign in back wih your credentials"
      );
      logoutUser();
    } catch (error) {
      console.log(error);
      toast.error("Issue in verifying your phone number");
    }
  };

  const logoutUser = async () => {
    try {
      dispatch(signOutUserStart());
      axios.defaults.withCredentials = true;
      const { data } = await axios.get(`${baseUrl}/api/signout`);
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(signOutUserFailure(error.message));
    }
  };
  return (
    <OTPPageStyles>
      <div>
        <h2>Verify your Mobile number</h2>
      </div>
      <div>
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
      </div>
      <div>
        <Button onClick={sendOtp} title="Send OTP" />
      </div>
      <div id="recaptcha"></div>
      {send && (
        <>
          <div>
            <input
              onChange={(e) => setOtp(e.target.value)}
              type="tel"
              name="VerifyOTP"
              className="otpinput"
            />
          </div>
          <div>
            <Button title="Verify OTP" onClick={verifyOtp} />
          </div>
        </>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </OTPPageStyles>
  );
};

export default OTPPage;
