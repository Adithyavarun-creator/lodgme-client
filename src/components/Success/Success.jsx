import React from "react";
import { useSelector } from "react-redux";
import { SuccessStyles } from "./SuccessStyle";
import { useNavigate } from "react-router-dom";
import SuccessImage from "../../assets/success.jpg";

const Success = () => {
  const { bookingAmount, selectedHouse, stayingDays } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/order-details");
  }, 3000);

  const goHome = () => {
    navigate("/");
  };

  const goOrders = () => {
    navigate("/order-details");
  };

  return (
    <SuccessStyles>
      <div>
        <h1>Your transaction is success !!!</h1>
      </div>
      <div>
        <h3>We received your payment</h3>
      </div>
      <div>
        <h3>Hold on ! We are taking you to Orders Page</h3>
      </div>
      <div>
        <img src={SuccessImage} className="successimg" alt="" />
      </div>
    </SuccessStyles>
  );
};

export default Success;
