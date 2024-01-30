import React, { useEffect, useRef, useState } from "react";
import { HouseTypeStyle } from "./HouseTypeStyle";
import { countryList } from "../../datas/countryList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { houseTypes } from "../../datas/houseTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HouseType = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  return (
    <>
      <HouseTypeStyle>
        <div className="countryboxsection" ref={elementRef}>
          {houseTypes.map((house,i) => (
            <div className="countrybox" key={i}>
              <FontAwesomeIcon icon={house.icon} alt="" className="countryimage" />
              <span className="countryname">{house.type}</span>
            </div>
          ))}
        </div>
        <div className="nextarrow">
          <FaArrowRight
            className="arrowicon"
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 25, 150, 10);
            }}
          />
        </div>
      </HouseTypeStyle>
    </>
  );
};

export default HouseType;
