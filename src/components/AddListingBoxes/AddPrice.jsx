import React, { useState } from "react";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineEuro } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { baseUrl } from "../../baseUrl/url";
import { useNavigate } from "react-router-dom";

const AddPrice = ({
  setNext,
  price,
  setPrice,
  roomtype,
  acctype,
  country,
  address,
  postCode,
  travellers,
  bedrooms,
  bathroom,
  baths,
  babycots,
  children,
  smoking,
  pets,
  party,
  addbabycot,
  formData,
  title,
  description,
  selectBooking,
  checkedValue,
  latitude,
  longitude,
  city
}) => {
  const navigate = useNavigate();
  const { currentUser, token } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  // console.log(currentUser, "and", token);
  const onAddListing = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/create-new-listing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, //<---------- HERE
        },
        body: JSON.stringify({
          roomtype,
          acctype,
          locatedCountry: country.label,
          houseAddress: address,
          postCode,
          travellers,
          bedrooms,
          baths,
          bathroom,
          babycots,
          children,
          checkedAmenities: checkedValue,
          smoking,
          pets,
          party,
          addbabycot,
          houseImages: formData.imageUrls,
          title,
          description,
          bookingType: selectBooking,
          price,
          postedBy: currentUser,
          latitude,
          longitude,
          city,
        }),
      });
      const data = await response.json();
      // console.log(data);
      setLoading(false);
      toast.success(
        "House Listing Published, Taking you to your published house shortly"
      );
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2 className="headingexample">Add price for your house</h2>
        </div>

        <div>
          <span className="exampletext">
            Mention the pricing for house for stay per day
          </span>
        </div>

        <div className="stepbox">
          <span className="step">11</span>
        </div>

        <div className="pricebox">
          <MdOutlineEuro className="priceicon" />
          <input
            type="number"
            name=""
            id=""
            className="pricenumber"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <span
            className="perday"
            onClick={(e) => setPrice(e.target.value)}
            value={price}
          >
            per day
          </span>
        </div>

        <div className="addlistbtn">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => {
              window.scrollTo(0, 0);
              setNext(10);
            }}
          />
          <Button title="Finally Publish your house" onClick={onAddListing} />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default AddPrice;
