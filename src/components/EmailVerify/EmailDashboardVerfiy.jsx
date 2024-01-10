import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../baseUrl/url";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import { EmailVerifydashboardStyle } from "./EmailDashboardVerifyStyle";
import axios from "axios";
import {
  signOutUserFailure,
  signOutUserSuccess,
  signOutUserStart,
} from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const EmailDashboardVerfiy = () => {
  const [email, setEmail] = useState("");
  const { currentUser, token } = useSelector((state) => state.user);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onVerify = async () => {
    try {
      setSuccess(true);
      const res = await fetch(
        `${baseUrl}/api/email-verify/${currentUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      const data = await res.json();
      toast.success(`${data} and login with your credentials`);
      setTimeout(() => {
        logoutUser();
      }, 1800);
      setSuccess(false);
    } catch (error) {
      toast.error(
        "Try logging in with some other email or contact customer support"
      );
    }
  };

  return (
    <>
      <EmailVerifydashboardStyle>
        <div>
          <h2>Lodgeme Email Address Verification</h2>
        </div>
        <div>
          <input
            type="email"
            required
            value={email}
            placeholder="jake@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Button title="Verify Email address" onClick={onVerify} />
        </div>
        {success && (
          <div>
            <Button title="Please check your email and verify with the link provided" />
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </EmailVerifydashboardStyle>
    </>
  );
};

export default EmailDashboardVerfiy;
