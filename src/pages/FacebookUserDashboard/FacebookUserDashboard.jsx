import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FacebookUserDashboardStyles } from "./FacebookUserDashboardStyles";
import Logo from "../../assets/lodgemeblacklogo.png";
import { HiIdentification } from "react-icons/hi2";
import { FaUserEdit } from "react-icons/fa";
import { BsCalendar2HeartFill, BsFillHousesFill } from "react-icons/bs";
import { MdAddHome, MdSupportAgent } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TbHomeSearch } from "react-icons/tb";
import { baseUrl } from "../../baseUrl/url";

const FacebookUserDashboard = () => {
  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Facebook Dashboard | Lodgeme</title>
        </Helmet>
        <FacebookUserDashboardStyles>
          <div>
            <h1>{currentUser?.username} Dashboard</h1>
          </div>

          <div>
            <h1>
              {currentUser?.provider === "facebook"
                ? "If you have planned to add a listing please register as a user and proceed further"
                : ""}{" "}
            </h1>
          </div>

          <div className="dashboardbox">
            <Link
              to="/register-social-user"
              className="linkStyle dashboardbox-1"
            >
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
            <Link to="/" className="linkStyle dashboardbox-1">
              <div className="dashboard-logobox">
                <img src={Logo} className="dashboard-logo" alt="" />
              </div>
              <div className="flexbox">
                <div className="">
                  <h2 className="dashboard-maintitle">
                    Search to stay and book
                  </h2>
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
              to={`${
                currentUser.provider === "facebook" && "/facebook-orders-page"
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
            {/* <div className="dashboardbox-1">
              <div className="dashboard-logobox">
                <img src={Logo} className="dashboard-logo" alt="" />
              </div>
              <div className="flexbox">
                <div className="">
                  <h2 className="dashboard-maintitle">Update your Identity</h2>
                </div>
                <div className="dashboard-mainlink">
                  <HiIdentification className="dashboard-icon" />
                </div>
              </div>
              <div>
                <span>Upload your passport and verify</span>
              </div>
            </div> */}
            {currentUser?.provider === "facebook" ? (
              ""
            ) : (
              <Link
                to="/edit-user-profile"
                className="linkStyle dashboardbox-1"
              >
                <div className="dashboard-logobox">
                  <img src={Logo} className="dashboard-logo" alt="" />
                </div>
                <div className="flexbox">
                  <div className="">
                    <h2 className="dashboard-maintitle">Edit your Profile</h2>
                  </div>
                  <div className="dashboard-mainlink">
                    <FaUserEdit className="dashboard-icon" />
                  </div>
                </div>
                <div>
                  <span>Click here and edit your personal details</span>
                </div>
              </Link>
            )}
            {currentUser?.provider === "google" ? (
              <Link
                to="/register-social-user"
                className="linkStyle dashboardbox-1"
              >
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
                  <span>Regsiter as a user so that we can verify you</span>
                </div>
              </Link>
            ) : (
              ""
            )}
            {/* <Link to="/user-listings" className="linkStyle dashboardbox-1">
              <div className="dashboard-logobox">
                <img src={Logo} className="dashboard-logo" alt="" />
              </div>
              <div className="flexbox">
                <div className="">
                  <h2 className="dashboard-maintitle">Your Listings</h2>
                </div>
                <div className="dashboard-mainlink">
                  <BsFillHousesFill className="dashboard-icon" />
                </div>
              </div>
              <div>
                <span>Click here and post your houses or book your houses</span>
              </div>
            </Link> */}
            {/* <Link to="/add-new-listing" className="linkStyle dashboardbox-1">
              <div className="dashboard-logobox">
                <img src={Logo} className="dashboard-logo" alt="" />
              </div>
              <div className="flexbox">
                <div className="">
                  <h2 className="dashboard-maintitle">Add new House Listing</h2>
                </div>
                <div className="dashboard-mainlink">
                  <MdAddHome className="dashboard-icon" />
                </div>
              </div>
              <div>
                <span>Post your house listing to public</span>
              </div>
            </Link> */}
            <div className="dashboardbox-1">
              <div className="dashboard-logobox">
                <img src={Logo} className="dashboard-logo" alt="" />
              </div>
              <div className="flexbox">
                <div className="">
                  <h2 className="dashboard-maintitle">
                    LodgeMe Support Center
                  </h2>
                </div>
                <div className="dashboard-mainlink">
                  <MdSupportAgent className="dashboard-icon" />
                </div>
              </div>
              <div>
                <span>Any queries ? We can guide you</span>
              </div>
            </div>
          </div>
        </FacebookUserDashboardStyles>
      </HelmetProvider>
    </>
  );
};

export default FacebookUserDashboard;
