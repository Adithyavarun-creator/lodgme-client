import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../baseUrl/url";
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
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState("");

  const selectOptions = [
    {
      label: "Men",
      key: 1,
      value: "Men",
    },
    {
      label: "Women",
      key: 2,
      value: "Women",
    },
    {
      label: "Others",
      key: 3,
      value: "Others",
    },
  ];

  const handleSelect = (event) => {
    setOption(event.target.value);
  };

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
    if (!address) {
      toast.error("Address not filled");
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
      const res = await fetch(`${baseUrl}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          homeAddress: address,
          email,
          gender: option,
          location,
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
      toast("You have been registered in LodgeMe community!", {
        icon: "👏",
      });
      setTimeout(() => {
        navigate("/user-sign-in");
      }, 3000);
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
                <input
                  name="contactnumber"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={contactnumber}
                  onChange={(e) => setContactnumber(e.target.value)}
                  placeholder="+33 123 2456 78"
                  required
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

                <select name="" id="" onChange={handleSelect} required>
                  {selectOptions.map((option) => (
                    <option key={option.key} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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
                  required
                />
              </div>
              <div className="formlabel">
                <label className="labeltext" htmlFor="location">
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
              <button
                // disabled={
                //   !firstname ||
                //   !lastname ||
                //   !email ||
                //   !confirmpassword ||
                //   !password ||
                //   !location ||
                //   !address ||
                //   !gender ||
                //   !contactnumber
                // }
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
