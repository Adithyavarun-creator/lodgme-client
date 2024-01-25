import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HouseRules = ({
  setNext,
  smoking,
  setSmoking,
  pets,
  setPets,
  party,
  setParty,
  addbabycot,
  setAddbabycot,
}) => {
  const movetoImages = () => {
    // setNext(7);
  };

  const handleChange = (data) => {
    if (data == "smoking") {
      if (smoking == true) {
      }
      setSmoking(!smoking);
    }
    if (data == "pets") {
      if (pets == true) {
      }
      setPets(!pets);
    }
    if (data == "party") {
      if (party == true) {
      }
      setParty(!party);
    }
    if (data == "addbabycot") {
      if (addbabycot == true) {
      }
      setAddbabycot(!addbabycot);
    }
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2 className="headingexample">
            rules to be followed while staying in house
          </h2>
        </div>
        <div className="stepbox">
          <span className="step">6</span>
        </div>

        <div className="roomspecs">
          <div className="roomspeclist">
            <div>
              <span className="roomspecname">Smoking</span>
            </div>
            <div className="roomcounts">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => handleChange("smoking")}
                  className="checkbox"
                />
                <span>Yes</span>
              </div>
              <div className="flex">
                <input type="checkbox" name="" id="" className="checkbox" />
                <span>No</span>
              </div>
            </div>
          </div>

          <div className="roomspeclist">
            <div>
              <span className="roomspecname">Pets allowed</span>
            </div>
            <div className="roomcounts">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => handleChange("pets")}
                  className="checkbox"
                />
                <span>Yes</span>
              </div>
              <div className="flex">
                <input type="checkbox" name="" id="" className="checkbox" />
                <span>No</span>
              </div>
            </div>
          </div>

          <div className="roomspeclist">
            <div>
              <span className="roomspecname">Parties/Events allowed</span>
            </div>
            <div className="roomcounts">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => handleChange("party")}
                  className="checkbox"
                />
                <span>Yes</span>
              </div>
              <div className="flex">
                <input type="checkbox" name="" id="" className="checkbox" />
                <span>No</span>
              </div>
            </div>
          </div>

          <div className="roomspeclist">
            <div>
              <span className="roomspecname">
                Do you offer extra babycots ?
              </span>
            </div>
            <div className="roomcounts">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => handleChange("addbabycot")}
                  className="checkbox"
                />
                <span>Yes</span>
              </div>
              <div className="flex">
                <input type="checkbox" name="" id="" className="checkbox" />
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
              setNext(5);
            }}
          />
          <Button
            title="Upload house images"
            backicon={<FaChevronRight />}
            onClick={() => {
              window.scrollTo(0, 0);
              setNext(7);
            }}
          />
        </div>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default HouseRules;
