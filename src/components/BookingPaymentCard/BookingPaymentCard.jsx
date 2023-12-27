import React, { useState, useEffect } from "react";
import { BookingPaymentCardStyles } from "./BookingPaymentCardStyles";
import Button from "../Button/Button";
import { MdEuroSymbol } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import queryString from "query-string";

const BookingPaymentCard = () => {
  const { selectedHouse, stayingDays } = useSelector((state) => state.user);
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");

  useEffect(() => {
    const { fromdate, todate } = queryString.parse(window.location.search);
    setStartdate(fromdate);
    setEnddate(todate);
  }, []);

  const cardPayment = () => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/x-www-form-urlencoded",
        authorization:
          "Basic {base64({4d473fb6-b781-4841-bd34-9e97c3026ff3}:{8533850f-f6dd-44a8-9e77-c38524e2535a})}",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        scope: "AIS",
      }),
    };

    fetch("https://api-sandbox.fintecture.com/oauth/accesstoken", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  return (
    <BookingPaymentCardStyles>
      <div>
        <h2 className="bookingpriceheading">Booking Price details</h2>
      </div>
      <div>
        <div className="bookingpricecontent">
          <div className="bookingpricebox">
            <div>
              <span className="flex">
                {selectedHouse.pricePerNight}&nbsp;{" "}
                <MdEuroSymbol className="" /> x&nbsp;{stayingDays}
                &nbsp;{stayingDays < 2 ? "night" : "nights"}
              </span>
            </div>
            <div>
              <span className="flex">
                <MdEuroSymbol />
                &nbsp;{selectedHouse.pricePerNight * stayingDays}
              </span>
            </div>
          </div>
          <div className="bookingpricebox">
            <div>
              <span>Frais de manage</span>
            </div>
            <div>
              <span className="flex">
                <MdEuroSymbol />
                &nbsp;100
              </span>
            </div>
          </div>
          <div className="bookingpricebox bookingpricetotal">
            <div>
              <span>Total hors taxes</span>
            </div>
            <div>
              <span className="flex">
                <MdEuroSymbol />
                &nbsp;{selectedHouse.pricePerNight * stayingDays + 100}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bookingboxbtn">
          <Button title="Cancel" />
          <Button title="Proceed" />
        </div>
      </div>
    </BookingPaymentCardStyles>
  );
};

export default BookingPaymentCard;

//app id= 4d473fb6-b781-4841-bd34-9e97c3026ff3
//app secret = 8533850f-f6dd-44a8-9e77-c38524e2535a
