import React, { useEffect, useState } from "react";
import { BookingPreviewStyles } from "./BookingPreviewStyles";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";
import moment from "moment";
import format from "date-fns/format";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  MdOutlineDone,
  MdOutlineClose,
  MdOutlineMapsHomeWork,
  MdChair,
  MdEuroSymbol,
} from "react-icons/md";
import { FaUsers, FaBath } from "react-icons/fa6";
import { IoReceipt, IoBedSharp } from "react-icons/io5";
import Button from "../../components/Button/Button";
import BookingPaymentCard from "../../components/BookingPaymentCard/BookingPaymentCard";

const BookingPreviewPage = () => {
  const { house } = useParams();
  const { bookingAmount, selectedHouse, stayingDays } = useSelector(
    (state) => state.user
  );
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");
  const [nopersons, setNopersons] = useState(0);

  useEffect(() => {
    const { title, stayDays, fromdate, todate, persons } = queryString.parse(
      window.location.search
    );
    setStartdate(fromdate);
    setEnddate(todate);
    setNopersons(persons);
  }, []);

  const navigate = useNavigate();

  //console.log(selectedHouse);

  const gotoFormFillingPage = () => {
    navigate(
      `/billing-details?title=${selectedHouse.title}&stayDays=${startDate}&fromdate=${startDate}&todate=${endDate}&persons=${nopersons}`
    );
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Preview Booking | Lodgeme</title>
        </Helmet>
        <BookingPreviewStyles>
          <div className="bookingbox-1">
            <div>
              <h1 className="bookingbox1heading">
                <IoReceipt className="doneIcon" />
                &nbsp; Short snap to review your booking informations
              </h1>
            </div>
            <div className="flex">
              <h2 className="bookingstayname">
                <MdOutlineMapsHomeWork className="doneIcon" />
                &nbsp;For your stay at&nbsp;
                <Link
                  className="linkStyle bookingstay"
                  to={`/homes&rooms/${selectedHouse._id}`}
                >
                  {selectedHouse.title}&nbsp;
                </Link>
              </h2>
            </div>
            <div className="flex">
              <h3>
                <FaUsers className="doneIcon" />
                &nbsp; Number of people staying are {nopersons}
              </h3>
            </div>
            <div>
              <h3 className="flex">
                <IoBedSharp className="doneIcon" />2 beds &nbsp;{" "}
                <FaBath className="doneIcon" />2 baths &nbsp;{" "}
                <MdChair className="doneIcon" />1 living room
              </h3>
            </div>
            <div className="bookingcheckdates">
              <div className="bookingcheckdatescenter">
                <span className="checktitle">Check in date </span>
                <span className="checkdate">
                  {moment(startDate).format("MMMM Do YYYY")}
                </span>
              </div>
              <div className="bookingcheckdatescenter">
                <span className="checktitle">Check out date </span>
                <span className="checkdate">
                  {moment(endDate).format("MMMM Do YYYY")}
                </span>
              </div>
              <div className="bookingcheckdatescenter">
                <span className="checktitle">Number of days staying </span>
                <span className="checkdate">{stayingDays}</span>
              </div>
            </div>
            <div className="bookingamenititesbox">
              <div className="bookingamenitieslist">
                <div>
                  <h2 className="bookingamenitiestitle">
                    Amenities not included in your stay
                  </h2>
                </div>
                <div className="flex">
                  <MdOutlineClose className="doneIcon" />
                  <span>Tour</span>
                </div>
                <div className="flex">
                  <MdOutlineClose className="doneIcon" />
                  <span>Room Service</span>
                </div>
                <div className="flex">
                  <MdOutlineClose className="doneIcon" />
                  <span>Breakfast</span>
                </div>
                <div className="flex">
                  <MdOutlineClose className="doneIcon" />
                  <span>Meals</span>
                </div>
              </div>
              <div className="bookingamenitieslist">
                <div>
                  <h2 className="bookingamenitiestitle">
                    Amenities included in your stay
                  </h2>
                </div>
                <div className="flex">
                  <MdOutlineDone className="doneIcon" />
                  <span>Tour</span>
                </div>
                <div className="flex">
                  <MdOutlineDone className="doneIcon" />
                  <span>Room Service</span>
                </div>
                <div className="flex">
                  <MdOutlineDone className="doneIcon" />
                  <span>Breakfast</span>
                </div>
                <div className="flex">
                  <MdOutlineDone className="doneIcon" />
                  <span>Meals</span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h2 className="bookingbox1heading">Cancellation Policies</h2>
              </div>
              <ul>
                <li>You are allowed to check in at anytime</li>
                <li>You are allowed to check out at anytime</li>
                <li>
                  And damages in the house will be costed with its EUR charges
                </li>
                <li>
                  Can also connect with Lodgeme support to canel your booking
                </li>
                <li>
                  We cannot cancel your booking, so you need to speak with
                  Lodgeme team and they will get back to us about your
                  cancellation
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="bookingbox-2">
            <div>
              <h2 className="bookingpriceheading">Booking Price details</h2>
            </div>
            <div>
              <div className="bookingpricecontent">
                <div className="bookingpricebox">
                  <div>
                    <span className="flex">
                      {selectedHouse.pricePerNight}&nbsp;{" "}
                      <MdEuroSymbol className="" /> x&nbsp;{stayingDays}
                      &nbsp;{stayingDays < 2 ? "night" : "nights"}
                    </span>
                  </div>
                  <div>
                    <span className="flex">
                      <MdEuroSymbol />
                      &nbsp;{selectedHouse.pricePerNight * stayingDays}
                    </span>
                  </div>
                </div>
                <div className="bookingpricebox">
                  <div>
                    <span>Frais de manage</span>
                  </div>
                  <div>
                    <span className="flex">
                      <MdEuroSymbol />
                      &nbsp;100
                    </span>
                  </div>
                </div>
                <div className="bookingpricebox bookingpricetotal">
                  <div>
                    <span>Total hors taxes</span>
                  </div>
                  <div>
                    <span className="flex">
                      <MdEuroSymbol />
                      &nbsp;{selectedHouse.pricePerNight * stayingDays + 100}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bookingboxbtn">
                <Button title="Cancel" />
                <Button title="Proceed" />
              </div>
            </div>
          </div> */}
          <div className="billingbox-2">
            <BookingPaymentCard />
            <Button
              title="Proceed for billing 	&#10230;"
              onClick={gotoFormFillingPage}
            />
          </div>
        </BookingPreviewStyles>
      </HelmetProvider>
    </>
  );
};

export default BookingPreviewPage;

/**
 http://localhost:3000/booking-preview?title=Beautiful%20Flat%20at%20center%20of%20Latvia&stayDays=1&fromdate=Mon%20Dec%2025%202023%2022:27:29%20GMT+0530%20(India%20Standard%20Time)&todate=Tue%20Dec%2026%202023%2022:27:29%20GMT+0530%20(India%20Standard%20Time)
 */
