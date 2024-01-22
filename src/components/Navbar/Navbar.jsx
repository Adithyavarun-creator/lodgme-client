import React, { useEffect, useState } from "react";
import LogoBlack from "../../assets/lodgemeblacklogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileNavStyle, NavbarStyles } from "./NavbarStyles";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import MobileLogo from "../../assets/lodgemewhitelogo.png";
import {
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} from "../../redux/user/userSlice";
import { FiLogOut } from "react-icons/fi";
import { baseUrl } from "../../baseUrl/url";
import axios from "axios";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);

  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (currentUser) {
  //     setUser(currentUser);
  //   } else {
  //     setUser(null);
  //   }
  // }, [currentUser]);

  const { t, i18n } = useTranslation();

  const selectedOption = (e) => {
    const selected = i18n.changeLanguage(e.target.value);
    setSelect(selected);
    setToggle(false);
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
      window.location.reload();
    } catch (error) {
      console.log(error);
      dispatch(signOutUserFailure(error.message));
    }
  };

  return (
    <>
      <NavbarStyles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Link to="/" className="linkStyle" title="LodgeMe">
          <img className="navlogo" src={LogoBlack} alt="brand-logo" />
        </Link>
        <div className="navbuttons">
          {currentUser ? (
            ""
          ) : (
            <div>
              <Link
                to="/register-user-in"
                className="navbutton linkStyle"
                title="Register as user in LodgeMe"
              >
                {t("register")}
              </Link>
            </div>
          )}

          {currentUser?.provider === "lodgeme" && (
            <div>
              <img
                src={
                  currentUser.profilePic
                    ? currentUser.profilePic
                    : "https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg"
                }
                alt="user-pic"
                className="navbar-profileimage"
              />
            </div>
          )}
          {currentUser?.user?.provider === "google" && (
            <div>
              <img
                src={
                  currentUser?.user?.avatar
                    ? currentUser?.user?.avatar
                    : "https://e7.pngegg.com/pngimages/715/371/png-clipart-youtube-google-logo-google-s-google-account-youtube-text-trademark.png"
                }
                alt="user-pic"
                className="navbar-profileimage"
              />
            </div>
          )}

          {currentUser && (
            <div>
              <Link
                to={
                  (currentUser?.provider === "lodgeme" &&
                    `${`/dashboard-user`}`) ||
                  (currentUser?.user?.provider === "google" &&
                    `${"/dashboard-google-user"}`) ||
                  (currentUser?.user?.provider === "facebook" &&
                    `${"/dashboard-facebook-user"}`)
                }
                className="navbutton linkStyle"
                title="Click to manage your Lodgeme account"
              >
                {currentUser?.username
                  ? `${currentUser?.username} ${currentUser?.firstname} ${currentUser?.lastname}`
                  : "" || currentUser?.user?.provider === "facebook"
                  ? currentUser?.user?.username
                  : "" || currentUser?.user?.provider === "google"
                  ? currentUser?.user?.username
                  : ""}
                &nbsp;Dashboard
              </Link>
            </div>
          )}

          {currentUser ? (
            <div>
              <Link
                onClick={logoutUser}
                to="/user-logout"
                className="navbutton linkStyle"
                title="Logout from Lodgeme"
              >
                Logout &nbsp; <FiLogOut />
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/user-sign-in"
                className="navbutton linkStyle"
                title="Login to Lodgeme"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </NavbarStyles>

      <MobileNavStyle>
        <Link to="/">
          <img className="mobile_navlogo" src={MobileLogo} alt="logo" />
        </Link>
        <div>
          <GiHamburgerMenu
            className="mobile_menunav"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {toggle && (
          <div className="mobile_navbox">
            <div className="mobile_menucloseiconbox">
              <MdClose
                className="mobile_menucloseicon"
                onClick={() => setToggle(false)}
              />
            </div>
            <div>
              <ul className="mobile_navmenus">
                <Link
                  to="/register-user-in"
                  className="linkStyle"
                  onClick={() => setToggle(false)}
                >
                  <li>{t("register")}</li>
                </Link>
                <Link
                  to="/user-sign-in"
                  className="linkStyle"
                  onClick={() => setToggle(false)}
                >
                  <li>{t("login")}</li>
                </Link>
                <li>Menu 2</li>
                <li>Menu 3</li>
                {/* <li>
                  <select value={select.name} onChange={selectedOption}>
                    <option className="langOption" id="English" value="en">
                      EN
                    </option>
                    <option className="langOption" id="French" value="fr">
                      FR
                    </option>
                  </select>
                </li> */}
              </ul>
            </div>
          </div>
        )}
      </MobileNavStyle>
    </>
  );
};

export default Navbar;
