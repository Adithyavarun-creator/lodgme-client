import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { UserDashboardStyles } from "./UserDashboardStyle";
import Logo from "../../assets/lodgemeblacklogo.png";
import { HiIdentification } from "react-icons/hi2";
import { FaUserEdit } from "react-icons/fa";
import { BsCalendar2HeartFill, BsFillHousesFill } from "react-icons/bs";
import { MdAddHome, MdSupportAgent } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const { currentUser } = useSelector((state) => state.user);

  //console.log(currentUser.user._id);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Dashboard | LodgeMe</title>
        </Helmet>
        <UserDashboardStyles>
          <div>
            <h1>{currentUser?.username} Dashboard</h1>
          </div>

          <div className="dashboardbox">
            <div className="dashboardbox-1">
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
            </div>
            <div className="dashboardbox-1">
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
            </div>
            <div className="dashboardbox-1">
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
            </div>
            <Link to="/user-listings" className="linkStyle dashboardbox-1">
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
            </Link>
            <Link to="/add-new-listing" className="linkStyle dashboardbox-1">
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
            </Link>
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
        </UserDashboardStyles>
      </HelmetProvider>
    </>
  );
};

export default UserDashboard;
