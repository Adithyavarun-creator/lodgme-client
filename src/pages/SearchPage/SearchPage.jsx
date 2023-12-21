import React from "react";
import { SearchPageStyles } from "./SearchPageStyles";
import SearchBox from "../../components/SearchBox/SearchBox";
import {
  FaLocationDot,
  FaBath,
  FaBed,
  FaUserCheck,
  FaTag,
} from "react-icons/fa6";
import { IoBedSharp, IoBed, IoPricetags } from "react-icons/io5";
import { MdEuroSymbol, MdOutlineHomeWork } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { PiArmchairFill } from "react-icons/pi";
import { MdVerified } from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../components/Button/Button";

const SearchPage = () => {
  const sampleImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1701730282717-f6478c8f2186?q=80&w=3862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1702470170564-22dd352f5b88?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1685053085344-c6171e7ddafa?q=80&w=3928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <SearchPageStyles>
      <div className="search-box">
        <SearchBox />
      </div>
      <div className="search-resultsbox">
        <div>
          <h2>5 results for your search </h2>
        </div>

        <div className="searchresultbox">
          <div className="searchresultsection">
            <div>
              <h2>An Amazing house at France </h2>
            </div>
            <div className="searchpricebox">
              <MdEuroSymbol className="searchpriceicon" />
              <span className="searchhouseamount">200/night</span>
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
            <div className="searchuserverified">
              <MdVerified
                className="searchuserverifiedicon"
                title="User verified by Lodgeme"
              />
            </div>
            <div>
              <h3>A beautiful view from the world of Love</h3>
            </div>
            <div className="flex">
              <FaLocationDot fill="#015151" />
              <span className="searchresultcountry">France</span>
            </div>

            <div className="bedsbaths">
              <div className="bedbathamenities">
                <div className="">
                  <PiArmchairFill className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">1 Living Room</span>
                </div>
              </div>
              <div className="bedbathamenities">
                <div className="">
                  <IoBedSharp className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">2 Beds</span>
                </div>
              </div>

              <div className="bedbathamenities">
                <div className="">
                  <FaBath className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">2 Baths</span>
                </div>
              </div>
            </div>

            <div>
              <span className="searchresultinfo">
                Lively neighborhood. Close to metro 12, tram T2 and T3a and
                several bus stops.
              </span>
            </div>

            <div className="searchresultview">
              <button className="searchresultviewbtn">
                View Property{" "}
                <MdOutlineHomeWork className="searchresultviewbtnicon" />
              </button>
            </div>
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
        </div>

        <div className="searchresultbox">
          <div className="searchresultsection">
            <div>
              <h2>An Amazing house at France </h2>
            </div>
            <div className="searchpricebox">
              <MdEuroSymbol className="searchpriceicon" />
              <span className="searchhouseamount">200/night</span>
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
            <div className="searchuserverified">
              <MdVerified
                className="searchuserverifiedicon"
                title="User verified by Lodgeme"
              />
            </div>
            <div>
              <h3>A beautiful view from the world of Love</h3>
            </div>
            <div className="flex">
              <FaLocationDot fill="#015151" />
              <span className="searchresultcountry">France</span>
            </div>

            <div className="bedsbaths">
              <div className="bedbathamenities">
                <div className="">
                  <PiArmchairFill className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">1 Living Room</span>
                </div>
              </div>
              <div className="bedbathamenities">
                <div className="">
                  <IoBedSharp className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">2 Beds</span>
                </div>
              </div>

              <div className="bedbathamenities">
                <div className="">
                  <FaBath className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">2 Baths</span>
                </div>
              </div>
            </div>

            <div>
              <span className="searchresultinfo">
                Lively neighborhood. Close to metro 12, tram T2 and T3a and
                several bus stops.
              </span>
            </div>

            <div className="searchresultview">
              <button className="searchresultviewbtn">
                View Property{" "}
                <MdOutlineHomeWork className="searchresultviewbtnicon" />
              </button>
            </div>
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
        </div>

        <div className="searchresultbox">
          <div className="searchresultsection">
            <div>
              <h2>An Amazing house at France </h2>
            </div>
            <div className="searchpricebox">
              <MdEuroSymbol className="searchpriceicon" />
              <span className="searchhouseamount">200/night</span>
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
            <div className="searchuserverified">
              <MdVerified
                className="searchuserverifiedicon"
                title="User verified by Lodgeme"
              />
            </div>
            <div>
              <h3>A beautiful view from the world of Love</h3>
            </div>
            <div className="flex">
              <FaLocationDot fill="#015151" />
              <span className="searchresultcountry">France</span>
            </div>

            <div className="bedsbaths">
              <div className="bedbathamenities">
                <div className="">
                  <PiArmchairFill className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">1 Living Room</span>
                </div>
              </div>
              <div className="bedbathamenities">
                <div className="">
                  <IoBedSharp className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">2 Beds</span>
                </div>
              </div>

              <div className="bedbathamenities">
                <div className="">
                  <FaBath className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">2 Baths</span>
                </div>
              </div>
            </div>

            <div>
              <span className="searchresultinfo">
                Lively neighborhood. Close to metro 12, tram T2 and T3a and
                several bus stops.
              </span>
            </div>

            <div className="searchresultview">
              <button className="searchresultviewbtn">
                View Property{" "}
                <MdOutlineHomeWork className="searchresultviewbtnicon" />
              </button>
            </div>
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
        </div>

        <div className="searchresultbox">
          <div className="searchresultsection">
            <div>
              <h2>An Amazing house at France </h2>
            </div>
            <div className="searchpricebox">
              <MdEuroSymbol className="searchpriceicon" />
              <span className="searchhouseamount">200/night</span>
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
            <div className="searchuserverified">
              <MdVerified
                className="searchuserverifiedicon"
                title="User verified by Lodgeme"
              />
            </div>
            <div>
              <h3>A beautiful view from the world of Love</h3>
            </div>
            <div className="flex">
              <FaLocationDot fill="#015151" />
              <span className="searchresultcountry">France</span>
            </div>

            <div className="bedsbaths">
              <div className="bedbathamenities">
                <div className="">
                  <PiArmchairFill className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">1 Living Room</span>
                </div>
              </div>
              <div className="bedbathamenities">
                <div className="">
                  <IoBedSharp className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">2 Beds</span>
                </div>
              </div>

              <div className="bedbathamenities">
                <div className="">
                  <FaBath className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">2 Baths</span>
                </div>
              </div>
            </div>

            <div>
              <span className="searchresultinfo">
                Lively neighborhood. Close to metro 12, tram T2 and T3a and
                several bus stops.
              </span>
            </div>

            <div className="searchresultview">
              <button className="searchresultviewbtn">
                View Property{" "}
                <MdOutlineHomeWork className="searchresultviewbtnicon" />
              </button>
            </div>
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
        </div>

        <div className="searchresultbox">
          <div className="searchresultsection">
            <div>
              <h2>An Amazing house at France </h2>
            </div>
            <div className="searchpricebox">
              <MdEuroSymbol className="searchpriceicon" />
              <span className="searchhouseamount">200/night</span>
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
            <div className="searchuserverified">
              <MdVerified
                className="searchuserverifiedicon"
                title="User verified by Lodgeme"
              />
            </div>
            <div>
              <h3>A beautiful view from the world of Love</h3>
            </div>
            <div className="flex">
              <FaLocationDot fill="#015151" />
              <span className="searchresultcountry">France</span>
            </div>

            <div className="bedsbaths">
              <div className="bedbathamenities">
                <div className="">
                  <PiArmchairFill className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">1 Living Room</span>
                </div>
              </div>
              <div className="bedbathamenities">
                <div className="">
                  <IoBedSharp className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">2 Beds</span>
                </div>
              </div>

              <div className="bedbathamenities">
                <div className="">
                  <FaBath className="bedsbathicon" />
                </div>
                <div>
                  <span className="bedsbathtext">2 Baths</span>
                </div>
              </div>
            </div>

            <div>
              <span className="searchresultinfo">
                Lively neighborhood. Close to metro 12, tram T2 and T3a and
                several bus stops.
              </span>
            </div>

            <div className="searchresultview">
              <button className="searchresultviewbtn">
                View Property{" "}
                <MdOutlineHomeWork className="searchresultviewbtnicon" />
              </button>
            </div>
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
        </div>
      </div>
    </SearchPageStyles>
  );
};

export default SearchPage;
