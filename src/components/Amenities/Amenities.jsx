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
      {/* <div>
          <h2>List of Amenities available and not available</h2>
        </div> */}
      <div className="amenitycolumn">
        <div className="amenitycolumn1">
          <div>
            <h2>Amenities Provided</h2>
          </div>
          {houseData?.amenitiesIncluded?.map((amenity, i) => (
            <div className="amenitycontent" key={i}>
              {amenity.value && (
                <div>
                  <FontAwesomeIcon
                    className="amenityicon"
                    icon={
                      amenity.value === "Breakfast"
                        ? faUtensils
                        : "" || amenity.value === "Lunch"
                        ? faUtensils
                        : "" || amenity.value === "Kitchen"
                        ? faKitchenSet
                        : "" || amenity.value === "Workspace"
                        ? faHouseLaptop
                        : "" || amenity.value === "Dinner"
                        ? faUtensils
                        : "" || amenity.value === "City View"
                        ? faArrowRightToCity
                        : "" || amenity.value === "Wifi"
                        ? faWifi
                        : "" || amenity.value === "Lift"
                        ? faElevator
                        : "" || amenity.value === "Private Balcony"
                        ? faDoorOpen
                        : "" || amenity.value === "Washing Machine"
                        ? faJugDetergent
                        : "" || amenity.value === "Hair Dryer"
                        ? faPlug
                        : "" || amenity.value === "Soaps"
                        ? faSoap
                        : "" || amenity.value === "Shower Gel"
                        ? faSprayCanSparkles
                        : "" || amenity.value === "Bathroom Heater"
                        ? faHotTubPerson
                        : "" || amenity.value === "Pillows and Blankets"
                        ? faMattressPillow
                        : "" || amenity.value === "Iron"
                        ? faShirt
                        : "" || amenity.value === "Air Conditioning"
                        ? faTemperatureLow
                        : "" || amenity.value === "Fan"
                        ? faFan
                        : "" || amenity.value === "Kettle"
                        ? faMugHot
                        : "" || amenity.value === "HDTV"
                        ? faTv
                        : "" || amenity.value === "Smoke Alaram"
                        ? faBanSmoking
                        : "" || amenity.value === "Refrigirator"
                        ? faIcicles
                        : "" || amenity.value === "Cooking Applicances"
                        ? faFireBurner
                        : "" || amenity.value === "Microwave"
                        ? faSquare
                        : "" || amenity.value === "Dishwasher"
                        ? faHandsBubbles
                        : "" || amenity.value === "Dining Table"
                        ? faTable
                        : "" || amenity.value === "Host Assistance"
                        ? faHandshakeAngle
                        : "" || amenity.value === "Sofa"
                        ? faCouch
                        : "" || amenity.value === "Tour Assistance"
                        ? faCarOn
                        : "" || amenity.value === "Parking"
                        ? faSquareParking
                        : "" || amenity.value === "Room Service"
                        ? faPersonChalkboard
                        : ""
                    }
                  />
                </div>
              )}
              <div>
                <li className="">{amenity.value}</li>
              </div>
            </div>
          ))}
        </div>

        <div className="amenitycolumn1">
          <div>
            <h2>Amenities Not Provided</h2>
          </div>
          {houseData?.amenitiesNotIncluded?.map((amenity, i) => (
            <div className="amenitycontent line-through" key={i}>
              {amenity.value && (
                <div>
                  <FontAwesomeIcon
                    className="amenityicon line-through"
                    icon={
                      amenity.value === "Breakfast"
                        ? faUtensils
                        : "" || amenity.value === "Lunch"
                        ? faUtensils
                        : "" || amenity.value === "Kitchen"
                        ? faKitchenSet
                        : "" || amenity.value === "Workspace"
                        ? faHouseLaptop
                        : "" || amenity.value === "Dinner"
                        ? faUtensils
                        : "" || amenity.value === "City View"
                        ? faTreeCity
                        : "" || amenity.value === "Wifi"
                        ? faWifi
                        : "" || amenity.value === "Lift"
                        ? faElevator
                        : "" || amenity.value === "Private Balcony"
                        ? faDoorOpen
                        : "" || amenity.value === "Washing Machine"
                        ? faJugDetergent
                        : "" || amenity.value === "Hair Dryer"
                        ? faPlug
                        : "" || amenity.value === "Soaps"
                        ? faSoap
                        : "" || amenity.value === "Shower Gel"
                        ? faSprayCanSparkles
                        : "" || amenity.value === "Bathroom Heater"
                        ? faHotTubPerson
                        : "" || amenity.value === "Pillows and Blankets"
                        ? faMattressPillow
                        : "" || amenity.value === "Iron"
                        ? faShirt
                        : "" || amenity.value === "Air Conditioning"
                        ? faTemperatureLow
                        : "" || amenity.value === "Fan"
                        ? faFan
                        : "" || amenity.value === "Kettle"
                        ? faMugHot
                        : "" || amenity.value === "HDTV"
                        ? faTv
                        : "" || amenity.value === "Smoke Alaram"
                        ? faBanSmoking
                        : "" || amenity.value === "Refrigirator"
                        ? faIcicles
                        : "" || amenity.value === "Cooking Applicances"
                        ? faFireBurner
                        : "" || amenity.value === "Microwave"
                        ? faSquare
                        : "" || amenity.value === "Dishwasher"
                        ? faHandsBubbles
                        : "" || amenity.value === "Dining Table"
                        ? faTable
                        : "" || amenity.value === "Host Assistance"
                        ? faHandshakeAngle
                        : "" || amenity.value === "Sofa"
                        ? faCouch
                        : "" || amenity.value === "Tour Assistance"
                        ? faCarOn
                        : "" || amenity.value === "Parking"
                        ? faSquareParking
                        : "" || amenity.value === "Room Service"
                        ? faPersonChalkboard
                        : ""
                    }
                  />
                </div>
              )}
              <div>
                <li className="">{amenity.value}</li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AmenitiesStyle>
  );
};

export default Amenities;
