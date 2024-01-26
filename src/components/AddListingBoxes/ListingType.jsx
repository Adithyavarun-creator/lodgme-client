import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdApartment,
  MdOutlineCastle,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { PiHouseSimple } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";
import { RiHotelLine } from "react-icons/ri";
import { TbBrandGoogleHome } from "react-icons/tb";
import { GiGreenhouse, GiCaveEntrance } from "react-icons/gi";
import {
  FaChevronLeft,
  FaLandmarkDome,
  FaLocationPinLock,
} from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import { MdDone } from "react-icons/md";

const ListingType = ({ setNext, roomtype, setRoomType, setSelected }) => {
  const selectType = (value) => {
    if (value) {
      setSelected(true);
      setRoomType(value);
      toast.success(`Type ${value} has been selected`);
    }

    setTimeout(() => {
      window.scrollTo(0, 0);

      setNext(2);
    }, 800);
  };

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
          <div
            className="housebox"
            value="Apartment"
            onClick={() => selectType("Home")}
          >
            <div>
              <MdApartment className="houseicon" />
            </div>
            <div>
              <span className="housename">Home</span>
            </div>
          </div>

          <div
            className="housebox"
            value="Apartment"
            onClick={() => selectType("Apartment")}
          >
            <div>
              <MdApartment className="houseicon" />
            </div>
            <div>
              <span className="housename">Apartment</span>
            </div>
          </div>

          <div
            className="housebox"
            value="Hut"
            onClick={() => selectType("Hut")}
          >
            <div>
              <PiHouseSimple className="houseicon" />
            </div>
            <div>
              <span className="housename">Hut</span>
            </div>
          </div>

          <div
            className="housebox"
            value="Castle"
            onClick={() => selectType("Castle")}
          >
            <div>
              <MdOutlineCastle className="houseicon" />
            </div>
            <div>
              <span className="housename">Castle</span>
            </div>
          </div>

          <div
            className="housebox"
            value="Mansion"
            onClick={() => selectType("Mansion")}
          >
            <div>
              <LuHotel className="houseicon" />
            </div>
            <div>
              <span className="housename">Mansion</span>
            </div>
          </div>

          <div
            className="housebox"
            value="Lodge"
            onClick={() => selectType("Lodge")}
          >
            <div>
              <RiHotelLine className="houseicon" />
            </div>
            <div>
              <span className="housename">Lodge</span>
            </div>
          </div>

          <div
            className="housebox"
            value="Tiny Home"
            onClick={() => selectType("Tiny Home")}
          >
            <div>
              <TbBrandGoogleHome className="houseicon" />
            </div>
            <div>
              <span className="housename">Tiny Home</span>
            </div>
          </div>

          <div
            className="housebox"
            value="Farm House"
            onClick={() => selectType("Farm House")}
          >
            <div>
              <GiGreenhouse className="houseicon" />
            </div>
            <div>
              <span className="housename">Farm House</span>
            </div>
          </div>

          <div
            className="housebox"
            value="Dome"
            onClick={() => selectType("Dome")}
          >
            <div>
              <FaLandmarkDome className="houseicon" />
            </div>
            <div>
              <span className="housename">Dome</span>
            </div>
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
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default ListingType;
