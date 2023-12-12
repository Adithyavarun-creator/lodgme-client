import React, { useState } from "react";
import { SinginPageStyles } from "./SinginPageStyles";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  signInFailure,
  signInSuccess,
  signInStart,
} from "../../redux/user/userSlice";
import { baseUrl, loginUser } from "../../baseUrl/url";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginForm = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email not filled");
    }

    if (!password) {
      toast.error("Password not filled");
    }

    try {
      dispatch(signInStart());
      const res = await fetch(`${baseUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      toast.success("We are signing you in ! Welcome back");
      setTimeout(() => {
        navigate("/dashboard-user");
      }, 2500);
    } catch (error) {
      dispatch(signInFailure(error.message));
      console.log(error);
    }

    //console.log(data);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Login | LodgeMe</title>
        </Helmet>
        <SinginPageStyles>
          <div>
            <h1>LodgeMe Customer Login/Signin Page</h1>
          </div>
          <div className="formbox">
            <form>
              <div className="formlabel">
                <label className="labeltext" htmlFor="email">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div className="formlabel">
                <label className="labeltext" htmlFor="password">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </form>
            <div className="btnbox">
              <button
                className="register-btn"
                type="submit"
                onClick={loginForm}
              >
                Log In
              </button>
            </div>
            <div className="btnbox">
              <Link to="/forgot-password" className="linkStyle forgot-pswd">
                Forgot Password ? Reset Now{" "}
              </Link>
            </div>
            <div className="btnbox">
              <Link to="/register-user-in" className="linkStyle forgot-pswd">
                Sign up here to create an account
              </Link>
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </SinginPageStyles>
      </HelmetProvider>
    </>
  );
};

export default SigninPage;
