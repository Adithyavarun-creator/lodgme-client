import React, { useState, useEffect } from "react";
import { DeletePopupStyles } from "./DeletePopupStyles";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../baseUrl/url";
import { Helmet, HelmetProvider } from "react-helmet-async";
import moment from "moment";
import Button from "../Button/Button";
import { MdDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const DeletePopup = () => {
  const { currentUser, token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { id } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const [userListings, setUserListings] = useState([]);

  // console.log(id);

  useEffect(() => {
    const fetchListing = async () => {
      const res = await fetch(`${baseUrl}/api/get/${id}`);
      const data = await res.json();
      console.log(data.listing);
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFetchData(data.listing);
    };

    fetchListing();
  }, [id]);

  const goBack = () => {
    navigate("/user-listings");
  };

  const deleteListing = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/listing/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      toast.success("Listing Deleted");
      setTimeout(() => {
        navigate("/user-listings");
      }, 1000);
    } catch (error) {
      console.log(error.message);
      toast.success(error.message);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Delete Listing | Lodgeme</title>
        </Helmet>
        <DeletePopupStyles>
          <div>
            <h2>Are you sure you want to delete your listing</h2>
          </div>
          <div className="deletehousebox">
            <div>
              <h3>
                {fetchData?.title} at {fetchData?.locatedCountry}
              </h3>
            </div>
            <div>
              <span>
                {fetchData?.livingRoom} living room {fetchData?.beds} beds{" "}
                {fetchData?.baths} bath{" "}
              </span>
            </div>
            <div>
              <span>
                Available from{" "}
                {moment(fetchData?.availableFrom).format("MMMM Do YYYY")} until{" "}
                {moment(fetchData?.availableTill).format("MMMM Do YYYY")}
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
              <Button
                title="Delete"
                icon={<MdDelete />}
                onClick={deleteListing}
              />
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </DeletePopupStyles>
      </HelmetProvider>
    </>
  );
};

export default DeletePopup;
