import React from "react";
import Button from "../Button/Button";

const SearchBox = () => {
  return (
    <>
      {/* <div>
        <h3>Search your thought</h3>
      </div> */}
      <div className="seachcontentbox">
        <div className="searchlocationbox">
          <label htmlFor="location">Search Location</label>
          <input type="text" placeholder="Enter Location" />
        </div>
        <div className="searchlocationbox">
          <div>
            <label>Type</label>
          </div>
          <div className="inputcheckboxsection">
            <div className="inputcheckboxsection">
              <input className="inputcheckbox" type="checkbox" />
              <span>Flats</span>
            </div>
            <div className="inputcheckboxsection">
              <input className="inputcheckbox" type="checkbox" />
              <span>Apartments</span>
            </div>
            <div className="inputcheckboxsection">
              <input className="inputcheckbox" type="checkbox" />
              <span>Hotels</span>
            </div>
          </div>
        </div>

        <div className="searchlocationbox">
          <label htmlFor="location">Amenities Needed</label>
          <input type="text" placeholder="Food/Furnished/Cabs" />
        </div>
        <div className="searchlocationbox">
          <label htmlFor="beds">Beds</label>
          <input type="number" placeholder="1" min="0" />
        </div>
        <div className="searchlocationbox">
          <label htmlFor="beds">Baths</label>
          <input type="number" placeholder="1" min="0" />
        </div>

        <div className="searchfilterbtnbox">
          <button className="searchfilterbtn">Search your matches</button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
