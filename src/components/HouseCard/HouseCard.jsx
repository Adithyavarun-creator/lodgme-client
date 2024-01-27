import { HouseCardStyles } from "./HouseCardStyles";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaHeart, FaHome } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import { MdOutlineEuro } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHotel,
  faHouseChimney,
  faLandmarkDome,
  faWheatAwn,
  faChessRook,
  faPersonShelter,
  faHouseSignal,
} from "@fortawesome/free-solid-svg-icons";

const HouseCard = ({ houseCards, title }) => {
  const { t } = useTranslation();

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
    <HouseCardStyles>
      <div
        animate={{ x: 100 }}
        transition={{ delay: 1 }}
        className="toprated_house_cardbox"
      >
        {houseCards && houseCards.length ? (
          houseCards
            ?.slice()
            .reverse()
            .map((card) => (
              <Link
                target="_blank"
                to={`/homes&rooms/${card._id}`}
                className="toprated_house_card linkStyle"
                key={card._id}
              >
                <Slider {...settings}>
                  {card.houseImages ? (
                    card.houseImages.map((image, i) => (
                      <div className="" key={i}>
                        <img
                          src={image}
                          alt=""
                          className="toprated_house_cardimg"
                        />
                      </div>
                    ))
                  ) : (
                    <Spinner />
                  )}
                </Slider>

                {/* <div className="toprated_favoriteuser">
                  <span className="">
                    <img
                      src={VerifiedLogo}
                      alt=""
                      className="toprated_user"
                      title="Lodgeme verified"
                    />
                  </span>
                </div> */}

                <div className="toprated_house_cardsubs">
                  <div className="housetitlebox">
                    {card.title && (
                      <div>
                        <h3 className="toprated_house_cardmaintext">
                          {card.title}
                        </h3>
                      </div>
                    )}
                    <div>
                      <div className="ratingflex">
                        <FaStar className="toprated_staricon" />
                        &nbsp;{" "}
                        <span className="toprated_ratingcount">
                          {card.ratingCount ? card.ratingCount : 4.3}
                        </span>
                      </div>
                    </div>
                  </div>
                  {card.locatedCountry && (
                    <div className="toprated_locationcountrybox flex">
                      <span>
                        <FaLocationDot className="toprated_locationicon" />
                      </span>
                      <span className="toprated_countryname">
                        {card.locatedCountry}
                      </span>
                    </div>
                  )}

                  {card.roomtype && (
                    <div className="toprated_locationbox flex">
                      <FontAwesomeIcon
                        icon={
                          card.roomtype === "Home"
                            ? faHouseChimney
                            : "" || card.roomtype === "Apartment"
                            ? faBuilding
                            : "" || card.roomtype === "Hotel"
                            ? faHotel
                            : "" || card.roomtype === "Apartment"
                            ? faBuilding
                            : "" || card.roomtype === "Hut"
                            ? faHouseSignal
                            : "" || card.roomtype === "Castle"
                            ? faChessRook
                            : "" || card.roomtype === "Mansion"
                            ? faHotel
                            : "" || card.roomtype === "Lodge"
                            ? faHotel
                            : "" || card.roomtype === "Tiny Home"
                            ? faPersonShelter
                            : "" || card.roomtype === "Farm House"
                            ? faWheatAwn
                            : "" || card.roomtype === "Dome"
                            ? faLandmarkDome
                            : ""
                        }
                        className="toprated_staricon"
                      />
                      <span className="toprated_countryname">
                        {card.roomtype}
                      </span>
                    </div>
                  )}

                  {card.price && (
                    <div className="flex">
                      <strong className="flex toprated_priceboxi">
                        <MdOutlineEuro />
                        {card.price}
                      </strong>
                    </div>
                  )}
                  <div className="toprated_reviewbox"></div>
                </div>
              </Link>
            ))
        ) : (
          <div className="notfoundhousebox">
            <h2 className="notfoundhouse">No houses published</h2>
          </div>
        )}
      </div>
      {houseCards.length ? (
        <div className="flex-center mt-10 mb-20">
          <Button title="Search More" />
        </div>
      ) : (
        ""
      )}
    </HouseCardStyles>
  );
};

export default HouseCard;
