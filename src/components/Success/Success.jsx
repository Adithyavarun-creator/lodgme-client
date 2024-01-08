import React from "react";
import { useSelector } from "react-redux";
import { SuccessStyles } from "./SuccessStyle";
import { useNavigate } from "react-router-dom";
import SuccessImage from "../../assets/success.jpg";
import Button from "../Button/Button";

const Success = () => {
  const { bookingAmount, selectedHouse, stayingDays, currentUser } =
    useSelector((state) => state.user);

  const navigate = useNavigate();

  console.log(currentUser);

  // setTimeout(() => {
  //   navigate("/order-details");
  // }, 3000);

  const goHome = () => {
    navigate("/");
  };

  const goOrders = () => {
    if (currentUser?.user?.provider === "google") {
      navigate("/google-orders-page");
    }
    if (currentUser?.provider === "facebook") {
      navigate("/facebook-orders-page");
    }
    if (currentUser?.provider === "lodgeme") {
      navigate("/order-details");
    }
  };

  return (
    <>
      <SuccessStyles>
        {currentUser ? (
          <>
            <div>
              <h1>Your transaction is success !!!</h1>
            </div>
            <div>
              <h3>We received your payment</h3>
            </div>
            <div>
              <Button title="Go to Orders" onClick={goOrders} />
            </div>
            <div>
              <img src={SuccessImage} className="successimg" alt="" />
            </div>
          </>
        ) : (
          "Login"
        )}
      </SuccessStyles>
    </>
  );
};

export default Success;
