import React from "react";
import { useSelector } from "react-redux";
import { SuccessStyles } from "./SuccessStyle";
import { useNavigate } from "react-router-dom";
import SuccessImage from "../../assets/success.jpg";
import Button from "../Button/Button";
import { MdVerified } from "react-icons/md";

const Success = () => {
  const { bookingAmount, selectedHouse, stayingDays, currentUser } =
    useSelector((state) => state.user);

  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/order-details");
  }, 7000);

  const goHome = () => {
    navigate("/");
  };

  const goOrders = () => {
    if (currentUser?.user?.provider === "google") {
      navigate("/google-orders-page");
    }
    if (currentUser?.user?.provider === "facebook") {
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
              <h1>
                Your transaction is success !!! and we received your payment
              </h1>
            </div>
            <div>
              {/* <img src={SuccessImage} className="successimg" alt="" /> */}
              <MdVerified className="successimg" />
            </div>

            <div>
              <span className="redirectmsg">
                Redirecting you to orders page within 5-6 seconds or click below
              </span>
            </div>
            <div>
              <Button title="Go to Orders" onClick={goOrders} />
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
