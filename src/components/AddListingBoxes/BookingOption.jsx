import React from "react";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";
import { MdApartment } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";

const BookingOption = ({ setNext, setSelectBooking, selectBooking }) => {
  const clickBooking = (value) => {
    if (value) {
      setSelectBooking(value);
      toast.success(`Option has been selected`);
    }

    setTimeout(() => {
      window.scrollTo(0, 0);

      setNext(11);
    }, 800);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2>Reservation Preferences</h2>
        </div>
        <div>
          <span className="headingexample">
            How guests can book your rooms ?
          </span>
        </div>
        <div className="stepbox">
          <span className="step">10</span>
        </div>

        <div className="acctypebox">
          <div
            className="acctypebox-1"
            onClick={() => clickBooking("Request to Reserve")}
          >
            <div>
              <span className="subaccomdatetext">
                All customers should send a request to reserve
              </span>
            </div>
          </div>

          <div
            className="acctypebox-1"
            onClick={() => clickBooking("Can Book Instantly")}
          >
            <div>
              <span className="subaccomdatetext">
                All customers can book instantly
              </span>
            </div>
          </div>
          <div className="addlistbtn">
            <Button
              title="Back"
              icon={<FaChevronLeft />}
              onClick={() => {
                setNext(9);
              }}
            />
          </div>
        </div>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default BookingOption;
