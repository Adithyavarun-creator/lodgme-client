import React, { useRef, useState } from "react";
import { HousePageStyle } from "./HousePageStyle";
import Select from "react-select";

import {
  MdBathroom,
  MdOutlineEuro,
  MdOutlineMeetingRoom,
} from "react-icons/md";
import {
  FaChevronRight,
  FaChevronLeft,
  FaLocationDot,
  FaUsers,
} from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToCity,
  faBanSmoking,
  faBuildingCircleCheck,
  faDoorOpen,
  faElevator,
  faFan,
  faFireBurner,
  faHotTubPerson,
  faIcicles,
  faJugDetergent,
  faKitchenSet,
  faPaw,
  faMattressPillow,
  faMugHot,
  faPlug,
  faShirt,
  faSoap,
  faSprayCanSparkles,
  faTemperatureLow,
  faTv,
  faUtensils,
  faWifi,
  faSquare,
  faHandsBubbles,
  faTable,
  faHandshakeAngle,
  faCouch,
  faCarOn,
  faSquareParking,
  faPersonChalkboard,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { IoBedSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Button from "../../components/Button/Button";
import { FaStar, FaBabyCarriage, FaSmoking, FaBath } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import format from "date-fns/format";
import DatePicker from "react-datepicker";
import Lodgemelogo from "../../assets/lodgemeblacklogo.png";

import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";

const HousePage = () => {
  const { currentUser } = useSelector((state) => state.user);
  SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [noPersons, setnoPersons] = useState(1);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 10),
      key: "selection",
    },
  ]);

  const imagesArray = [
    {
      src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=3765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "new-1",
    },
    {
      src: "https://images.unsplash.com/photo-1682687982502-1529b3b33f85?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "new-2",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1670770301037-603adcbf6ff9?q=80&w=3228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "new-3",
    },
  ];

  const personOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
  ];

  const changePersonHandler = (value) => {
    setnoPersons(value);
  };

  const controlStyle = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#ffffff",
      };
    },
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#015151" : "#fff",
      backgroundColor: state.isSelected ? "#fff" : "#015151",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#015151",
      border: "none",
      boxShadow: "none",
      color: "#ffffff",
      fontSize: "16px",
      height: "40px",
      textAlign: "center",
      // width: "100%",

      "@media only screen and (min-width: 1200px)": {
        ...defaultStyles["@media only screen and (min-width: 1200px)"],
        fontSize: "14px",
        height: "40px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        padding: "0px",
      },
      "@media (min-width: 768px) and (max-width: 1024px) ": {
        ...defaultStyles["@media (min-width: 768px) and (max-width: 1024px) "],
        fontSize: "12px",
        height: "25px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        textAlign: "center",
        padding: "0px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      },
      "@media (min-width: 481px) and (max-width: 767px) ": {
        ...defaultStyles["@media (min-width: 481px) and (max-width: 767px) "],
        fontSize: "8px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        height: "30px",
        textAlign: "center",
        padding: "0px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      },
      "@media (min-width: 280px) and (max-width: 480px) ": {
        ...defaultStyles["@media (min-width: 280px) and (max-width: 480px) "],
        fontSize: "8px",
        backgroundColor: "#015151",
        height: "25px",
        borderRadius: "10px",
        textAlign: "center",
        width: "150px",
        padding: "0px",
      },
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  // const disableDates= [new Date(2022/08/2),{from: new Date(2023/05/3),to:new Date(2023/05/8)]
  const disableDates = [new Date(), { from: new Date(), to: new Date() }];

  return (
    <HousePageStyle>
      <div>
        <h2>Cozy house at city center</h2>
      </div>
      <div className="houseimagecontent">
        <div className="houseimage">
          <div className="">
            <Swiper
              id="main"
              navigation
              pagination
              spaceBetween={0}
              slidesPerView={1}
            >
              {imagesArray.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image.src} alt={image.alt} className="swipeimage" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="showhouseimagebox">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1670770301037-603adcbf6ff9?q=80&w=3228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="housesmallimage"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1670770301037-603adcbf6ff9?q=80&w=3228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="housesmallimage"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1670770301037-603adcbf6ff9?q=80&w=3228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="housesmallimage"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1670770301037-603adcbf6ff9?q=80&w=3228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="housesmallimage"
              />
            </div>
          </div>
        </div>
        <div className="flex-col">
          <div className="housebookcard">
            <div>
              <div className="pricecontentbox">
                <h3 className="pricecontent flex">
                  Price :<MdOutlineEuro /> 250/night
                </h3>
              </div>
              <div className="cardcontent">
                <div>
                  <span className="flex cardaddress">
                    <FaLocationDot /> Check Street
                  </span>
                </div>
                <div>
                  <span className="flex cardaddress">
                    Availability : 10 Jan - 20 Jan
                  </span>
                </div>

                <div className="travellersbox">
                  <Button title="Reserve Now" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              className="mapboximg"
              src="https://risanb.com/code/colorful-google-maps-marker/default-marker.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="housecontent">
        <div className="housetitlebox">
          <div>
            <h4 className="housename">Entire home : villa La Ollive Spain</h4>
          </div>

          <div className="houseroomtypes">
            <div>
              <span className="houseroomtype flex">
                <FaUsers /> 4 Travellers
              </span>
            </div>
            <div>
              <span className="houseroomtype flex">
                <MdOutlineMeetingRoom /> 3 Rooms
              </span>
            </div>
            <div>
              <span className="houseroomtype flex">
                <IoBedSharp /> 3 Beds
              </span>
            </div>
            <div>
              <span className="houseroomtype flex">
                <FaBath /> 3 Baths
              </span>
            </div>
            <div>
              <span className="houseroomtype flex">
                <MdBathroom /> 3 Bathrooms
              </span>
            </div>
          </div>
          <div className="housereviewbox flex">
            <div>
              <span className="flex avgratingnumber">
                <FaStar />
                4.3
              </span>
            </div>
            <div>
              <span className="reviewlength">(10 reviews)</span>
            </div>
          </div>
        </div>

        <div>
          <h4>Hosted by James</h4>
        </div>
        <div className="housepreviewbox">
          <div className="previewheading">
            <h4 className="previewtitle">Preview</h4>
          </div>
          <div className="boxes">
            <div className="flexitems">
              <div>
                <span className="roomspecs">6 bedrooms</span>
              </div>
              <div>
                <span className="roomspecs">7 bathrooms</span>
              </div>
              <div>
                <span className="roomspecs">No pets</span>
              </div>
            </div>

            <div className="flexitems">
              <div>
                <span className="roomspecs">Home type</span>
              </div>
              <div>
                <span className="roomspecs">
                  Area of 400 m<sup>2</sup>
                </span>
              </div>
              <div>
                <span className="roomspecs">5 guests allowed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="housepreviewbox">
          <div className="previewheading">
            <h4 className="previewtitle">Amenities</h4>
          </div>
          <div className="boxes">
            <div className="flexitems">
              <div>
                <span className="roomspecs flex">
                  <FontAwesomeIcon
                    className="amenityicon"
                    icon={faHandshakeAngle}
                  />
                  Host Assistance
                </span>
              </div>
              <div>
                <span className="roomspecs flex">
                  <FontAwesomeIcon
                    className="amenityicon"
                    icon={faSquareParking}
                  />
                  Parking
                </span>
              </div>
              <div>
                <span className="roomspecs flex">
                  <FontAwesomeIcon className="amenityicon" icon={faPaw} />
                  Pets
                </span>
              </div>
            </div>

            <div className="flexitems">
              <div>
                <span className="roomspecs flex">
                  <FontAwesomeIcon className="amenityicon" icon={faUtensils} />
                  Food
                </span>
              </div>
              <div>
                <span className="roomspecs flex">
                  <FontAwesomeIcon className="amenityicon" icon={faIcicles} />
                  Refrigirator
                </span>
              </div>
              <div>
                <span className="roomspecs flex">
                  <FontAwesomeIcon className="amenityicon" icon={faMugHot} />
                  Kettle
                </span>
              </div>
            </div>
            <div className="flexitems">
              <div>
                <span className="reviewlength">Show All</span>
              </div>
            </div>
          </div>
        </div>

        <div className="housepreviewbox">
          <div className="previewheading">
            <h4 className="previewtitle">Rules</h4>
          </div>
          <div className="boxes">
            <div className="flexitems">
              <div>
                <span className="houserulebox">
                  <FaSmoking />
                  Smoking Allowed
                </span>
              </div>
              <div>
                <span className="houserulebox">
                  <GiPartyPopper />
                  Parties Allowed
                </span>
              </div>
              <div>
                <span className="houserulebox">
                  <MdPets />
                  Pets Allowed
                </span>
              </div>
            </div>

            <div className="flexitems">
              <div>
                <span className="houserulebox">
                  <FaChildren />
                  Children Allowed
                </span>
              </div>
              <div>
                <span className="houserulebox">
                  <FaBabyCarriage />
                  Babycots Allowed
                </span>
              </div>
              <div>
                <span className="houserulebox">
                  <FaBabyCarriage />
                  Extra Babycots not Allowed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="housepreviewbox">
          <div className="previewheading">
            <h4 className="previewtitle">Important information</h4>
          </div>
          <div>
            <article className="previewsubtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              nostrum ullam ipsum debitis atque id, iusto nobis similique quae
              ut facilis deleniti necessitatibus praesentium. Autem fugit dolore
              maiores ipsa molestiae.
            </article>
          </div>
        </div>

        <div className="housepreviewbox">
          <div className="previewheading">
            <h4 className="previewtitle">Description</h4>
          </div>
          <div>
            <article className="previewsubtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              nostrum ullam ipsum debitis atque id, iusto nobis similique quae
              ut facilis deleniti necessitatibus praesentium. Autem fugit dolore
              maiores ipsa molestiae.
            </article>
          </div>
        </div>

        <div className="housepreviewbox">
          <div className="previewheading">
            <h4 className="previewtitle">Cancellation</h4>
          </div>
          <div>
            <span className="previewsubtext">
              Cancellation should be done before <strong>48 hours</strong>
              &nbsp;once booked and payment done
            </span>
          </div>
        </div>

        <div className="datebox">
          <div>
            <h3 className="housename">Book your dates !!!</h3>
          </div>
          <div>
            <h4>Available from 2 Januray until 10 January</h4>
          </div>
          <div className="datepickerbox">
            <DateRangePicker
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={range}
              direction="horizontal"
              rangeColors={["#015151"]}
              minDate={new Date()}
              className="daterangepicker"
            />
          </div>
          <div>
            <h3 className="housename">Select number of travellers</h3>
            <Select
              placeholder="Select Persons"
              options={personOptions}
              value={noPersons}
              onChange={changePersonHandler}
              styles={controlStyle}
              name="person"
              className="selectoption"
            />
          </div>
          <div>
            <Button title="Book your travel" />
          </div>
        </div>

        <div className="reviewboxsection">
          <div className="ratingflex">
            <h2 className="housename">Reviews from the users</h2>
            <Button title="Add Your Review" />
          </div>
          <div className="ratingflex">
            <h3 className="flex avgratingnumber">
              <FaStar />
              4.2
            </h3>
            <span className="reviewlength">(123 ratings)</span>
          </div>
          <div className="userreviewbox">
            <div className="flex">
              <div className="lodgemeimage">
                <img src={Lodgemelogo} className="logo" alt="" />
              </div>
              <div>
                <h4 className="flex reviewername">
                  John Doe from France <FaLocationDot />
                </h4>
              </div>
            </div>

            <div>
              <span className="flex reviewrating">
                <FaStar />
                4.2
              </span>
            </div>
            <div>
              <article className="reviewcontent">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur earum reiciendis dolorum culpa voluptate! Quos cum
                pariatur officia mollitia amet molestias fuga repellat,
                laudantium quis obcaecati fugiat, unde modi quisquam vel alias
                nulla est? Cupiditate praesentium ipsa quis sit ducimus.
              </article>
            </div>
            <div className="reviewdatebox">
              <p className="reviewdate">Posted on January 20, 2024</p>
            </div>
          </div>
          <div className="userreviewbox">
            <div className="flex">
              <div className="lodgemeimage">
                <img src={Lodgemelogo} className="logo" alt="" />
              </div>
              <div>
                <h4 className="flex reviewername">
                  John Doe from France <FaLocationDot />
                </h4>
              </div>
            </div>

            <div>
              <span className="flex reviewrating">
                <FaStar />
                4.2
              </span>
            </div>
            <div>
              <article className="reviewcontent">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur earum reiciendis dolorum culpa voluptate! Quos cum
                pariatur officia mollitia amet molestias fuga repellat,
                laudantium quis obcaecati fugiat, unde modi quisquam vel alias
                nulla est? Cupiditate praesentium ipsa quis sit ducimus.
              </article>
            </div>
            <div className="reviewdatebox">
              <p className="reviewdate">Posted on January 20, 2024</p>
            </div>
          </div>
          <div className="userreviewbox">
            <div className="flex">
              <div className="lodgemeimage">
                <img src={Lodgemelogo} className="logo" alt="" />
              </div>
              <div>
                <h4 className="flex reviewername">
                  John Doe from France <FaLocationDot />
                </h4>
              </div>
            </div>

            <div>
              <span className="flex reviewrating">
                <FaStar />
                4.2
              </span>
            </div>
            <div>
              <article className="reviewcontent">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur earum reiciendis dolorum culpa voluptate! Quos cum
                pariatur officia mollitia amet molestias fuga repellat,
                laudantium quis obcaecati fugiat, unde modi quisquam vel alias
                nulla est? Cupiditate praesentium ipsa quis sit ducimus.
              </article>
            </div>
            <div className="reviewdatebox">
              <p className="reviewdate">Posted on January 20, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </HousePageStyle>
  );
};

export default HousePage;

/**
  <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1670770301037-603adcbf6ff9?q=80&w=3228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="swipeimage"
              alt=""
            />
          </div>
 */
