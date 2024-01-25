import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { amenitiesOptions } from "../../datas/amenities";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const AddAmenities = ({ setNext, checkedValue, setCheckedValue }) => {
  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedValue((prev) => [...prev, value]);
    } else {
      setCheckedValue((prev) => {
        return [...prev.filter((a) => a !== value)];
      });
    }
  };

  const housRules = () => {
    if (!checkedValue.length) {
      toast.error("Check on multiple amenities available");
      return;
    }
    toast.success("Amenities included");
    setTimeout(() => {
      window.scrollTo(0, 0);
      setNext(6);
    }, 1000);
    // setNext(6);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2 className="headingexample">Choose the amenities that are available in your accomodation</h2>
        </div>
        <div className="stepbox">
          <span className="step">5</span>
        </div>
        <div className="amenitybox">
          {amenitiesOptions.map((amenity, i) => (
            <div className="roomamenity" key={i}>
              <div className="amenityinputcheck">
                <input
                  type="checkbox"
                  value={amenity.value}
                  onChange={handleChange}
                  className="checkbox"
                />
              </div>
              <div className="roomamenitydetail">
                <div>
                  <FontAwesomeIcon
                    className="roomamenityicon"
                    icon={amenity.icon ? amenity.icon : ""}
                  />
                </div>
                <div>
                  <span className="roomamenitytext">{amenity.value}</span>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="roomamenity">
            <div className="amenityinputcheck">
              <input type="checkbox" value="Wifi" onChange={handleChange} />
            </div>
            <div className="roomamenitydetail">
              <div>
                <FontAwesomeIcon className="roomamenityicon" icon={faWifi} />
              </div>
              <div>
                <span className="roomamenitytext">Wifi</span>
              </div>
            </div>
          </div> */}
        </div>

        <div className="addlistbtn">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => {
              window.scrollTo(0, 0);

              setNext(4);
            }}
          />
          <Button
            title="Move to house rules"
            backicon={<FaChevronRight />}
            onClick={housRules}
          />
        </div>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default AddAmenities;
