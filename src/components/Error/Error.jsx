import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ErrorImage from "../../assets/cancel.jpg";
import { ErrorStyles } from "./ErrorStyle";
import Button from "../Button/Button";

const Error = () => {
  const { bookingAmount, selectedHouse, stayingDays } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/dashboard-user");
  };

  const goOrders = () => {
    navigate("/order-details");
  };

  return (
    <ErrorStyles>
      <div>
        <h1>Your transaction was failed !!!</h1>
      </div>
      <div>
        <h3>
          We did not received your payment because we were not able to connect
          with your bank
        </h3>
      </div>
      <div>
        <h3>Maybe you could try after sometime</h3>
      </div>
      <div>
        <Button title="Go To Dashboard" onClick={goHome} />
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0koGARAKI0cT5e3SLFc7zM7KGYDJiq3_BA&usqp=CAU"
          className="successimg"
          alt=""
        />
      </div>
    </ErrorStyles>
  );
};

export default Error;
