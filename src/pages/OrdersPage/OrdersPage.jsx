import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { baseUrl } from "../../baseUrl/url";
import { OrdersPageStyles } from "./OrdersPageStyles";

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

  console.log(orders);

  return (
    <OrdersPageStyles>
      <div>
        <h1>Your booking Orders</h1>
      </div>
      <div>
        {JSON.stringify(orders)}
      </div>
    </OrdersPageStyles>
  );
};

export default OrdersPage;
