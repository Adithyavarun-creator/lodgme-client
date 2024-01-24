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

const AccomodationDetails = ({
  setNext,
  country,
  setCountry,
  address,
  setAddress,
  setCoordiantes,
  postCode,
  setPostCode,
}) => {
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setCountry(value);
  };

  // console.log(value.label);

  const handleSelect = async (values) => {
    const results = await geocodeByAddress(values);
    const ll = await getLatLng(results[0]);
    setAddress(values);
    setCoordiantes(ll);
  };

  const goRoomDetails = () => {
    if (!country) {
      toast.error("Please add the address");
      return;
    }
    if (!address) {
      toast.error("Please add the exact location so that we can pin in map");
      return;
    }
    if (!postCode) {
      toast.error("Please add the post code");
      return;
    }
    toast.success("Locations added");
    setTimeout(() => {
      setNext(4);
    }, 1000);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2>Specify the address of accommodation</h2>
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
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Select the address",
                      className: "accinput",
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          key={suggestion.placeId}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
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
              defaultValue={postCode}
            />
          </div>
        </div>
        <div className="addlistbtn">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => {
              setNext(0);
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
