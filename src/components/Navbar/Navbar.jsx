import React, { useState } from "react";
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

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  //console.log(currentUser);

  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const selectedOption = (e) => {
    //console.log(e.target.value);
    const selected = i18n.changeLanguage(e.target.value);
    setSelect(selected);
    setToggle(false);
  };

  const logoutUser = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch(`http://localhost:8000/api/signout`);
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
      navigate("/");
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
          <div>
            <Link
              to="/add-new-listing"
              className="navbutton linkStyle"
              title="Add a new house listing at LodgeMe"
            >
              Add new Listing
            </Link>
          </div>
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

          {currentUser && (
            <div>
              <Link
                to="/dashboard-user"
                className="navbutton linkStyle"
                title="Click to manage your LodgeMe account"
              >
                {currentUser ? `${currentUser?.username} Dashboard` : ""}
              </Link>
            </div>
          )}

          {currentUser ? (
            <div>
              <Link
                onClick={logoutUser}
                to="/user-logout"
                className="navbutton linkStyle"
                title="Logout from LodgeMe"
              >
                Logout &nbsp; <FiLogOut />
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/user-sign-in"
                className="navbutton linkStyle"
                title="Login to LodgeMe"
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
