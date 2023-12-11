import React, { useState } from "react";
import axios from "axios";
import { baseUrl, registerUser } from "../../baseUrl/url";
import { RegisterPageStyles } from "./RegisterPageStyles";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const registerForm = async (e) => {
    e.preventDefault();
    if (!firstname) {
      toast.error("Firstname not filled");
    }
    if (!lastname) {
      toast.error("Lastname not filled");
    }
    if (!email) {
      toast.error("Email not filled");
    }
    if (!gender) {
      toast.error("Gender not filled");
    }
    if (!location) {
      toast.error("Location not filled");
    }
    if (!contactnumber) {
      toast.error("Contact number not filled");
    }
    if (!password) {
      toast.error("Password not filled");
    }
    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
    }
    try {
      setLoading(true);
      const res = await axios.post(
        "https://lodgme-server-api.vercel.app/api/register",
        {
          firstname,
          lastname,
          email,
          gender,
          location,
          contactnumber,
          password,
        }
      );
      // const res = await registerUser({
      //   firstname,
      //   lastname,
      //   email,
      //   gender,
      //   location,
      //   contactnumber,
      //   password,
      // });
      console.log(res.data);
      toast("You have been registered in LodgeMe community!", {
        icon: "👏",
      });
      setTimeout(() => {
        navigate("/user-sign-in");
      }, 4000);
      setLoading(false);
    } catch (error) {
      console.log(error?.response?.data?.message);
      //toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Register | LodgeMe</title>
        </Helmet>
        <RegisterPageStyles>
          <div>
            <h1>LodgeMe Customer Registration Page</h1>
          </div>
          <div className="formbox">
            <form>
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
                />
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="contactnumber">
                  Contact Number
                </label>
                <input
                  name="contactnumber"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={contactnumber}
                  onChange={(e) => setContactnumber(e.target.value)}
                  placeholder="+33 123 2456 78"
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
                  placeholder="johndoe@gmail.com  "
                />
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="gender">
                  Gender
                </label>
                <input
                  name="gender"
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Male/Female/Others"
                />
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="location">
                  Location
                </label>
                <input
                  name="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="France"
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
                />
              </div>
            </form>
            <div className="btnbox">
              <button
                disabled={
                  !firstname ||
                  !lastname ||
                  !email ||
                  !confirmpassword ||
                  !password ||
                  !location ||
                  !gender ||
                  !contactnumber
                }
                className="register-btn"
                onClick={registerForm}
              >
                Register
              </button>
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </RegisterPageStyles>
      </HelmetProvider>
    </>
  );
};

export default RegisterPage;
