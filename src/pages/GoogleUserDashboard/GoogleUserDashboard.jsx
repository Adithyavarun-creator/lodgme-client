import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { UserDashboardStyles } from "./UserDashboardStyle";
import Logo from "../../assets/lodgemeblacklogo.png";
import { HiIdentification } from "react-icons/hi2";
import { FaUserEdit } from "react-icons/fa";
import { BsCalendar2HeartFill, BsFillHousesFill } from "react-icons/bs";
import { MdAddHome, MdAutoDelete, MdSupportAgent } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TbHomeSearch } from "react-icons/tb";
import { baseUrl } from "../../baseUrl/url";
import axios from "axios";
import {
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} from "../../redux/user/userSlice";
import toast from "react-hot-toast";

const GoogleUserDashboard = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      dispatch(signOutUserStart());

      axios.defaults.withCredentials = true;
      const { data } = await axios.get(`${baseUrl}/api/signout`);
      if (data.success === false) {
        dispatch(signOutUserFailure(data?.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
      toast.success(
        "We have authenticated your account, please sign in with google account again"
      );
      setTimeout(() => {
        navigate("/user-sign-in");
      }, 3000);
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }
  };


  return (
    <>
      {/* <HelmetProvider>
        <Helmet>
          <meta />
          <title>Dashboard | Lodgeme</title>
        </Helmet> */}
      <UserDashboardStyles>
        <div>
          <h1>{currentUser?.user?.username} Dashboard</h1>
        </div>

        <div>
          <h1>
            {currentUser?.user?.provider === "google"
              ? "If you have planned to add a listing please register as a user and proceed further"
              : ""}{" "}
          </h1>
        </div>

        <div className="dashboardbox">
          <Link to="/register-social-user" className="linkStyle dashboardbox-1">
            <div className="dashboard-logobox">
              <img src={Logo} className="dashboard-logo" alt="" />
            </div>
            <div className="flexbox">
              <div className="">
                <h2 className="dashboard-maintitle">Register as a user</h2>
              </div>
              <div className="dashboard-mainlink">
                <BsCalendar2HeartFill className="dashboard-icon" />
              </div>
            </div>
            <div>
              <span>Register as a user so that we can verify you</span>
            </div>
          </Link>

          <Link
            to={`${
              currentUser?.user?.provider === "google" && "/google-orders-page"
            }`}
            className="linkStyle dashboardbox-1"
          >
            <div className="dashboard-logobox">
              <img src={Logo} className="dashboard-logo" alt="" />
            </div>
            <div className="flexbox">
              <div className="">
                <h2 className="dashboard-maintitle">Bookings</h2>
              </div>
              <div className="dashboard-mainlink">
                <BsCalendar2HeartFill className="dashboard-icon" />
              </div>
            </div>
            <div>
              <span>Your previous and upcoming bookings</span>
            </div>
          </Link>
          <Link to="/" className="linkStyle dashboardbox-1">
            <div className="dashboard-logobox">
              <img src={Logo} className="dashboard-logo" alt="" />
            </div>
            <div className="flexbox">
              <div className="">
                <h2 className="dashboard-maintitle">Search to stay and book</h2>
              </div>
              <div className="dashboard-mainlink">
                <TbHomeSearch className="dashboard-icon" />
              </div>
            </div>
            <div>
              <span>Browse houses and book it</span>
            </div>
          </Link>
          <Link
            to="/delete-google-user-accounts"
            className="linkStyle dashboardbox-1"
          >
            <div className="dashboard-logobox">
              <img src={Logo} className="dashboard-logo" alt="" />
            </div>
            <div className="flexbox">
              <div className="">
                <h2 className="dashboard-maintitle">Delete your Profile</h2>
              </div>
              <div className="dashboard-mainlink">
                <MdAutoDelete className="dashboard-icon" />
              </div>
            </div>
            <div>
              <span>Click here and delete your personal data from Lodgeme</span>
            </div>
          </Link>
        </div>
      </UserDashboardStyles>
      {/* )} */}
      {/* </HelmetProvider> */}
    </>
  );
};

export default GoogleUserDashboard;
