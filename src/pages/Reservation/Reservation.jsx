import React from "react";
import { ReservationStyles } from "./ReservationStyles";
import { FaEdit, FaStar } from "react-icons/fa";
import Button from "../../components/Button/Button";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEuro, MdVerified } from "react-icons/md";

const Reservation = () => {
  return (
    <ReservationStyles>
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

          <div className="end">
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

          <div className="housecontentbox">
            <div className="houseimagebox">
              <img
                src="https://images.unsplash.com/photo-1682685796186-1bb4a5655653?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="houseimage"
              />
              <img
                src="https://images.unsplash.com/photo-1706646168463-1054bf7c4d84?q=80&w=3884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="houseimage"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1704686580626-d53ce68985d9?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="houseimage"
              />
            </div>
            <div className="flex datespace">
              <h4 className="housename">Deluxe room with amenities</h4>
              <span className="flex housename">
                4.3
                <FaStar />
              </span>
            </div>
            <div>
              <span className="housetype">Apartment type</span>
            </div>

            <div className="flex">
              <FaLocationDot />
              <span className="housetype">123 France Street , France</span>
            </div>
            <div className="traveldates">
              <div>
                <h4 className="arrival">Arrival</h4>
                <span className="houserating">3 january</span>
              </div>
              <div>
                <h4 className="arrival">Departure</h4>
                <span className="houserating">3 january</span>
              </div>
            </div>
            <div>
              <span className="housename">Number of travellers : 4</span>
            </div>
            <div className="pricecardbox">
              <div className="space">
                <span className="estimate plainflex">
                  <MdOutlineEuro />
                  250 x 4
                </span>
                <span className="estimate plainflex">
                  <MdOutlineEuro />
                  {250 * 4}
                </span>
              </div>

              <div className="space">
                <span className="estimate plainflex">Other charges</span>
                <span className="estimate plainflex">
                  <MdOutlineEuro />
                  100
                </span>
              </div>

              <div className="total space">
                <span className="totalamount plainflex">Total</span>
                <span className="totalamount plainflex">
                  <MdOutlineEuro />
                  {250 * 4 + 100}
                </span>
              </div>
            </div>
          </div>

          <div className="housecontentbox">
            <div>
              <h4 className="infoboxtext">Payment Protection</h4>
            </div>
            <div>
              <article>
                By booking with Lodgeme you are covered in case of unexpected
                problems such as :-
              </article>
            </div>
            <div className="infobox">
              <div className="flex">
                <MdVerified />
                <span className="housename">Guest cancellations</span>
              </div>
              <div className="flex">
                <MdVerified />
                <span className="housename">Problem access to property</span>
              </div>
              <div className="flex">
                <MdVerified />
                <span className="housename">
                  Payment protection and much more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReservationStyles>
  );
};

export default Reservation;
