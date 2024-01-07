import React, { useEffect, useState } from "react";
import { CheckoutPageStyles } from "./CheckoutPageStyles";
import BookingPaymentCard from "../../components/BookingPaymentCard/BookingPaymentCard";
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { useSelector } from "react-redux";
import { baseUrl } from "../../baseUrl/url";
import axios from "axios";
import queryString from "query-string";

const CheckoutPage = () => {
  const { bookingAmount, selectedHouse, stayingDays, currentUser, token } =
    useSelector((state) => state.user);
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [nopersons, setNopersons] = useState(0);

  useEffect(() => {
    const {
      fromdate,
      todate,
      persons,
      bookname,
      bookemail,
      bookAddress,
      bookNumber,
    } = queryString.parse(window.location.search);
    setName(bookname);
    setEmail(bookemail);
    setAddress(bookAddress);
    setNumber(bookNumber);

    setStartdate(fromdate);
    setEnddate(todate);
    setNopersons(persons);
  }, []);

  //publish=pk_test_51OCJt5SJsmJ4s67G7rbSy3PGzXYaAlCb2D31sTTALDoNVXGoThAQYIdflpHxWKhaVY6Ach1X8d5OnBxll6r4jNYo00orevZ6se

  const checkOutwithStripe = () => {
    axios
      .post(`${baseUrl}/api/create-checkout-session`, {
        bookingAmount,
        selectedHouse,
      })
      .then((res) => {
        //save

        currentUser.provider === "google" ? saveGoogleOrder() : saveOrder();

        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  //console.log(selectedHouse);

  const saveOrder = async () => {
    const response = await fetch(`${baseUrl}/api/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // <---------- HERE
      },
      body: JSON.stringify({
        billingName: name,
        billingEmail: email,
        billingPhonenumber: number,
        billingAddress: address,
        totalPrice: bookingAmount,
        nopersons: nopersons,
        startDate,
        endDate,
        country: selectedHouse.country,
        beds: selectedHouse.beds,
        baths: selectedHouse.baths,
        livingRoom: selectedHouse.livingRoom,
        stayingDays,
        listingBooked: selectedHouse.title,
        houseDetails: selectedHouse,
        bookedBy: currentUser,
        paymentMode: "Stripe",
      }),
    });
    //console.log(response);
  };

  const saveGoogleOrder = async () => {
    const response = await fetch(`${baseUrl}/api/create-google-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // <---------- HERE
      },
      body: JSON.stringify({
        billingName: name,
        billingEmail: email,
        billingPhonenumber: number,
        billingAddress: address,
        totalPrice: bookingAmount,
        nopersons: nopersons,
        startDate,
        endDate,
        country: selectedHouse.country,
        beds: selectedHouse.beds,
        baths: selectedHouse.baths,
        livingRoom: selectedHouse.livingRoom,
        stayingDays,
        listingBooked: selectedHouse.title,
        houseDetails: selectedHouse,
        bookedBy: currentUser.user,
        paymentMode: "Stripe",
      }),
    });
    //console.log(response);
  };

  const checkOutwithPayPal = async () => {};

  return (
    <CheckoutPageStyles>
      <div className="checkoutbox">
        <div>
          <h1 className="checkoutheading">
            Checkout with below payment options
          </h1>
        </div>
        <div className="checkoutoptions">
          <button className="flex checkoutbtn" onClick={checkOutwithStripe}>
            Credit/Debit card &nbsp;
            <FaCcVisa />
            &nbsp;
            <FaCcMastercard />
          </button>
          {/* <button className="flex checkoutbtn" onClick={checkOutwithPayPal}>
            PayPal &nbsp; <FaPaypal />
          </button> */}

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
