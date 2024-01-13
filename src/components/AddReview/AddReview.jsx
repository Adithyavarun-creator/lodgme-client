import React, { useState } from "react";
import { AddReviewStyles } from "./AddReviewStyles";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { baseUrl } from "../../baseUrl/url";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const AddReview = ({ addReview, setAddReview, houseId }) => {
  const { currentUser, token } = useSelector((state) => state.user);
  const [rating, setRating] = useState("");
  const [desc, setDesc] = useState("");

  const postReview = async () => {
    if (!rating) {
      toast.error("Rating is not entered");
      return;
    }
    if (!desc) {
      toast.error("Description is not entered");
      return;
    }
    try {
      const { data } = await fetch(`${baseUrl}/api/add-review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          rating,
          reviewDescription: desc,
          listingId: houseId,
          reviewerFirstname: currentUser.firstname
            ? currentUser.firstname
            : currentUser.username,
          reviewerLastname: currentUser.lastname
            ? currentUser.lastname
            : currentUser.username,
          reviewerCountry: currentUser.country
            ? currentUser.country
            : "Social Account User",
        }),
      });
      toast.success("Your ratings are saved");
      setAddReview(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Error in posting your review , please try after sometime");
    }
  };

  return (
    <>
      {currentUser && (
        <AddReviewStyles>
          <div className="reviewclosebox">
            <IoIosCloseCircle
              className="reviewcloseicon"
              onClick={() => setAddReview(false)}
            />
          </div>
          <div className="reviewcontentbox">
            <div className="reviewcontentheading">
              <h3>Post your rating</h3>
            </div>
            <div className="reviewinputs">
              <label className="reviewlabel" htmlFor="Ratings">
                Add rating
              </label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Add rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="reviewinputs">
              <label className="reviewlabel" htmlFor="Share your experience">
                Share your experience
              </label>
              <textarea
                name=""
                id=""
                placeholder="We were enjoying the view and the city by staying in this house"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="addreviewbtn">
              <Button title="Close" onClick={() => setAddReview(false)} />
              <Button title="Post" onClick={postReview} />
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </AddReviewStyles>
      )}
    </>
  );
};

export default AddReview;
