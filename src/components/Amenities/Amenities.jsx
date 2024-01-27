import React from "react";
import { AmenitiesStyle } from "./AmenitiesStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToCity,
  faBanSmoking,
  faDoorOpen,
  faElevator,
  faFan,
  faFireBurner,
  faHotTubPerson,
  faIcicles,
  faJugDetergent,
  faKitchenSet,
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
  faTreeCity,
} from "@fortawesome/free-solid-svg-icons";
import { IoIosCloseCircle } from "react-icons/io";

const Amenities = ({ houseData, setShowAmenity }) => {
  return (
    <AmenitiesStyle>
      <div className="close-box">
        <IoIosCloseCircle
          className="close-icon"
          onClick={() => setShowAmenity(false)}
        />
      </div>
      <div className="amenitycolumn">
        <div className="amenitycolumn1">
          <div>
            <h2>Amenities Provided</h2>
          </div>
          {houseData?.checkedAmenities
            .slice()
            .sort()
            .map((amenity, i) => (
              <div className="amenitycontent" key={i}>
                {amenity && (
                  <div>
                    <FontAwesomeIcon
                      className="amenityicon"
                      icon={
                        amenity === "Breakfast"
                          ? faUtensils
                          : "" || amenity === "Lunch"
                          ? faUtensils
                          : "" || amenity === "Kitchen"
                          ? faKitchenSet
                          : "" || amenity === "Workspace"
                          ? faHouseLaptop
                          : "" || amenity === "Dinner"
                          ? faUtensils
                          : "" || amenity === "City View"
                          ? faArrowRightToCity
                          : "" || amenity === "Wifi"
                          ? faWifi
                          : "" || amenity === "Lift"
                          ? faElevator
                          : "" || amenity === "Private Balcony"
                          ? faDoorOpen
                          : "" || amenity === "Washing Machine"
                          ? faJugDetergent
                          : "" || amenity === "Hair Dryer"
                          ? faPlug
                          : "" || amenity === "Soaps"
                          ? faSoap
                          : "" || amenity === "Shower Gel"
                          ? faSprayCanSparkles
                          : "" || amenity === "Bathroom Heater"
                          ? faHotTubPerson
                          : "" || amenity === "Pillows and Blankets"
                          ? faMattressPillow
                          : "" || amenity === "Iron"
                          ? faShirt
                          : "" || amenity === "Air Conditioning"
                          ? faTemperatureLow
                          : "" || amenity === "Fan"
                          ? faFan
                          : "" || amenity === "Kettle"
                          ? faMugHot
                          : "" || amenity === "HDTV"
                          ? faTv
                          : "" || amenity === "Smoke Alaram"
                          ? faBanSmoking
                          : "" || amenity === "Refrigirator"
                          ? faIcicles
                          : "" || amenity === "Cooking Applicances"
                          ? faFireBurner
                          : "" || amenity === "Microwave"
                          ? faSquare
                          : "" || amenity === "Dishwasher"
                          ? faHandsBubbles
                          : "" || amenity === "Dining Table"
                          ? faTable
                          : "" || amenity === "Host Assistance"
                          ? faHandshakeAngle
                          : "" || amenity === "Sofa"
                          ? faCouch
                          : "" || amenity === "Tour Assistance"
                          ? faCarOn
                          : "" || amenity === "Parking"
                          ? faSquareParking
                          : "" || amenity === "Room Service"
                          ? faPersonChalkboard
                          : ""
                      }
                    />
                  </div>
                )}
                <div>
                  <li className="">{amenity}</li>
                </div>
              </div>
            ))}
        </div>

        {/* <div className="amenitycolumn1">
          <div>
            <h2>Amenities Not Provided</h2>
          </div>
          {houseData?.checkedAmenities?.map((amenity, i) => (
            <div className="amenitycontent line-through" key={i}>
              {amenity && (
                <div>
                  <FontAwesomeIcon
                    className="amenityicon line-through"
                    icon={
                      amenity === "Breakfast"
                        ? faUtensils
                        : "" || amenity === "Lunch"
                        ? faUtensils
                        : "" || amenity === "Kitchen"
                        ? faKitchenSet
                        : "" || amenity === "Workspace"
                        ? faHouseLaptop
                        : "" || amenity === "Dinner"
                        ? faUtensils
                        : "" || amenity === "City View"
                        ? faTreeCity
                        : "" || amenity === "Wifi"
                        ? faWifi
                        : "" || amenity === "Lift"
                        ? faElevator
                        : "" || amenity === "Private Balcony"
                        ? faDoorOpen
                        : "" || amenity === "Washing Machine"
                        ? faJugDetergent
                        : "" || amenity === "Hair Dryer"
                        ? faPlug
                        : "" || amenity === "Soaps"
                        ? faSoap
                        : "" || amenity === "Shower Gel"
                        ? faSprayCanSparkles
                        : "" || amenity === "Bathroom Heater"
                        ? faHotTubPerson
                        : "" || amenity === "Pillows and Blankets"
                        ? faMattressPillow
                        : "" || amenity === "Iron"
                        ? faShirt
                        : "" || amenity === "Air Conditioning"
                        ? faTemperatureLow
                        : "" || amenity === "Fan"
                        ? faFan
                        : "" || amenity === "Kettle"
                        ? faMugHot
                        : "" || amenity === "HDTV"
                        ? faTv
                        : "" || amenity === "Smoke Alaram"
                        ? faBanSmoking
                        : "" || amenity === "Refrigirator"
                        ? faIcicles
                        : "" || amenity === "Cooking Applicances"
                        ? faFireBurner
                        : "" || amenity === "Microwave"
                        ? faSquare
                        : "" || amenity === "Dishwasher"
                        ? faHandsBubbles
                        : "" || amenity === "Dining Table"
                        ? faTable
                        : "" || amenity === "Host Assistance"
                        ? faHandshakeAngle
                        : "" || amenity === "Sofa"
                        ? faCouch
                        : "" || amenity === "Tour Assistance"
                        ? faCarOn
                        : "" || amenity === "Parking"
                        ? faSquareParking
                        : "" || amenity === "Room Service"
                        ? faPersonChalkboard
                        : ""
                    }
                  />
                </div>
              )}
              <div>
                <li className="">{amenity}</li>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </AmenitiesStyle>
  );
};

export default Amenities;
