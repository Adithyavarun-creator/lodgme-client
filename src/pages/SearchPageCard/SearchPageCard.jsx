import React from "react";
import { FaLocationDot, FaBath, FaUsers } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";
import { MdBathroom, MdEuroSymbol, MdOutlineHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { SearchPageCardStyles } from "./SearchPageCardStyles";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

const SearchPageCard = ({ res }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <SearchPageCardStyles>
        <div className="searchresultsection">
          <div className="flex">
            <h2>{res.title} </h2>&nbsp;&nbsp;
            <span className="searchratingbox flex">
              <FaStar className="searchpriceicon" />
              4.3
            </span>
          </div>

          {/* Travellers */}
          <div className="travelnos flex">
            <div className="">
              <FaUsers className="" />
            </div>
            <div>
              <span className="">{res.travellers} Travellers only</span>
            </div>
          </div>

          <div className="searchpricebox">
            <MdEuroSymbol className="searchpriceicon" />
            <span className="searchhouseamount">{res.price}/night</span>
          </div>
          {/* <div className="searchpricebox">
            <FaCalendarCheck className="searchpriceicon" />
            &nbsp;
            <span className="searchhouseamount">
              {moment(res.availableFrom).format("LL")} until{" "}
              {moment(res.availableTill).format("LL")}
            </span>
          </div> */}
          {/* <div className="searchpricetag">
            <IoPricetags className="searchpricetagicon" />
          </div> */}
          {/* <div className="searchresultuserbox">
            <img className="searchresultuser" src={res.houseImages[0]} alt="" />
          </div> */}

          {/* {currentUser ? (
            <div className="editdelicons">
              <div className="searchuserdelete">
                <MdDelete
                  title="Delete your Listing"
                  className="searchdeleteicon"
                />
              </div>

              <div className="searchuseredit">
                <FiEdit title="Edit your Listing" className="searchediticon" />
              </div>
            </div>
          ) : (
            ""
          )} */}

          {/* <div className="searchuserverified">
            <MdVerified
              className="searchuserverifiedicon"
              title="User verified by Lodgeme"
            />
          </div> */}
          {/* <div>
            <h3>{res.facilities} nearby </h3>
          </div> */}

          <div className="flex">
            <FaLocationDot fill="#015151" />
            <span className="searchresultcountry">
              {res.city},{res.locatedCountry}
            </span>
          </div>

          <div className="bedsbaths">
            <div className="bedbathamenities">
              <div className="">
                <IoBedSharp className="bedsbathicon" />
              </div>
              <div>
                <span className="bedsbathtext">{res.livingRoom} Bedrooms</span>
              </div>
            </div>
            <div className="bedbathamenities">
              <div className="">
                <FaBath className="bedsbathicon" />
              </div>
              <div>
                <span className="bedsbathtext">{res.baths} Baths</span>
              </div>
            </div>

            <div className="bedbathamenities">
              <div className="">
                <MdBathroom className="bedsbathicon" />
              </div>
              <div>
                <span className="bedsbathtext">{res.bathroom} Bathrooms</span>
              </div>
            </div>
          </div>

          <div>
            <span className="searchresultinfo">
              {res.description.slice(0, 100)}...
            </span>
          </div>

          <Link
            to={`/homes&rooms/${res._id}`}
            target="_blank"
            className="linkStyle searchresultview"
          >
            <button className="searchresultviewbtn flex">
              View Property
              <MdOutlineHomeWork className="searchresultviewbtnicon" />
            </button>
          </Link>
        </div>

        <div className="searchresultimgsection">
          <div>
            <img className="searchresultimg" src={res.houseImages[0]} alt="" />
          </div>
        </div>
      </SearchPageCardStyles>
    </>
  );
};

export default SearchPageCard;
