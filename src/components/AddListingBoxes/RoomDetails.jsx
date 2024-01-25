import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const RoomDetails = ({
  setNext,
  travellers,
  setTravellers,
  bedrooms,
  setBedrooms,
  baths,
  setBaths,
  bathroom,
  setBathroom,
  babycots,
  setbabycots,
  children,
  setChildren,
}) => {
  //travellers
  const incrementTraveller = () => {
    setTravellers(travellers + 1);
  };

  const decrementTraveller = () => {
    if (travellers !== 0) {
      setTravellers(travellers - 1);
    }
  };

  //bedrooms
  const incrementBedroom = () => {
    setBedrooms(bedrooms + 1);
  };

  const decrementBedroom = () => {
    if (bedrooms !== 0) {
      setBedrooms(bedrooms - 1);
    }
  };

  //beds
  const incrementBaths = () => {
    setBaths(baths + 1);
  };

  const decrementBaths = () => {
    if (baths !== 0) {
      setBaths(baths - 1);
    }
  };

  //bathroom
  const incrementBathroom = () => {
    setBathroom(bathroom + 1);
  };

  const decrementBathroom = () => {
    if (bathroom !== 0) {
      setBathroom(bathroom - 1);
    }
  };

  const handleChange = (data) => {
    if (data == "babycots") {
      if (babycots == true) {
      }
      setbabycots(!babycots);
    }
    if (data == "children") {
      if (children == true) {
      }
      setChildren(!children);
    }
  };

  //console.log("babycots is", babycots);
  // console.log("children is", children);

  const moveNext = () => {
    if (!baths) {
      toast.error("Number of baths not selected");
      return;
    }
    if (!travellers) {
      toast.error("Number of travellers not selected");
      return;
    }
    if (!bedrooms) {
      toast.error("Number of bedrooms not selected");
      return;
    }
    if (!bathroom) {
      toast.error("Number of bathroom not selected");
      return;
    }

    toast.success("House specifications added");
    setTimeout(() => {
      window.scrollTo(0, 0);
      setNext(5);
    }, 1000);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2 className="headingexample">information based on your accomodation specifications</h2>
        </div>
        <div className="stepbox">
          <span className="step">4</span>
        </div>
        <div className="roomspecs">
          <div className="roomspeclist">
            <div>
              <span className="roomspecname">Travellers allowed</span>
            </div>
            <div className="roomcounts">
              <span>
                <AiOutlineMinus
                  className="roomcounticon"
                  onClick={decrementTraveller}
                />
              </span>
              <span className="roomcountvalue">{travellers}</span>
              <span>
                <AiOutlinePlus
                  className="roomcounticon"
                  onClick={incrementTraveller}
                />
              </span>{" "}
            </div>
          </div>

          <div className="roomspeclist">
            <div>
              <span className="roomspecname">Bedrooms allowed</span>
            </div>
            <div className="roomcounts">
              <span>
                <AiOutlineMinus
                  className="roomcounticon"
                  onClick={decrementBedroom}
                />
              </span>
              <span className="roomcountvalue">{bedrooms}</span>
              <span>
                <AiOutlinePlus
                  className="roomcounticon"
                  onClick={incrementBedroom}
                />
              </span>{" "}
            </div>
          </div>

          <div className="roomspeclist">
            <div>
              <span className="roomspecname">Baths allowed</span>
            </div>
            <div className="roomcounts">
              <span>
                <AiOutlineMinus
                  className="roomcounticon"
                  onClick={decrementBaths}
                />
              </span>
              <span className="roomcountvalue">{baths}</span>
              <span>
                <AiOutlinePlus
                  className="roomcounticon"
                  onClick={incrementBaths}
                />
              </span>{" "}
            </div>
          </div>

          <div className="roomspeclist">
            <div>
              <span className="roomspecname">Bathrooms allowed</span>
            </div>
            <div className="roomcounts">
              <span>
                <AiOutlineMinus
                  className="roomcounticon"
                  onClick={decrementBathroom}
                />
              </span>
              <span className="roomcountvalue">{bathroom}</span>
              <span>
                <AiOutlinePlus
                  className="roomcounticon"
                  onClick={incrementBathroom}
                />
              </span>
            </div>
          </div>

          <div className="roomspeclist">
            <div>
              <span className="roomspecname">Do you offer baby cots ?</span>
            </div>
            <div className="roomcounts">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={babycots}
                  className="checkbox"
                  onChange={() => handleChange("babycots")}
                />
                <span>Yes</span>
              </div>
              <div className="flex">
                <input type="checkbox" name="" id="" className="checkbox"/>
                <span>No</span>
              </div>
            </div>
          </div>

          <div className="roomspeclist">
            <div>
              <span className="roomspecname">Do you accept children ?</span>
            </div>
            <div className="roomcounts">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="checkbox"
                  value={children}
                  onChange={() => handleChange("children")}
                />
                <span>Yes</span>
              </div>
              <div className="flex">
                <input type="checkbox" className="checkbox" name="" id="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>

        <div className="addlistbtn">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => {
              window.scrollTo(0, 0);
              setNext(3);
            }}
          />
          <Button
            title="Add Amenities"
            backicon={<FaChevronRight />}
            onClick={moveNext}
          />
        </div>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default RoomDetails;
