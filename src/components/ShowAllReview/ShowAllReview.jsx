import React, { useState } from "react";
import { ShowAllReviewStyles } from "./ShowAllReviewStyles";
import { IoCloseCircle } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const ShowAllReview = ({ houseData, avg, setShowAllReview }) => {
  let totalRating = 0;
  for (let i = 0; i < avg.length; i++) {
    totalRating += avg[i];
  }

  const avgRating = totalRating / avg.length;

  return (
    <ShowAllReviewStyles>
      <div className="allreviewcloseiconbox">
        <IoCloseCircle
          className="allreviewcloseicon"
          onClick={() => setShowAllReview(false)}
        />
      </div>
      <div className="allreviewbox">
        <div className="allreviewheading">
          <div>
            <h2>
              Customer Ratings for {houseData.title} at{" "}
              {houseData.locatedCountry}
            </h2>
          </div>
          <div>
            <span className="avgratings">
              Average Rating {avgRating.toFixed(1)}
            </span>
          </div>
          <div className="length">
            We have{" "}
            <strong className="reviewlength">{houseData.reviews.length}</strong>{" "}
            valued customer ratings
          </div>
        </div>

        <div className="rating-box">
          {houseData.reviews.map((review) => (
            <div className="ratingboxcontent" key={review._id}>
              <div className="ratinguserbox">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrHxSNhOer18DioDuZrz0Ol_tTpgORwxgyw&usqp=CAU"
                    className="ratingboximg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="flex reviewername">
                    {review.reviewerFirstname} {review.reviewerLastname}{" "}
                    from&nbsp;has given&nbsp;&nbsp;
                    <span className="flex staricontext">
                      {review.rating} <FaStar className="staricon" />
                    </span>
                  </h3>
                </div>
              </div>

              <div>
                <span className="postedDate">Posted 20 January 2023</span>
              </div>
              <div>
                <article>{review.reviewDescription}.</article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShowAllReviewStyles>
  );
};

export default ShowAllReview;
