import React from "react";
import { FaLocationDot, FaBath } from "react-icons/fa6";
import { IoBedSharp, IoPricetags } from "react-icons/io5";
import { MdEuroSymbol, MdOutlineHomeWork } from "react-icons/md";
import { PiArmchairFill } from "react-icons/pi";
import { MdVerified, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { SearchPageCardStyles } from "./SearchPageCardStyles";
import { useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";

const SearchPageCard = ({ res }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <SearchPageCardStyles>
        <div className="searchresultsection">
          <div>
            <h2>{res.title} </h2>
          </div>
          <div className="searchpricebox">
            <MdEuroSymbol className="searchpriceicon" />
            <span className="searchhouseamount">{res.pricePerNight}/night</span>
          </div>
          <div className="searchpricetag">
            <IoPricetags className="searchpricetagicon" />
          </div>
          <div className="searchresultuserbox">
            <img
              className="searchresultuser"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          {currentUser ? (
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
          )}

          <div className="searchuserverified">
            <MdVerified
              className="searchuserverifiedicon"
              title="User verified by Lodgeme"
            />
          </div>
          <div>
            <h3>{res.facilities} nearby </h3>
          </div>
          <div className="flex">
            <FaLocationDot fill="#015151" />
            <span className="searchresultcountry">{res.locatedCountry}</span>
          </div>

          <div className="bedsbaths">
            <div className="bedbathamenities">
              <div className="">
                <PiArmchairFill className="bedsbathicon" />
              </div>
              <div>
                <span className="bedsbathtext">
                  {res.livingRoom} Living Room
                </span>
              </div>
            </div>
            <div className="bedbathamenities">
              <div className="">
                <IoBedSharp className="bedsbathicon" />
              </div>
              <div>
                <span className="bedsbathtext">{res.beds} Beds</span>
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
          </div>

          <div>
            <span className="searchresultinfo">
              Lively neighborhood. Close to metro 12, tram T2 and T3a and
              several bus stops.
            </span>
          </div>

          <Link
            to={`/homes&rooms/${res._id}`}
            className="linkStyle searchresultview"
          >
            <button className="searchresultviewbtn">
              View Property
              <MdOutlineHomeWork className="searchresultviewbtnicon" />
            </button>
          </Link>
        </div>

        <div className="searchresultimgsection">
          <div>
            <img
              className="searchresultimg"
              src="https://images.unsplash.com/photo-1683009427513-28e163402d16?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </SearchPageCardStyles>
    </>
  );
};

export default SearchPageCard;
