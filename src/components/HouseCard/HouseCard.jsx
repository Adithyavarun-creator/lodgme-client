import { HouseCardStyles } from "./HouseCardStyles";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaHeart } from "react-icons/fa";
import Slider from "react-slick";
import { IoHeartDislikeOutline, IoEarth } from "react-icons/io5";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import moment from "moment";
import { MdOutlineEuro } from "react-icons/md";

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
          houseCards?.reverse().map((card) => (
            <Link
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

              {card.userImg ? (
                <div className="toprated_favoriteuser">
                  <span className="">
                    <img src={card.userImg} alt="" className="toprated_user" />
                  </span>
                </div>
              ) : (
                <div className="toprated_favoriteuser">
                  <span className="">
                    <img
                      src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
                      alt=""
                      className="toprated_user"
                    />
                  </span>
                </div>
              )}

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
                    <div className="flex">
                      <FaStar className="toprated_staricon" />
                      &nbsp;{" "}
                      <span className="toprated_ratingcount">
                        {card.ratingCount ? card.ratingCount : 4.3}
                      </span>
                    </div>
                  </div>
                </div>
                {card.locatedCountry && (
                  <div className="toprated_locationbox">
                    <span>
                      <RiMapPin2Fill className="toprated_locationicon" />
                    </span>
                    <span>{card.locatedCountry}</span>
                  </div>
                )}

                {card.type && (
                  <div className="toprated_locationbox">
                    <span
                      className="toprated_pricebox"
                      style={{ color: "#015151", fontWeight: "bolder" }}
                    >
                      {card.type}
                    </span>
                  </div>
                )}

                <div className="toprated_locationbox">
                  <span style={{ fontWeight: "bolder" }}>
                    {moment(card.availableFrom).format("L")} until{" "}
                    {moment(card.availableTill).format("L")}{" "}
                  </span>
                </div>

                {card.pricePerNight && (
                  <div className="flex">
                    <strong className="flex toprated_priceboxi">
                      <MdOutlineEuro />
                      {card.pricePerNight}/night
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
