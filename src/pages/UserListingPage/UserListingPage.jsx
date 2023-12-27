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

  useEffect(() => {
    axios.defaults.withCredentials = true;

    const getListing = async () => {
      const { data } = await axios.get(
        `${baseUrl}/api/listings/${currentUser._id}`
      );
      console.log(data);
      setHouses(data);
    };

    getListing();
  }, [currentUser._id]);

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
          {houses.map((house) => (
            <SearchPageCard res={house} key={house._id} />
          ))}
        </UserListingPageStyles>
      </HelmetProvider>
    </>
  );
};

export default UserListingPage;
