import axios from "axios";
import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ForgotPasswordStyles } from "./ForgotPasswordStyles";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = ({ page, setPage }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const [error, setError] = useState("");

  //adivarun01@gmail.com
  //Adivarun2023
  //etww aoyi ygup vlsr

  const submitEmail = async () => {
    if (!email || email === "") {
      alert("Please enter your email");
      setMessage(false);
    }
    try {
      setTimeout(() => {
        toast.success(
          "Please click on to the link in your email to reset your password"
        );
        setMessage(true);
      }, 1500);

      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/forgot-password`,
        {
          email,
        }
      );
    } catch (error) {
      // console.log(error.response.data.message);
      //alert(`${error.response.data.message}`);
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Forgot Password | LodgeMe</title>
        </Helmet>
        <ForgotPasswordStyles>
          <div>
            <h1>Enter your email address</h1>
          </div>
          <div>
            <input
              className="emailInput"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div>
            <button
              disabled={!email}
              className="forgotpswd-btn"
              onClick={submitEmail}
            >
              Submit
            </button>
          </div>

          {message && (
            <div>
              <span>
                A link has been sent to your email to reset the passsword
              </span>
            </div>
          )}
          <Toaster position="top-center" reverseOrder={false} />
        </ForgotPasswordStyles>
      </HelmetProvider>
    </>
  );
};

export default ForgotPassword;
