import React from "react";
import Button from "../Button/Button";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

const AccomodationSteps = ({ next, setNext }) => {
  const goNext = () => {
    setNext(1);
  };

  const goBack = () => {
    //put dashboard page
    // navigate("/");
  };

  return (
    <>
      <div>
        <h2>In order to post your listing you must complete following steps</h2>
      </div>
      <div className="steplisting">
        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">1</span>
          </div>
          <div>
            <span className="stepdesc">Entering your property name</span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">2</span>
          </div>
          <div>
            <span className="stepdesc">
              Entering your accomodation(room) type
            </span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">3</span>
          </div>
          <div>
            <span className="stepdesc">Entering your property name</span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">4</span>
          </div>
          <div>
            <span className="stepdesc">Entering your property name</span>
          </div>
        </div>
      </div>
      <div className="addlistbtn">
        <Button title="Back" icon={<IoArrowBackSharp />} />
        <Button icon={<IoArrowForward />} title="Proceed" onClick={goNext} />
      </div>
    </>
  );
};

export default AccomodationSteps;
