import React, { useState, useMemo, useEffect, useRef, forwardRef } from "react";
import { SearchBoxStyles } from "./SearchBoxStyles";
import Select from "react-select";
import countryList from "react-select-country-list";
import { SearchPageSelectStyles } from "../SelectStyles/Select";
import format from "date-fns/format";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { addDays, differenceInDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import { DatePicker } from "antd";
import { MdOutlineClose } from "react-icons/md";

const SearchBox = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [hotelText, setHoteltext] = useState("");
  const [hotelType, setHoteltype] = useState("");
  const [diffInDays, setDiffInDays] = useState(0);
  const [beds, setBeds] = useState(1);
  const [baths, setBaths] = useState(1);
  // const [range, setRange] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  //]);
  // const [startDate, setStartDate] = useState(new Date());

  const [open, setOpen] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const [searchData, setSearchData] = useState({
    searchTerm: "",
    type: "all",
    sort: "created_at",
    order: "desc",
  });
  const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const changeHandler = (value) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", searchData.searchTerm);
    urlParams.set("type", searchData.type);
    urlParams.set("sort", searchData.sort);
    urlParams.set("order", searchData.order);
    const searchQuery = urlParams.toString();
    navigate(`/search-filter-results?${searchQuery}`);
  };

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "furnished" ||
      e.target.id === "studio" ||
      e.target.id === "modern" ||
      e.target.id === "hotel" ||
      e.target.id === "flat" ||
      e.target.id === "hostel"
    ) {
      setSearchData({ ...searchData, type: e.target.id });
    }

    if (e.target.id === "searchTerm") {
      setSearchData({ ...searchData, searchTerm: e.target.value });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";

      const order = e.target.value.split("_")[1] || "desc";

      setSearchData({ ...searchData, sort, order });
    }
  };
  const handleSearchSubmit = () => {
    // navigate(
    //   `/search-filter-results?filterCountry=${
    //     value.label ? value.label : "France"
    //   }&filtertype=${hotelType}&filterhoteltext=${hotelText}&filterfromdate=${
    //     range[0].startDate
    //   }&filtertodate=${
    //     range[0].endDate
    //   }&filterbeds=${beds}&filterbaths=${baths}`
    // );
    // window.location.reload();
  };

  // console.log(startDate);

  return (
    <>
      <SearchBoxStyles>
        <div className="searchcontentbox">
          <div className="searchlocationbox">
            <label htmlFor="location">Search Country</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Country Name"
              value={searchData.searchTerm}
              onChange={handleChange}
            />
          </div>

          <div className="inputcheckboxsection">
            <div className="searchlocationbox">
              <label htmlFor="location">Type</label>
            </div>
            <div className="input-checkbox-content">
              <div>
                <label htmlFor="all" className="span">
                  All
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="all"
                  name="all"
                  onChange={handleChange}
                  checked={searchData.type === "all"}
                />
              </div>
            </div>

            <div className="input-checkbox-content">
              <div>
                <label htmlFor="furnished" className="span">
                  Furnished
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="furnished"
                  name="furnished"
                  onChange={handleChange}
                  checked={searchData.type === "furnished"}
                />
              </div>
            </div>

            <div className="input-checkbox-content">
              <div>
                <label htmlFor="modern" className="span">
                  Modern
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="modern"
                  name="modern"
                  onChange={handleChange}
                  checked={searchData.type === "modern"}
                />
              </div>
            </div>

            <div className="input-checkbox-content">
              <div>
                <label htmlFor="studio" className="span">
                  Studio
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="studio"
                  name="studio"
                  onChange={handleChange}
                  checked={searchData.type === "studio"}
                />
              </div>
            </div>

            <div className="input-checkbox-content">
              <div>
                <label htmlFor="hotel" className="span">
                  Hotel
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="hotel"
                  name="hotel"
                  onChange={handleChange}
                  checked={searchData.type === "hotel"}
                />
              </div>
            </div>

            <div className="input-checkbox-content">
              <div>
                <label htmlFor="flat" className="span">
                  Flat
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="flat"
                  name="flat"
                  onChange={handleChange}
                  checked={searchData.type === "flat"}
                />
              </div>
            </div>

            <div className="input-checkbox-content">
              <div>
                <label htmlFor="hostel" className="span">
                  Hostel
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="hostel"
                  name="hostel"
                  onChange={handleChange}
                  checked={searchData.type === "hostel"}
                />
              </div>
            </div>
          </div>

          <div className="inputcheckboxsection">
            <div className="searchlocationbox">
              <label htmlFor="location">Sort by</label>
            </div>
            <select
              onChange={handleChange}
              defaultValue={"created_at_desc"}
              id="sort_order"
              className=""
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to high</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>

          <div className="searchfilterbtnbox">
            <button className="searchfilterbtn" onClick={handleSubmit}>
              Search your matches
            </button>
          </div>
        </div>
      </SearchBoxStyles>
    </>
  );
};

export default SearchBox;
