import React, { useState } from "react";
import { SinginPageStyles } from "./SinginPageStyles";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";
import { loginUser } from "../../baseUrl/url";

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
      const res = await loginUser({
        email,
        password,
      });
      //console.log(res.data);
      dispatch(signInSuccess(res.data));
      window.localStorage.setItem("auth", JSON.stringify(res.data));
      dispatch({
        type: "LOGGED_IN_USER",
        payload: res.data,
      });

      toast.success(
        "You are signed in to LodgeMe!!! We are taking you to dashboard"
      );
      setTimeout(() => {
        navigate("/dashboard-user");
      }, 4000);
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.message);
    }
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
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </SinginPageStyles>
      </HelmetProvider>
    </>
  );
};

export default SigninPage;
