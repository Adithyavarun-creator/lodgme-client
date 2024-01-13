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

  const checkOutwithStripe = () => {
    axios
      .post(`${baseUrl}/api/create-checkout-session`, {
        bookingAmount,
        selectedHouse,
      })
      .then((res) => {
        //save
        if (currentUser?.user?.provider === "facebook") {
          saveFacebookOrder();
        }
        if (currentUser?.user?.provider === "google") {
          saveGoogleOrder();
        } else {
          saveOrder();
        }

        // currentUser.provider === "google"
        //   ? saveGoogleOrder()
        //   : currentUser.provider === "facebook"
        //   ? saveFacebookOrder()
        //   : currentUser.provider === "lodgeme" && saveOrder();
        // currentUser.provider === "facebook" ? saveFacebookOrder() : saveOrder();
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

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
        country: selectedHouse.locatedCountry,
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
        Authorization: `Bearer ${currentUser?.token}`, // <---------- HERE
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
        country: selectedHouse.locatedCountry,
        beds: selectedHouse.beds,
        baths: selectedHouse.baths,
        livingRoom: selectedHouse.livingRoom,
        stayingDays,
        listingBooked: selectedHouse.title,
        houseDetails: selectedHouse,
        bookedBy: currentUser?.user?._id,
        paymentMode: "Stripe",
      }),
    });
    //console.log(response);
  };

  const saveFacebookOrder = async () => {
    const response = await fetch(`${baseUrl}/api/create-facebook-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser?.token}`, // <---------- HERE
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
        country: selectedHouse.locatedCountry,
        beds: selectedHouse.beds,
        baths: selectedHouse.baths,
        livingRoom: selectedHouse.livingRoom,
        stayingDays,
        listingBooked: selectedHouse.title,
        houseDetails: selectedHouse,
        bookedBy: currentUser.user._id,
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

          {/* <button className="flex checkoutbtn">Future Payments</button> */}
        </div>
      </div>

      <div>
        <BookingPaymentCard />
      </div>
    </CheckoutPageStyles>
  );
};

export default CheckoutPage;
