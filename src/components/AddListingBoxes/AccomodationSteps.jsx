import React from "react";
import Button from "../Button/Button";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const AccomodationSteps = ({ next, setNext }) => {
  const goNext = () => {
    setNext(1);
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
            <span className="stepdesc">Accomodation(room) type</span>{" "}
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">2</span>
          </div>
          <div>
            <span className="stepdesc">
              Property type (Apartment/Flat/Studio)
            </span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">3</span>
          </div>
          <div>
            <span className="stepdesc">Details of your property</span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">4</span>
          </div>
          <div>
            <span className="stepdesc">
              Room details of your property
            </span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">5</span>
          </div>
          <div>
          <span className="stepdesc">Amenities available in your property</span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">6</span>
          </div>
          <div>
          <span className="stepdesc">Rules to be followed in property</span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">7</span>
          </div>
          <div>
          <span className="stepdesc">Add images of your property to be published</span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">8</span>
          </div>
          <div>
          <span className="stepdesc">Caption for your property</span>
          </div>
        </div>
        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">9</span>
          </div>
          <div>
          <span className="stepdesc">Description of your property</span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">10</span>
          </div>
          <div>
          <span className="stepdesc">Booking methods for your property</span>
          </div>
        </div>

        <div className="stepnumberbox">
          <div>
            <span className="stepnumber">11</span>
          </div>
          <div>
          <span className="stepdesc">Tag a price for your property</span>
          </div>
        </div>
      </div>

      <div className="addlistbtn">
        <Button title="Back" icon={<FaChevronLeft />} />
        <Button
          backicon={<FaChevronRight />}
          title="Proceed"
          onClick={goNext}
        />
      </div>
    </>
  );
};

export default AccomodationSteps;
