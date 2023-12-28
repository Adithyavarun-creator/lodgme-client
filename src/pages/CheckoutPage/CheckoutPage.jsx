import React from "react";
import { CheckoutPageStyles } from "./CheckoutPageStyles";
import BookingPaymentCard from "../../components/BookingPaymentCard/BookingPaymentCard";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { baseUrl } from "../../baseUrl/url";
import axios from "axios";

const CheckoutPage = () => {
  const { bookingAmount, selectedHouse, stayingDays, token, currentUser } =
    useSelector((state) => state.user);

  //publish=pk_test_51OCJt5SJsmJ4s67G7rbSy3PGzXYaAlCb2D31sTTALDoNVXGoThAQYIdflpHxWKhaVY6Ach1X8d5OnBxll6r4jNYo00orevZ6se


  const checkOutwithStripe = () => {
    axios
      .post(`${baseUrl}/api/create-checkout-session`, {
        bookingAmount,
        selectedHouse,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
    // const stripe = await loadStripe(
    //   "pk_test_51OCJt5SJsmJ4s67G7rbSy3PGzXYaAlCb2D31sTTALDoNVXGoThAQYIdflpHxWKhaVY6Ach1X8d5OnBxll6r4jNYo00orevZ6se"
    // );
    // const body = {
    //   booking: selectedHouse,
    //   amount: bookingAmount,
    // };

    // const response = await fetch(`${baseUrl}/api/create-checkout-session`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode: "cors",
    //   body: JSON.stringify({ body }),
    // });
    // const session = await response.json();
    // console.log(session);
    // const result = stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });
    // if (result.error) {
    //   console.log(result.error);
    // }
  };

  return (
    <CheckoutPageStyles>
      <div className="checkoutbox">
        <div>
          <h1>Checkout with any of the payment options</h1>
        </div>
        <div className="checkoutoptions">
          <button className="flex checkoutbtn" onClick={checkOutwithStripe}>
            Credit/Debit card &nbsp;
            <FaCcVisa />
            &nbsp;
            <FaCcMastercard />
          </button>
          <button className="flex checkoutbtn">Future Payments</button>
        </div>
      </div>

      <div>
        <BookingPaymentCard />
      </div>
    </CheckoutPageStyles>
  );
};

export default CheckoutPage;
