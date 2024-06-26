import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../baseUrl/url";
import { RegisterPageStyles } from "./RegisterPageStyles";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import OnlySpinner from "../../components/OnlySpinner/OnlySpinner";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useDispatch } from "react-redux";
import {
  signOutUserFailure,
  signOutUserStart,
} from "../../redux/user/userSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState("");
  const [emailverify, setEmailverify] = useState("");

  // console.log(`LM${(Math.random(username) * 10000000).toFixed()}`);

  const registerForm = async (e) => {
    e.preventDefault();
    if (!username) {
      toast.error("Username not filled");
    }
    if (!firstname) {
      toast.error("Firstname not filled");
    }
    if (!lastname) {
      toast.error("Lastname not filled");
    }
    if (!email) {
      toast.error("Email not filled");
    }
    if (!address) {
      toast.error("Address not filled");
    }
    if (!option) {
      toast.error("Gender option not selected");
    }
    if (!country) {
      toast.error("Country not filled");
    }
    if (!contactnumber) {
      toast.error("Contact number not filled");
    }
    if (!password) {
      toast.error("Password not filled");
    }
    if (!confirmpassword) {
      toast.error("Password not filled");
    }
    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
    }
    try {
      setLoading(true);
      const res = await fetch(`${baseUrl}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          firstname,
          lastname,
          homeAddress: address,
          email,
          gender: option,
          country,
          contactnumber,
          password,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(null);
        return;
      }
      setLoading(false);
      setEmailverify(true);
      toast(
        "We have sent a verification link to your email address, please click on link to verify your account and you will be registered in LodgeMe community!",
        {
          icon: "👏",
        }
      );
      // setTimeout(() => {
      //   navigate("/user-sign-in");
      // }, 4000);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Register | Lodgeme</title>
        </Helmet>
        <RegisterPageStyles>
          <div>
            <h1>LodgeMe Customer Registration Page</h1>
          </div>
          <div className="formbox">
            <form>
              <div className="formlabel">
                <label className="labeltext" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="LM7373663"
                  required
                />
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="firstname">
                  Firstname
                </label>
                <input
                  name="firstname"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="John"
                  required
                />
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="lastname">
                  Lastname
                </label>
                <input
                  id="lastname"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="contactnumber">
                  Contact Number
                </label>
                {/* <input
                  name="contactnumber"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={contactnumber}
                  onChange={(e) => setContactnumber(e.target.value)}
                  placeholder="+33 123 2456 78"
                  required
                /> */}
                <PhoneInput
                  placeholder="Enter phone number"
                  value={contactnumber}
                  onChange={setContactnumber}
                />
              </div>
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
                  required
                />
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="gender">
                  Gender
                </label>
                <select
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="country">
                  Country
                </label>
                <input
                  name="country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="France"
                  required
                />
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="address">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="32/34 Rue Marbeuf, F-75374 Paris Cedex 08"
                  required
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
                  required
                />
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="confirmpassword">
                  Confirm Password
                </label>
                <input
                  name="confirmpassword"
                  type="password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </form>
            <div className="btnbox">
              <button className="register-btn" onClick={registerForm}>
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
            {emailverify && (
              <div className="emailverifybox">
                <span className="emailverifytext">
                  We have sent a verification link to your email address ,
                  please click on link to verify your account
                </span>
              </div>
            )}
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </RegisterPageStyles>
      </HelmetProvider>
    </>
  );
};

export default RegisterPage;
