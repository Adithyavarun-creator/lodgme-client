import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { UserDashboardStyles } from "./UserDashboardStyle";
import Logo from "../../assets/lodgemeblacklogo.png";
import { HiIdentification } from "react-icons/hi2";
import { FaUserEdit } from "react-icons/fa";
import { BsCalendar2HeartFill, BsFillHousesFill } from "react-icons/bs";
import { MdAddHome, MdSupportAgent, MdAutoDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TbHomeSearch } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

const UserDashboard = () => {
  const { currentUser, token } = useSelector((state) => state.user);
  const navigate = useNavigate();


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Dashboard | Lodgeme</title>
        </Helmet>
        <UserDashboardStyles>
          <div>
            <h1>{`${currentUser?.firstname} ${currentUser?.lastname}'s`} Dashboard</h1>
          </div>

          <div className="verifyLinks">
            <h1 className="verifylinkfont">
              {currentUser?.emailVerified ? (
                <span className="flex verifylinkfont">
                  <MdVerified />
                  Email verified by Lodgeme
                </span>
              ) : (
                <Link
                  to={`/email-verify`}
                  className="flex linkStyle verifylinkfont"
                >
                  <FaWindowClose />
                  &nbsp;Email not verified
                </Link>
              )}
            </h1>
          </div>

          <div className="verifyLinks">
            <h1 className="verifylinkfont">
              {currentUser?.mobileVerified ? (
                <span className="flex verifylinkfont">
                  <MdVerified />
                  Mobile number verified by Lodgeme
                </span>
              ) : (
                <Link
                  to="/lodgeme-otp-verification-page"
                  className="flex linkStyle verifylinkfont"
                >
                  <FaWindowClose />
                  &nbsp;Mobile number not verified
                </Link>
              )}
            </h1>
          </div>

          <div className="dashboardbox">
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

            <Link to="/order-details" className="linkStyle dashboardbox-1">
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
            <Link to="/edit-user-profile" className="linkStyle dashboardbox-1">
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
            <Link to="/delete-profile" className="linkStyle dashboardbox-1">
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
                <span>
                  Click here and delete your personal data from Lodgeme
                </span>
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
