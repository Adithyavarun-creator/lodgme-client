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

const HouseCard = ({ houseCards, title }) => {
  const { t } = useTranslation();
  console.log(houseCards);

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
      {/* <div
        animate={{ x: 100 }}
        transition={{ delay: 1 }}
        className="toprated_house_cardbox"
      >
        {houseCards && houseCards.length ? (
          houseCards?.map((card) => (
            <Link
              to={`/homes&rooms/${card.id}`}
              className="toprated_house_card linkStyle"
              key={card.id}
            >
              <Slider {...settings}>
                {card.images ? (
                  card.images.map((image) => (
                    <div className="" key={image.id}>
                      <img
                        src={image.imgSrc}
                        alt=""
                        className="toprated_house_cardimg"
                      />
                    </div>
                  ))
                ) : (
                  <Spinner />
                )}
              </Slider>

              {card.userImg && (
                <div className="toprated_favoriteuser">
                  <span className="">
                    <img src={card.userImg} alt="" className="toprated_user" />
                  </span>
                </div>
              )}

              <div className="toprated_house_cardsubs">
                <div className="housetitlebox">
                  {card.caption && (
                    <div>
                      <h3 className="toprated_house_cardmaintext">
                        {card.caption}
                      </h3>
                    </div>
                  )}
                  <div>
                    {card.ratingCount && (
                      <div className="flex">
                        <FaStar className="toprated_staricon" />
                        &nbsp;{" "}
                        <span className="toprated_ratingcount">
                          {card.ratingCount}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {card.location && (
                  <div className="toprated_locationbox">
                    <span>
                      <RiMapPin2Fill className="toprated_locationicon" />
                    </span>
                    <span> {card.location}</span>
                  </div>
                )}

                {card.subLocation && (
                  <div className="toprated_locationbox">
                    <span>{card.subLocation} </span>
                  </div>
                )}

                {card.priceperNight && (
                  <div className="flex">
                    <strong className="toprated_pricebox">
                      ${card.priceperNight}/night
                    </strong>
                  </div>
                )}
                <div className="toprated_reviewbox"></div>
              </div>
            </Link>
          ))
        ) : (
          <Spinner />
        )}
      </div>
      <div className="flex-center mt-10 mb-20">
        <Button title="Search More" />
      </div> */}
      <div
        animate={{ x: 100 }}
        transition={{ delay: 1 }}
        className="toprated_house_cardbox"
      >
        {houseCards && houseCards.length ? (
          houseCards?.map((card) => (
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
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                {card.country && (
                  <div className="toprated_locationbox">
                    <span>
                      <RiMapPin2Fill className="toprated_locationicon" />
                    </span>
                    <span>{card.country}</span>
                  </div>
                )}

                {card.type && (
                  <div className="toprated_locationbox">
                    <span
                      className="toprated_pricebox"
                      style={{ fontWeight: "bolder" }}
                    >
                      {card.type}{" "}
                    </span>
                  </div>
                )}

                <div className="toprated_locationbox">
                  <span style={{ fontWeight: "bolder" }}>
                    From&nbsp;
                    {moment(card.availableFrom).format(
                      "MMMM Do YYYY"
                    )} until {moment(card.availableTill).format("MMMM Do YYYY")}{" "}
                  </span>
                </div>

                {card.pricePerNight && (
                  <div className="flex">
                    <strong className="toprated_pricebox">
                      ${card.pricePerNight}/night
                    </strong>
                  </div>
                )}
                <div className="toprated_reviewbox"></div>
              </div>
            </Link>
          ))
        ) : (
          <Spinner />
        )}
      </div>
      <div className="flex-center mt-10 mb-20">
        <Button title="Search More" />
      </div>
    </HouseCardStyles>
  );
};

export default HouseCard;
