import React, { useRef, useState } from "react";
import { CountryListStyle } from "./CountryListStyle";
import { countryList } from "../../datas/countryList";
import { FaArrowRight } from "react-icons/fa";

const CountryList = () => {
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
      <CountryListStyle>
        <div>
          <h2>Popular Country Spots</h2>
        </div>
        <div className="countryboxsection" ref={elementRef}>
          {countryList.map((country) => (
            <div className="countrybox" key={country.id}>
              <img src={country.imgSrc} alt="" className="countryimage" />
              <span className="countryname">{country.countryName}</span>
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
      </CountryListStyle>
    </>
  );
};

export default CountryList;

/**
 * 
  <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
 */
