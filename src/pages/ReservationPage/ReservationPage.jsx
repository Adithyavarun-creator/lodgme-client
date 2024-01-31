import React from "react";
import { ReservationPageStyle } from "./ReservationPageStyle.1";
import { FaEdit } from "react-icons/fa";
import Button from "../../components/Button/Button";

const ReservationPage = () => {
  return (
    <ReservationPageStyle>
      <div>
        <h2 className="reservationtitle">Confirm and Pay</h2>
      </div>
      <div className="reservationbox">
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

          <div>
            <Button title="Proceed to billing" />
          </div>
        </div>
        <div className="amountbox">
          <div className="supportbox">
            <h4>Support Call</h4>
            <span>
              For reservation assistance or issues please contact 54 675 354
            </span>
          </div>
        </div>
      </div>
    </ReservationPageStyle>
  );
};

export default ReservationPage;
