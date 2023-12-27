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
import FacebookLogo from "../../assets/loginlogos/facebook.png";
import AppleLogo from "../../assets/loginlogos/apple.png";
import GoogleLogo from "../../assets/loginlogos/google.png";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import FacebookSignin from "../../components/FacebookSignin/FacebookSignin";

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
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${baseUrl}/api/login`, {
        email,
        password,
      });
      console.log(data);
      //console.log(res.data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      toast.success("We are signing you in ! Welcome back");
      navigate("/dashboard-user");
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

                {/* <div>
                  <FacebookSignin />
                </div> */}
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
