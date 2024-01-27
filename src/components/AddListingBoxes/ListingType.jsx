import React from "react";
import { FaHome } from "react-icons/fa";
import { MdApartment, MdOutlineCastle } from "react-icons/md";
import { PiHouseSimple } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";
import { RiHotelLine } from "react-icons/ri";
import { TbBrandGoogleHome } from "react-icons/tb";
import { GiGreenhouse } from "react-icons/gi";
import { FaChevronLeft, FaLandmarkDome } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import { houseTypes } from "../../datas/houseTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListingType = ({ setNext, roomtype, setRoomType, setSelected }) => {
  const selectType = (value) => {
    if (value) {
      setSelected(true);
      setRoomType(value);
      toast.success(`Type ${value} has been selected`);
    }

    // setTimeout(() => {
    //   window.scrollTo(0, 0);

    //   setNext(2);
    // }, 800);
  };

  console.log(roomtype);

  const proceedAccomodate = () => {
    if (!roomtype) {
      toast.error(`Type has not been selected`);
      return;
    }
    // setNext(2);
  };

  const goBack = () => {
    setNext(0);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2 className="headingexample">
            Describe your type of Accommodation
          </h2>
        </div>
        <div className="stepbox">
          <span className="step">1</span>
        </div>
        <div className="houseboxes">
          {houseTypes.map((house, i) => (
            <div
              className="housebox"
              value={house.type}
              onClick={() => selectType(house.type)}
              key={i}
            >
              <div>
                <FontAwesomeIcon icon={house.icon} className="houseicon" />
              </div>
              <div>
                <span className="housename">{house.type}</span>
              </div>
            </div>
          ))}
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
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default ListingType;
