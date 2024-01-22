import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Button from "../Button/Button";

const AccomodationType = ({ next, setNext }) => {
  const [selected, setSelected] = useState(false);
  console.log(next);

  const getBack = () => {
    console.log(setNext(0));
    setNext(1);
  };

  const selectRoom = (value) => {
    // console.log(value);
    setSelected(value);
  };

  return (
    <div>
      <div>
        <h2>Specify type of Accomodation available for the travellers</h2>
      </div>
      <div className="acctypebox">
        <div
          className="acctypebox-1"
          onClick={() => selectRoom("entire accommodation")}
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
        <div className="acctypebox-1" onClick={() => selectRoom("room")}>
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
          onClick={() => selectRoom("shared accommodation")}
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
        <Button title="Back" icon={<IoArrowBackSharp />} onClick={getBack} />
      </div>
    </div>
  );
};

export default AccomodationType;
