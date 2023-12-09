import React from "react";
import Button from "../Button/Button";

const SingleHouseImages = ({ data, setShowImages, showImages }) => {
  //console.log(data[0].imgSrc);

  return (
    <div>
      <div className="singlepageposition">
        <div className="item-1">
          <img
            src={
              data
                ? data[0].imgSrc
                : "https://www.ssn.no/build/images/temp/placeholder-house.5fe09041.png"
            }
            alt=""
            className="imgsubgrid1"
          />
        </div>

        <div className="item-2">
          <div>
            <img
              src={
                data
                  ? data[1]?.imgSrc
                  : "https://www.ssn.no/build/images/temp/placeholder-house.5fe09041.png"
              }
              alt=""
              className="imgsubgrid2"
            />
          </div>
          <div>
            <img
              src={
                data
                  ? data[2]?.imgSrc
                  : "https://www.ssn.no/build/images/temp/placeholder-house.5fe09041.png"
              }
              alt=""
              className="imgsubgrid2"
            />
          </div>
          <div>
            <img
              src={
                data
                  ? data[3]?.imgSrc
                  : "https://www.ssn.no/build/images/temp/placeholder-house.5fe09041.png"
              }
              alt=""
              className="imgsubgrid2"
            />
          </div>
          <div>
            <img
              src={
                data
                  ? data[4]?.imgSrc
                  : "https://www.ssn.no/build/images/temp/placeholder-house.5fe09041.png"
              }
              alt=""
              className="imgsubgrid2"
            />
          </div>
        </div>

        <div className="singlepageshowallimages">
          <Button
            title="View All Photos"
            onClick={() => setShowImages(!showImages)}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleHouseImages;
