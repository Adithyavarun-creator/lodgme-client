import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";

const AccomodationType = ({ next, setNext, acctype, setAccType }) => {
  const selectRoom = (value) => {
    if (value) {
      setAccType(value);
      toast.success(`Type ${value} has been selected`);
    }

    setTimeout(() => {
      window.scrollTo(0, 0);

      setNext(3);
    }, 800);
  };

  console.log(acctype);

  return (
    <div className="forstep">
      <div>
        <h2>Specify type of Accomodation available for the travellers</h2>
      </div>
      <div className="stepbox">
        <span className="step">2</span>
      </div>
      <div className="acctypebox">
        <div
          className="acctypebox-1"
          onClick={() => selectRoom("Entire Accommodation")}
        >
          <div>
            <h3>Entire Accomodation</h3>
          </div>
          <div>
            <span className="subaccomdatetext">
              Travellers can accommodate entirely
            </span>
          </div>
        </div>
        <div className="acctypebox-1" onClick={() => selectRoom("Room")}>
          <div>
            <h3>Room</h3>
          </div>
          <div>
            <span className="subaccomdatetext">
              Travellers have there own room in accommodation and have access to
              shared spaces
            </span>
          </div>
        </div>
        <div
          className="acctypebox-1"
          onClick={() => selectRoom("Shared Accommodation")}
        >
          <div>
            <h3>Shared Accomodation</h3>
          </div>
          <div>
            <span className="subaccomdatetext">
              Guest sleeps in a room or common area that is shared with you or
              other people
            </span>
          </div>
        </div>
      </div>
      <div className="addlistbtn">
        <Button
          title="Back"
          icon={<IoArrowBackSharp />}
          onClick={() => setNext(1)}
        />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AccomodationType;
