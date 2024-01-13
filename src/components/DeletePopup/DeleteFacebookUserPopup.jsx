import React, { useState, useEffect } from "react";
import { DeleteFacebookUserPopupStyles } from "./DeleteFacebookUserPopupStyles";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../baseUrl/url";
import { Helmet, HelmetProvider } from "react-helmet-async";
import moment from "moment";
import Button from "../Button/Button";
import { MdDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
} from "../../redux/user/userSlice";

const DeleteFacebookUserPopup = () => {
  const dispatch = useDispatch();
  const { currentUser, token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { id } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const [userListings, setUserListings] = useState([]);


  const goBack = () => {
    navigate("/dashboard-user");
  };

  const deleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(
        `${baseUrl}/api/facebook-user/delete/${currentUser?.user?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser?.token}`,
          },
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      toast.success("Your account has been deleted");
      setTimeout(() => {
        dispatch(deleteUserSuccess(data));
        navigate("/user-sign-in");
      }, 3000);
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
      toast.error("Your account was not deleted as it was an invalid access");
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Delete Listing | Lodgeme</title>
        </Helmet>
        <DeleteFacebookUserPopupStyles>
          <div>
            <h2>Are you sure you want to delete your account from Lodgeme</h2>
          </div>
          <div className="deletehousebox">
            <div>
              <h3>{currentUser?.user?.username}</h3>
            </div>
            <div>
              <span>Email address :&nbsp;{currentUser?.user?.email}</span>
            </div>
            {/* <div className="deleteprofileimgbox">
              <img
                src={currentUser?.user?.avatar}
                className="deleteprofileimg"
                alt=""
              />
            </div> */}
            <div>
              <span>
                Your orders will also get erased with your account details
              </span>
            </div>
            <div>
              <span>
                Account created at :&nbsp;
                {moment(currentUser?.user?.createdAt).format("MMMM Do YYYY")}
              </span>
            </div>
          </div>
          <div className="deletehousbtns">
            <div>
              <Button
                title="Back"
                icon={<IoMdArrowRoundBack />}
                onClick={goBack}
              />
            </div>
            <div>
              <Button title="Delete" icon={<MdDelete />} onClick={deleteUser} />
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </DeleteFacebookUserPopupStyles>
      </HelmetProvider>
    </>
  );
};

export default DeleteFacebookUserPopup;
