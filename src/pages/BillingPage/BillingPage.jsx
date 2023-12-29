import React, { useEffect, useState } from "react";
import { BillingPageStyles } from "./BillingPageStyles";
import { useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BookingPaymentCard from "../../components/BookingPaymentCard/BookingPaymentCard";
import queryString from "query-string";
import moment from "moment";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl/url";

const BillingPage = () => {
  const { bookingAmount, selectedHouse, stayingDays, currentUser, token } =
    useSelector((state) => state.user);
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [nopersons, setNopersons] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const { stayDays, fromdate, todate, persons } = queryString.parse(
      window.location.search
    );
    setStartdate(fromdate);
    setEnddate(todate);
    setNopersons(persons);
  }, []);

  const proceedPayment = async () => {
    if (!name || !email || !address || !number) {
      alert("Please fill details");
      return;
    } else {
      // const response = await fetch(`${baseUrl}/api/create-order`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`, // <---------- HERE
      //   },
      //   body: JSON.stringify({
      //     billingName: name,
      //     billingEmail: email,
      //     billingPhonenumber: number,
      //     billingAddress: address,
      //     totalPrice: bookingAmount,
      //     startDate,
      //     endDate,
      //     stayingDays,
      //     listingBooked: selectedHouse,
      //     bookedBy: currentUser,
      //   }),
      // });
      // console.log(response);

      navigate(
        `/checkout-options?bookname=${name}&bookemail=${email}&bookAddress=${address}&bookNumber=${number}&fromdate=${startDate}&todate=${endDate}&persons=${nopersons}`
      );
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Billing Address | Lodgeme</title>
        </Helmet>
        <BillingPageStyles>
          <div className="billing-box">
            <div>
              <h2 className="billing-boxheading">
                Billing Information to send the bookings to you
              </h2>
            </div>
            <div>
              <h3 className="billing-boxtitle">
                {selectedHouse.title} with {selectedHouse.beds}&nbsp;beds and{" "}
                {selectedHouse.baths}&nbsp;baths and {selectedHouse.livingRoom}
                &nbsp;living room
              </h3>
            </div>
            <div>
              <h4 className="billing-boxtitle">
                Staying from {moment(startDate).format("LL")} until{" "}
                {moment(endDate).format("LL")} with {nopersons} persons
              </h4>
            </div>
            <div>
              <form>
                <div className="billingform">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="billingform">
                  <label htmlFor="">Email address</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="billingform">
                  <label htmlFor="">Mobile number</label>
                  <input
                    type="number"
                    placeholder="+929938383838"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="billingform">
                  <label htmlFor="">Home Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="billingpaymentcardbox">
            <BookingPaymentCard />
            <Button
              title="Proceed with Payment &#10230;"
              onClick={proceedPayment}
            />
          </div>
        </BillingPageStyles>
      </HelmetProvider>
    </>
  );
};

export default BillingPage;
