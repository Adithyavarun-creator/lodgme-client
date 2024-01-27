import React, { useState, useMemo } from "react";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import countryList from "react-select-country-list";
import { AddListingSelectStyles } from "./AddListingSelect";
import Button from "../Button/Button";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import MapboxAutocomplete from "react-mapbox-autocomplete";

const AccomodationDetails = ({
  setNext,
  country,
  setCountry,
  address,
  setAddress,
  setCoordiantes,
  postCode,
  setPostCode,
  latitude,
  setLongitude,
  setLatitude,
  longitude,
  city,
  setCity,
}) => {
  const options = useMemo(() => countryList().getData(), []);

  const mapAccess = process.env.REACT_APP_MAPBOX_API;

  const changeHandler = (value) => {
    setCountry(value);
  };

  function _suggestionSelect(result, lat, long, text) {
    //console.log(lat, long);
    setLatitude(lat);
    setLongitude(long);
    setAddress(result);
  }

  // console.log(latitude);
  // console.log(longitude);

  const goRoomDetails = () => {
    if (!country) {
      toast.error("Please add the address");
      return;
    }
    if (!address) {
      toast.error("Please add the exact location so that we can pin in map");
      return;
    }
    if (!city) {
      toast.error("Please add the city");
      return;
    }
    if (!postCode) {
      toast.error("Please add the post code");
      return;
    }
    toast.success("Locations added");
    setTimeout(() => {
      window.scrollTo(0, 0);
      setNext(4);
    }, 1000);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2 className="headingexample">
            Specify the address of accommodation
          </h2>
        </div>
        <div className="stepbox">
          <span className="step">3</span>
        </div>
        <div className="accomboxes">
          <div className="accombox">
            <label className="acclabel" htmlFor="">
              Country/Region
            </label>
            <Select
              options={options}
              value={country}
              onChange={changeHandler}
              styles={AddListingSelectStyles}
              defaultValue={country}
            />
          </div>
          <div className="accombox">
            <label className="acclabel" htmlFor="">
              Address
            </label>

            <MapboxAutocomplete
              publicKey={mapAccess}
              inputClass="accinput"
              onSuggestionSelect={_suggestionSelect}
              resetSearch={false}
              placeholder="Search Address..."
            />
          </div>
          <div className="accombox">
            <label className="acclabel" htmlFor="">
              City
            </label>
            <input
              type="text"
              className="accinput"
              placeholder="Riga"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div className="accombox">
            <label className="acclabel" htmlFor="">
              Postal Code
            </label>
            <input
              type="number"
              className="accinput"
              step="0.01"
              placeholder="1011"
              onChange={(e) => setPostCode(e.target.value)}
              value={postCode}
            />
          </div>
        </div>
        <div className="addlistbtn">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => {
              setNext(2);
              window.scrollTo(0, 0);
            }}
          />
          <Button
            title="Go to House Specifications"
            backicon={<FaChevronRight />}
            onClick={goRoomDetails}
          />
        </div>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default AccomodationDetails;
