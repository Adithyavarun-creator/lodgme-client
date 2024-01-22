import React, { useState, useEffect, useMemo } from "react";
import { HomepageStyles } from "./HomepageStyles";
import carouselImages from "../../datas/carouselImages";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaSearchLocationSolid } from "react-icons/lia";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import format from "date-fns/format";

import Select from "react-select";
import countryList from "react-select-country-list";
import { differenceInDays } from "date-fns";
import { IoSearchSharp } from "react-icons/io5";
import { useRef } from "react";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaCalendarMinus, FaSearchLocation } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import HouseCard from "../../components/HouseCard/HouseCard";
import { useTranslation } from "react-i18next";
import { houseCards } from "../../datas/houseCards";
import { apartmentDatas } from "../../datas/apartmentDatas";
import { HomepageSelectStyles } from "../../components/SelectStyles/Select";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { baseUrl } from "../../baseUrl/url";
import { DatePicker } from "antd";
import Navbar from "../../components/Navbar/Navbar";

const Homepage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { RangePicker } = DatePicker;
  const [houses, setHouses] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/listings`);
        const data = await res.json();
        setHouses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchListings();
  }, []);

  //console.log(houses);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 10000,
    cssEase: "linear",
    responsive: [],
  };

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [diffInDays, setDiffInDays] = useState(0);
  const [dates, setDates] = useState("");
  const [date, setDate] = useState();

  const [open, setOpen] = useState(false);

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  //for number
  const [noPersons, setnoPersons] = useState(0);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

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

  const changeHandler = (value) => {
    setValue(value);
  };

  const changePersonHandler = (value) => {
    setnoPersons(value);
  };

  const handleSelect = (ranges) => {
    console.log(ranges.selection.startDate);
    //console.log(ranges.selection.endDate);
    const diff = differenceInDays(
      ranges.selection.endDate,
      ranges.selection.startDate
    );
    setDiffInDays(diff);
  };

  //console.log(diffInDays);

  const handleSearchSubmit = () => {
    // if (!range) {
    //   toast.error("Date not selected");
    // }
    // if (!value) {
    //   toast.error("Location not selected");
    //   return;
    // }
    // navigate(
    //   `/search-results?locatedCountry=${
    //     value.label ? value.label : "France"
    //   }&stayDays=${diffInDays}&fromdate=${format(
    //     range[0].startDate,
    //     "dd/MM/yyyy"
    //   )}&todate=${format(range[0].endDate, "dd/MM/yyyy")}`
    // );
    //*************** */
    //  navigate(
    //   `/search-results?locatedCountry=${
    //     value.label ? value.label : "France"
    //   }&date=${date}`
    // );
    // navigate(
    //   `/search-results?locatedCountry=${value.label ? value.label : "France"}`
    // );
    navigate(`/search-results?locatedCountry=${country ? country : "France"}`);
  };

  // console.log(date);

  return (
    <>
      <HomepageStyles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="homepage_header_image">
          <Slider {...settings}>
            {carouselImages.map((image) => (
              <div key={image.id}>
                <img
                  className="homepage_header_img"
                  src={image.imageSrc}
                  alt={image.alt}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="homepage_header_content">
          <div className="homepage_header_text">
            <h1>WEBSITE UNDER PROGRESS, COMING SOON !!!</h1>
            <h1>Un toit ou vous retrouver tous ensemble</h1>
          </div>

          <div className="homepage_search_container">
            <div>
              <input
                type="text"
                className="searcharea-input"
                placeholder="France/Germany/Sweden"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
            </div>
            <div className="searchareaiconbox">
              <LiaSearchLocationSolid
                className="searchareaicon"
                onClick={handleSearchSubmit}
              />
            </div>
            {/* <div className="search_select_width">
            <div className="search_labelbox">
              <span className="search_labeltitle"> {t("location")}</span>
              <span>
                <RiMapPin2Fill className="search_box_icon" />
              </span>
            </div>

            <Select
              className="select"
              placeholder="Select Location"
              options={options}
              value={value}
              onChange={changeHandler}
              styles={HomepageSelectStyles}
              name="location"
            /> 
          </div>

         <div>
            <div className="search_labelbox">
              <span className="search_labeltitle"> {t("bookingdate")}</span>
              <span>
                <FaCalendarMinus className="search_box_icon" />
              </span>
            </div>
            <input
              value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
                range[0].endDate,
                "dd/MM/yyyy"
              )}`}
              readOnly
              className="date_inputfield"
              onClick={() => setOpen((open) => !open)}
            />
          </div> */}

            {/* <div>
            <div className="search_labelbox">
              <span className="search_labeltitle"> {t("persons")}</span>
              <span>
                <TbUsersGroup className="search_box_icon" />
              </span>
            </div>

            <Select
              className="select"
              placeholder={`${t("selectPersons")}`}
              options={personOptions}
              value={noPersons}
              onChange={changePersonHandler}
              styles={HomepageSelectStyles}
              name="person"
            />
          </div> */}
            <div>
              {/* <div className="search_labelbox">
              <span className="search_labeltitle"> {t("submit")}</span>
              <span>
                <FaSearchLocation className="search_box_icon" />
              </span>
            </div>
            <button className="homepage_searchbtn" onClick={handleSearchSubmit}>
              <IoSearchSharp className="" />
              {t("search")}
            </button> */}
            </div>
          </div>
        </div>

        {/* <div className="mt-100"></div> */}

        {/* <div>
        <HouseCard title="Top Rated Apartments" houseCards={apartmentDatas} />
      </div> */}

        <div>
          <HouseCard title="Top Rated Houses" houseCards={houses} />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </HomepageStyles>
    </>
  );
};

export default Homepage;

/**
       <div className="datebox_range" ref={refOne}>
            {open && (
              // <DateRangePicker
              //   className="date_range"
              //   onChange={(item) => {
              //     setRange([item.selection]);
              //     handleSelect(item);
              //   }}
              //   editableDateInputs={true}
              //   moveRangeOnFirstSelection={false}
              //   ranges={range}
              //   months={2}
              //   direction="horizontal"
              //   rangeColors={["#015151", "#015151", "#fed14c"]}
              //   minDate={new Date()}
              // />
              // <RangePicker
              //   onChange={(value, dateString) => setDate(dateString)}
              //   disabledDate={(current) =>
              //     current && current.valueOf() < moment().subtract(1, "days")
              //   }
              // />
            )}
            {/* <RangePicker
              onChange={(value, dateString) => setDates(dateString)}
              disabledDate={(current) =>
                current && current.valueOf() < moment().subtract(1, "days")
              }
            />
            </div>

            <RangePicker
              onChange={(value, dateString) => setDate(dateString)}
              disabledDate={(current) =>
                current && current.valueOf() < moment().subtract(1, "days")
              }
            />
 */
