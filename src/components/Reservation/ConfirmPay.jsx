import React from "react";
import Button from "../Button/Button";
import { FaChevronLeft, FaChevronRight, FaEdit } from "react-icons/fa";

const ConfirmPay = ({ steps, setSteps }) => {
  const goBilling = () => {
    setSteps(1);
  };

  return (
    <>
      <div className="dateboxcolumn">
        <div className="datebox">
          <div>
            <h4>Information about your trip</h4>
          </div>
          <div className="datecontent">
            <div>
              <h5>Dates booked</h5>
            </div>
            <div className="datespace">
              <div>
                <span>From 20 december 2023 until 2 Jan 2024</span>
              </div>
              <div className="flex">
                <FaEdit className="reservationediticon" />
                <span>Modify</span>
              </div>
            </div>
          </div>
          <div className="datecontent">
            <div>
              <h5>Travellers</h5>
            </div>
            <div className="datespace">
              <div>
                <span>4 persons</span>
              </div>
              <div className="flex">
                <FaEdit className="reservationediticon" />
                <span>Modify</span>
              </div>
            </div>
          </div>
        </div>

        <div className="end">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => setSteps(0)}
          />
          <Button
            title="Proceed to billing"
            backicon={<FaChevronRight />}
            onClick={goBilling}
          />
        </div>
      </div>
    </>
  );
};

export default ConfirmPay;
