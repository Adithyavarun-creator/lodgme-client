import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl/url";
import { useSelector } from "react-redux";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SearchPageCard from "../SearchPageCard/SearchPageCard";
import { UserListingPageStyles } from "./UserListingPageStyles";

const UserListingPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [houses, setHouses] = useState([]);

  console.log(currentUser._id);

  // useEffect(() => {
  //   const getListing = async () => {
  //     axios.defaults.withCredentials = true;
  //     const { data } = await axios.get(
  //       `${baseUrl}/api/listings/${currentUser._id}`
  //     );
  //     setHouses(data);
  //   };

  //   getListing();
  // }, [currentUser._id]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setToken(token);
  }, []);

  //console.log(token);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${baseUrl}/api/listings/${currentUser._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await result.json();
      //console.log(data);
      setHouses(data);
    };
    fetchData();
  }, [currentUser, token]);

  console.log(houses);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>My Listings | LodgeMe</title>
        </Helmet>
        <UserListingPageStyles>
          <div>
            <h2>My Listings Posted to public view</h2>
          </div>
          {houses.length &&
            houses.map((house) => (
              <SearchPageCard res={house} key={house._id} />
            ))}
        </UserListingPageStyles>
      </HelmetProvider>
    </>
  );
};

export default UserListingPage;
