import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl/url";
import { useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { UserListingPageStyles } from "./UserListingPageStyles";
import EditCard from "../../components/EditCard/EditCard";

const UserListingPage = () => {
  const { currentUser, token } = useSelector((state) => state.user);
  const [houses, setHouses] = useState([]);

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
  // const [token, setToken] = useState("");

  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("token"));
  //   setToken(token);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${baseUrl}/api/listings/${currentUser._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await result.json();
      setHouses(data);
    };
    fetchData();
  }, [currentUser, token]);


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
          {houses.length ? (
            houses.map((house) => <EditCard res={house} key={house._id} />)
          ) : (
            <strong>No listings posted</strong>
          )}
        </UserListingPageStyles>
      </HelmetProvider>
    </>
  );
};

export default UserListingPage;
