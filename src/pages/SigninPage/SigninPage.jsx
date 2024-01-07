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
  signInToken,
} from "../../redux/user/userSlice";
import { baseUrl, loginUser } from "../../baseUrl/url";
import FacebookLogo from "../../assets/loginlogos/facebook.png";
import AppleLogo from "../../assets/loginlogos/apple.png";
import GoogleLogo from "../../assets/loginlogos/google.png";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import FacebookSignin from "../../components/FacebookSignin/FacebookSignin";
import Cookies from "js-cookie";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
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
      // dispatch(signInStart());
      // axios.defaults.withCredentials = true;
      // const { data } = await axios.post(`${baseUrl}/api/login`, {
      //   email,
      //   password,
      // });
      // console.log(data.user);
      // Cookies.set("access_token", JSON.stringify(data.token));
      // if (data.success === false) {
      //   dispatch(signInFailure(data.message));
      //   return;
      // }
      // dispatch(signInSuccess(data.user));
      // toast.success("We are signing you in ! Welcome back");
      // navigate("/dashboard-user");
      dispatch(signInStart());
      const response = await fetch(`${baseUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      dispatch(signInSuccess(data.user));
      dispatch(signInToken(data.token));
      //console.log(data.user);
      localStorage.setItem("token", JSON.stringify(data.token));
      toast.success("We are signing you in ! Welcome back");
      setTimeout(() => {
        navigate("/dashboard-user");
      }, 2000);
    } catch (error) {
      dispatch(signInFailure(error.message));
      setError("Invalid credentials, please try again !");
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
            <div>
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
                <div className="btnbox">
                  <button
                    className="register-btn"
                    type="submit"
                    onClick={loginForm}
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>

            {error && (
              <span style={{ color: "red", fontWeight: "bolder" }}>
                {error}
              </span>
            )}
            <div className="btnbox">
              <div>
                <Link to="/forgot-password" className="linkStyle forgot-pswd">
                  Forgot Password ? Reset Now
                </Link>
              </div>
              <div>
                <Link to="/register-user-in" className="linkStyle forgot-pswd">
                  Sign up here to create an account
                </Link>
              </div>
            </div>

            <div>
              <hr className="hrline" />
            </div>

            <div className="loginformbox">
              <div>
                <span className="socialsignin">
                  Sign in with social accounts
                </span>
              </div>

              <div className="btnsociallinks">
                <div>
                  <GoogleLogin />
                </div>

                <div>
                  <FacebookSignin />
                </div>
              </div>
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </SinginPageStyles>
      </HelmetProvider>
    </>
  );
};

export default SigninPage;
