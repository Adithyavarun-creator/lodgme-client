import React from "react";
import { useSelector } from "react-redux";
import { SuccessStyles } from "./SuccessStyle";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const { bookingAmount, selectedHouse, stayingDays } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goOrders = () => {
    navigate("/order-details");
  };

  return (
    <SuccessStyles>
      <div>
        <h1>Your payment is success</h1>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <Button title="Back to Home" onClick={goHome} />
        <Button title="Go to Orders Page" onClick={goOrders}/>
      </div>
    </SuccessStyles>
  );
};

export default Success;
