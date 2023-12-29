import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { baseUrl } from "../../baseUrl/url";
import { OrdersPageStyles } from "./OrdersPageStyles";
import { Link } from "react-router-dom";
import { RiHotelLine } from "react-icons/ri";
import { IoBedSharp } from "react-icons/io5";
import { FaBath, FaUsers } from "react-icons/fa6";
import { MdChair } from "react-icons/md";
import { FaCalendarAlt, FaCcMastercard } from "react-icons/fa";
import { MdDomainVerification, MdOutlineEuro } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import moment from "moment";
import { Helmet, HelmetProvider } from "react-helmet-async";

const OrdersPage = () => {
  const { bookingAmount, selectedHouse, stayingDays, currentUser, token } =
    useSelector((state) => state.user);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${baseUrl}/api/order/${currentUser._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await result.json();
      //console.log(data);
      setOrders(data);
    };
    fetchData();
  }, [currentUser, token]);

  //console.log(orders);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Orders | Lodgeme</title>
        </Helmet>
        <OrdersPageStyles>
          <div>
            <h1 className="ordertitle">Your Orders</h1>
          </div>
          {orders.length &&
            orders
              .slice(0)
              .reverse()
              .map((order) => (
                <div className="ordercard" key={order._id}>
                  <div className="ordercard-1">
                    <div className="ordernumber">
                      <h2 className="ordercardid">OrderId {order._id}</h2>
                    </div>
                    <Link
                      title="View House"
                      className="linkStyle"
                      to={`/homes&rooms/658b0fe2e322e4297997bb37`}
                      target="_blank"
                    >
                      <h2 className="flex orderhousecontent">
                        <RiHotelLine />
                        {order.listingBooked} , at{" "}
                        {order.country ? order.country : "Japan"}
                      </h2>
                    </Link>
                    <div>
                      <h2 className="flex">
                        <IoBedSharp className="ordericon" /> {order.beds}{" "}
                        beds&nbsp;&nbsp;
                        <FaBath className="ordericon" />
                        {order.baths} baths&nbsp;&nbsp;
                        <MdChair className="ordericon" />
                        {order.livingRoom} living room
                      </h2>
                    </div>
                    <div>
                      <h2>
                        <FaUsers className="ordericon" />
                        &nbsp; Number of people staying are {order.nopersons}
                      </h2>
                    </div>
                    <div>
                      <h2 className="flex">
                        <FaCalendarAlt className="ordericon" />
                        &nbsp;Booked from{" "}
                        {moment(order.startDate).format(
                          "MMMM Do YYYY"
                        )} until {moment(order.enddate).format("MMMM Do YYYY")}{" "}
                      </h2>
                    </div>
                  </div>

                  <div className="ordercard-1">
                    <div className="ordernumber">
                      <h2 className="ordercardid flex">
                        <MdDomainVerification style={{ color: "#fff" }} />
                        Order booked on{" "}
                        {moment(order.createdAt).format("MMMM Do YYYY")}
                      </h2>
                    </div>
                    <div>
                      <h2 className="flex orderhousecontent">
                        Amount paid &nbsp;
                        <MdOutlineEuro className="ordericon" />{" "}
                        <strong>{order.totalPrice}</strong>
                      </h2>
                    </div>
                    <div>
                      <h2 className="flex">
                        Payment done via card &nbsp;
                        <FaCcMastercard className="ordericon" />
                      </h2>
                    </div>

                    <div>
                      <h2 className="flex">
                        <RiBillFill className="ordericon" />
                        Billing Name : {order.billingName}
                      </h2>
                    </div>
                    <div>
                      <h2 className="flex">
                        <RiBillFill className="ordericon" />
                        Billing Address : {order.billingEmail}
                      </h2>
                    </div>
                    <div>
                      <h2 className="flex">
                        <RiBillFill className="ordericon" />
                        Billing Contact number : {order.billingPhonenumber}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
        </OrdersPageStyles>
      </HelmetProvider>
    </>
  );
};

export default OrdersPage;
