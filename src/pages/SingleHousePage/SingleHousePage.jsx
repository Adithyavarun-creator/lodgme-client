import React, { useEffect, useRef, useState } from "react";
import { SingleHousePageStyles } from "./SingleHousePageStyles";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  FaUsers,
  FaUsersSlash,
  FaBath,
  FaWifi,
  FaStar,
  FaToilet,
  FaSmokingBan,
  FaBabyCarriage,
  FaSmoking,
} from "react-icons/fa";
import { RWebShare } from "react-web-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FaKitchenSet,
  FaTreeCity,
  FaElevator,
  FaToiletPortable,
  FaArrowLeftLong,
  FaCalendarCheck,
  FaChildren,
} from "react-icons/fa6";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { GiPartyPopper } from "react-icons/gi";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";
import {
  PiElevatorLight,
  PiShareFatFill,
  PiBowlFoodBold,
} from "react-icons/pi";
import { SiKeepassxc } from "react-icons/si";
import {
  MdFavoriteBorder,
  MdBalcony,
  MdLocationPin,
  MdEuroSymbol,
  MdBathroom,
  MdOutlinePets,
} from "react-icons/md";
import { IoBedSharp, IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { PiArmchairFill } from "react-icons/pi";
import Mapbox from "../../components/MapBox/MapBox";
import { DateRangePicker, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays, differenceInDays } from "date-fns";
import format from "date-fns/format";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Select from "react-select";
import { MdCancel } from "react-icons/md";
import { BiSolidBlanket } from "react-icons/bi";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import { apartmentDatas } from "../../datas/apartmentDatas";
import SingleHouseImages from "../../components/SingleHousePage/SingleHouseImages";
import { baseUrl, clientUrl } from "../../baseUrl/url";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setBookingAmount,
  setNumberofPersons,
  setSelectedHouse,
  setStayingDays,
} from "../../redux/user/userSlice";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import AddReview from "../../components/AddReview/AddReview";
import ShowAllReview from "../../components/ShowAllReview/ShowAllReview";
import {
  faArrowRightToCity,
  faBanSmoking,
  faBuildingCircleCheck,
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
} from "@fortawesome/free-solid-svg-icons";
import Amenities from "../../components/Amenities/Amenities";

const SingleHousePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //datas
  const [data, setData] = useState(null);
  const { token } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [noPersons, setnoPersons] = useState(1);
  const [value, setValue] = useState("");
  const [showImages, setShowImages] = useState(false);

  const [diffInDays, setDiffInDays] = useState(1);
  const [houseData, setHousedata] = useState({});
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [noOfdays, setNoofdays] = useState(1);
  const [showAllReview, setShowAllReview] = useState(false);
  const [addReview, setAddReview] = useState(false);
  const [showAmenity, setShowAmenity] = useState(false);

  const [postedBy, setPostedBy] = useState({});
  const [avg, setAvg] = useState(0);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    const diff = differenceInDays(
      ranges.selection.endDate,
      ranges.selection.startDate
    );
    setDiffInDays(diff);
  };

  useEffect(() => {
    const fetchListing = async () => {
      const res = await axios.get(`${baseUrl}/api/get/${id}`);
      setHousedata(res.data.listing);
      setPostedBy(res.data.user);
      dispatch(setSelectedHouse(res.data.listing));
      // const latitude = res.data.listing.mapLocation[0].lat;
      // setLat(latitude);
      // const longitude = res.data.listing.mapLocation[0].lng;
      // setLng(longitude);
      const avgrating = res.data?.listing?.reviews?.map((r) => r.rating);
      setAvg(avgrating);
    };
    fetchListing();
  }, [id]);

  const dateRef = useRef();
  const reviewRef = useRef();
  const mapRef = useRef();

  const personOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
  ];

  const onClick = () => {
    dateRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const clickReview = () => {
    reviewRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const clickMap = () => {
    mapRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const changeHandler = (value) => {
    setValue(value);
  };
  const changePersonHandler = (value) => {
    setnoPersons(value);
  };

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const apartment = apartmentDatas.find((p) => p.id === parseInt(id));
    if (apartment) {
      setData(apartment);
    }
  }, [id]);

  const styles = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#ffffff",
      };
    },
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#015151" : "#fff",
      backgroundColor: state.isSelected ? "#fff" : "#015151",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#015151",
      border: "none",
      boxShadow: "none",
      color: "#ffffff",
      fontSize: "16px",
      height: "40px",
      textAlign: "center",
      width: "100%",

      "@media only screen and (min-width: 1200px)": {
        ...styles["@media only screen and (min-width: 1200px)"],
        fontSize: "14px",
        height: "40px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        padding: "0px",
        width: "100%",

        // width: "300px",
      },
      "@media (min-width: 768px) and (max-width: 1024px) ": {
        ...styles["@media (min-width: 768px) and (max-width: 1024px) "],
        fontSize: "12px",
        height: "25px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        textAlign: "center",
        padding: "0px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      },
      "@media (min-width: 481px) and (max-width: 767px) ": {
        ...styles["@media (min-width: 481px) and (max-width: 767px) "],
        fontSize: "8px",
        backgroundColor: "#015151",
        borderRadius: "10px",
        height: "30px",
        textAlign: "center",
        padding: "0px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      },
      "@media (min-width: 280px) and (max-width: 480px) ": {
        ...styles["@media (min-width: 280px) and (max-width: 480px) "],
        fontSize: "8px",
        backgroundColor: "#015151",
        height: "25px",
        borderRadius: "10px",
        textAlign: "center",
        width: "150px",
        padding: "0px",
      },
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  const lodgmeCharge = 100;

  const bookingAmount = houseData.pricePerNight * diffInDays + lodgmeCharge;
  dispatch(setBookingAmount(bookingAmount));
  dispatch(setStayingDays(diffInDays));
  dispatch(setNumberofPersons(noPersons));

  // const url = `https://server-api-q17g.onrender.com/homes&rooms/${houseData._id}`;
  const shareDetails = {
    url: `${clientUrl}/homes&rooms/${houseData._id}`,
    title: houseData.title,
    text: "Listing from Lodgeme",
  };

  const shareFunction = async () => {
    try {
      await navigator.share(shareDetails);
      toast.success("Link copied to clipboard !");
    } catch (error) {
      console.log(error);
    }
  };

  const bookingPreviewbtn = () => {
    if (moment(range[0].endDate).format() > houseData.availableTill) {
      toast.error(
        "You need to change the dates for this house, please look a bit above for the available dates"
      );
      return;
    }

    navigate(
      `/booking-preview?title=${
        houseData?.title
      }&stayDays=${diffInDays}&fromdate=${range[0].startDate}&todate=${
        range[0].endDate
      }&persons=${noPersons.value ? noPersons.value : 1}&country=${
        houseData.locatedCountry
      }`
    );
  };


  if (!id) {
    return <Spinner />;
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Lodgeme House and Rooms</title>
        </Helmet>
        <SingleHousePageStyles>
          <div className="singlepagetitlebox">
            <div className="singlepageaddressbox">
              <h2 className="singlepagetitletext flex">
                {houseData?.title ? houseData?.title : "A beautiful house"}{" "}
                <MdLocationPin
                  className="rating"
                  style={{ color: "#EA4335" }}
                  onClick={clickMap}
                />
              </h2>

              <div className="singlepagetitlecontent" onClick={clickReview}>
                <span className="singlepagelocationcountry">
                  {houseData?.city}, {houseData?.locatedCountry}
                </span>
              </div>

              <div className="singlepagetitlecontent" onClick={clickReview}>
                <FaStar className="rating" />
                <span className="ratingnumber">4.3</span>
              </div>
            </div>

            <div className="singlepagebookbox">
              <div>
                {!postedBy ? (
                  <Button title="Unavailable Now" disabled />
                ) : (
                  <Button title="Book Now" onClick={onClick} />
                )}
              </div>

              <div className="flex">
                <span className="amenitieslisttext">
                  <PiShareFatFill className="share-icon" />
                </span>
                <span className="sharetext" onClick={shareFunction}>
                  Share
                </span>
              </div>
            </div>
          </div>

          {/* singlehouseimages */}
          <SingleHouseImages
            data={houseData.houseImages}
            setShowImages={setShowImages}
            showImages={showImages}
          />

          {/* Image Carousel */}
          {showImages && houseData?.houseImages && (
            <div className="singlepagecarouselbox">
              <ImageCarousel
                setShowImages={setShowImages}
                showImages={showImages}
                images={houseData?.houseImages}
              />
            </div>
          )}

          {/* House Amenities */}
          <div className="singlepagehouserooms">
            <div className="singlepagehouseroomdetail">
              <FaUsers className="singlehouseroomdetailicon" />
              <span className="signlehouseroomtext">
                {houseData.travellers ? houseData?.travellers : "No"} Travellers
                Allowed
              </span>
            </div>
            <div className="singlepagehouseroomdetail">
              <IoBedSharp className="singlehouseroomdetailicon" />
              <span className="signlehouseroomtext">
                {houseData?.bedrooms ? houseData?.bedrooms : "No"} Bedrooms
              </span>
            </div>
            <div className="singlepagehouseroomdetail">
              <FaBath className="singlehouseroomdetailicon" />
              <span className="signlehouseroomtext">
                {houseData?.baths ? houseData?.baths : "No"} Baths
              </span>
            </div>
            <div className="singlepagehouseroomdetail">
              <MdBathroom className="singlehouseroomdetailicon" />
              <span className="signlehouseroomtext">
                {houseData?.bathroom ? houseData.bathroom : "No"} Bathrooms
              </span>
            </div>
          </div>

          {/* User Details */}
          <div className="">
            <div className="singlepagehousepublishbox">
              <div>
                <img src={postedBy?.profilePic} alt="" className="userimage" />
              </div>
              <div>
                <span className="singlepagehousepublishsubname">
                  <strong>
                    {postedBy?.firstname}&nbsp;
                    {postedBy?.lastname}
                  </strong>{" "}
                  is responsible service provider for this house
                </span>
              </div>
            </div>
          </div>

          <div>
            <h1 className="amenities-listheading">
              TITRE DE L’ANNONCE – {houseData?.roomtype} Type
            </h1>
          </div>

          <div className="singlepagecalendarcontent">
            <div>
              <article className="singlepagearticlecontent">
                {data?.houseamenities
                  ? data?.houseamenities
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit Accusamus autem accusantium ipsum alias cupiditate eos voluptatedolores deserunt, dolorum, exercitationem iste"}
              </article>
            </div>
          </div>

          <div className="amenities-box">
            {/* grid1 */}

            <div className="amenities-info">
              <div>
                <h2 className="amenities-listheading">
                  Information complémentaire
                </h2>
              </div>
              <div>
                <article className="singlepagearticlecontent">
                  {data?.description
                    ? data?.description
                    : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, vel veniam quod maiores dolorem officia, exercitationem veritatis blanditiis possimus neque quia totam ab nobis inventore quaerat. Error nemo dolorem eligendi odit nostrum pariatur laborum perspiciatis recusandae quod enim? Adipisc distinctio aperiam voluptas pariatur error rem itaque autem"}
                </article>
              </div>
            </div>
            {/* grid */}
            {/* <div className=""> */}
            <div className="amenities-list">
              <div>
                <h1 className="amenities-listheading">
                  Composition du logement
                </h1>
              </div>
              {houseData?.checkedAmenities
                ?.slice(0, 5)
                .sort()
                .map((amenity, i) => (
                  <div className="amenitiesrow" key={i}>
                    {amenity && (
                      <div>
                        <FontAwesomeIcon
                          className="amenitylisticon"
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
                      <li className="amenitieslisttext">{amenity}</li>
                    </div>
                  </div>
                ))}
              <div className="amenityallbtn">
                <Button
                  title="View Amenities Offered"
                  onClick={() => setShowAmenity(true)}
                />
              </div>
            </div>
            {/* </div> */}

            {showAmenity && (
              <div className="fullamenitiesbox">
                <Amenities
                  houseData={houseData}
                  setShowAmenity={setShowAmenity}
                />
              </div>
            )}
          </div>

          <div className="singlepagerulebox">
            <div className="houserule">
              {houseData.smoking ? (
                <FaSmoking className="houseruleicon" />
              ) : (
                <FaSmokingBan className="houseruleicon" />
              )}
              <span className="houseruletext">
                smoking {houseData.smoking ? "allowed" : "not allowed"}
              </span>
            </div>
            <div className="houserule">
              <GiPartyPopper className="houseruleicon" />
              <span className="houseruletext">
                parties {houseData.party ? "allowed" : "not allowed"}
              </span>
            </div>
            <div className="houserule">
              <MdOutlinePets className="houseruleicon" />
              <span className="houseruletext">
                pets {houseData.pets ? "allowed" : "not allowed"}
              </span>
            </div>
            <div className="houserule">
              <FaChildren className="houseruleicon" />
              <span className="houseruletext">
                children {houseData.children ? "allowed" : "not allowed"}
              </span>
            </div>
            <div className="houserule">
              <FaBabyCarriage className="houseruleicon" />
              <span className="houseruletext">
                babycots {houseData.babycots ? "allowed" : "not allowed"}
              </span>
            </div>

            <div className="houserule">
              <FaBabyCarriage className="houseruleicon" />
              <span className="houseruletext">
                extra babycots{" "}
                {houseData.addbabycot ? "allowed" : "not allowed"}
              </span>
            </div>
          </div>

          {/* Map Location Pin  */}
          <div className="singlepagemapbox" ref={mapRef}>
            <Mapbox lat={houseData?.latitude} lng={houseData?.longitude} />
          </div>

          {/* review box */}
          <div className="reviewandbookbox">
            <div className="singlepagereviewbox" ref={reviewRef}>
              <div>
                <h1 className="singlepagereviewheading">
                  Popular Customer Reviews based on stay
                </h1>
              </div>
              <div className="reviewpersonsbox">
                {houseData?.reviews?.length ? (
                  houseData?.reviews
                    ?.slice(0, 3)
                    .reverse()
                    .map((review) => (
                      <div className="reviewpersondetailbox" key={review._id}>
                        <div className="reviewuserbox">
                          <div>
                            <img
                              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                              alt=""
                              className="reviewpersonimg"
                            />
                          </div>

                          <div className="reviewwww">
                            <h2 className="reviewusername">
                              {review?.reviewerFirstname}&nbsp;
                              {review?.reviewerLastname}
                            </h2>
                            <span className="reviewusercountry">
                              {review?.reviewerCountry}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="reviewuserpostdated">
                            Posted on {moment(review.reviewedAt).format("LL")}
                          </span>
                        </div>
                        <div className="reviewuserating">
                          <FaStar className="reviewuserstar" />
                          <span className="reviewuserpostdate">
                            {review?.rating}
                          </span>
                        </div>
                        <div>
                          <article className="singlepagearticlecontent">
                            {review?.reviewDescription}
                          </article>
                        </div>
                      </div>
                    ))
                ) : (
                  <span className="totalbookingamount">No reviews added</span>
                )}

                {houseData?.reviews?.length ? (
                  <div>
                    <span
                      className="seeallreviews"
                      onClick={() => setShowAllReview(true)}
                    >
                      See All Reviews
                    </span>
                  </div>
                ) : (
                  ""
                )}

                <div>
                  <Button
                    title="Add Review"
                    onClick={() => setAddReview(true)}
                  />
                </div>
                {addReview && (
                  <AddReview
                    setAddReview={setAddReview}
                    addReview={addReview}
                    houseId={houseData._id}
                  />
                )}
              </div>
            </div>
            {postedBy ? (
              <div className="reservation-card" ref={dateRef}>
                <div className="reservationcardcontent">
                  <h1 className="singlepagereviewheading flex">
                    <MdEuroSymbol className="amenities-icon" />
                    {houseData.price ? houseData.price : "On talks"}
                    &nbsp;per day
                  </h1>
                </div>
                <div className="">
                  <div className="date-calendar-box">
                    <DateRange
                      onChange={(item) => {
                        setRange([item.selection]);
                        handleSelect(item);
                      }}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={1}
                      ranges={range}
                      direction="horizontal"
                      rangeColors={["#015151", "#015151", "#fed14c"]}
                      minDate={new Date()}
                    />
                  </div>
                </div>
                <div>
                  <div className="date-calendar-box">
                    <Select
                      placeholder="Select Persons"
                      options={personOptions}
                      value={noPersons}
                      onChange={changePersonHandler}
                      styles={styles}
                      name="person"
                    />
                  </div>
                </div>
                <div className="reservation-box">
                  <div className="reservation-details">
                    <div>
                      <span>
                        {houseData.price} x {diffInDays} nuits
                      </span>
                    </div>
                    <div>
                      <span>{houseData.price * diffInDays}</span>
                    </div>
                  </div>
                  <div className="reservation-details">
                    <div>
                      <span>Frais de manage</span>
                    </div>
                    <div>
                      <span>{lodgmeCharge}</span>
                    </div>
                  </div>

                  <div className="date-calendar-box ">
                    <hr className="h-line" />
                  </div>

                  <div className="reservation-details">
                    <div>
                      <span className="totalbookingamount">
                        Total hors taxes
                      </span>
                    </div>
                    <div>
                      <span className="totalbookingamount">
                        <strong className="flex">
                          <MdEuroSymbol className="amenities-icon" />
                          {houseData.price * diffInDays + lodgmeCharge}
                        </strong>
                      </span>
                    </div>
                  </div>

                  <div className="date-calendar-box ">
                    <hr className="h-line" />
                  </div>

                  {!postedBy?.profilePic ? (
                    <div className="date-calendar-box ">
                      <Button title="House Unavailable" disabled />
                    </div>
                  ) : (
                    <div className="date-calendar-box ">
                      <Button title="Book Now" onClick={bookingPreviewbtn} />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}

            {showAllReview && (
              <div>
                <ShowAllReview
                  houseData={houseData}
                  avg={avg}
                  setShowAllReview={setShowAllReview}
                />
              </div>
            )}
          </div>

          {postedBy && (
            <div>
              <div className="reviewownerdetail">
                <div className="reviewownerdetailgrid-1">
                  <div className="reviewownerdetailuserbox">
                    <div>
                      <img
                        className="hostimage"
                        src={
                          postedBy?.profilePic
                            ? postedBy?.profilePic
                            : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                        }
                        alt=""
                      />
                    </div>
                    <div className="hostdetails">
                      <h2 className="hostdetailname">
                        Serviced by &nbsp;{postedBy?.firstname}&nbsp;
                        {postedBy?.lastname}
                      </h2>
                      <span className="hostdetailsubname">
                        Joined on{" "}
                        {moment(postedBy?.createdAt).format("MMMM Do YYYY")}
                      </span>
                    </div>
                    {postedBy?.verified && (
                      <div className="verifybox">
                        <span>
                          <RiVerifiedBadgeFill />
                        </span>
                        <span>Verified</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <article className="singlepagearticlecontent">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Architecto minus dolorum odit fugit soluta doloremque
                      laboriosam velit assumenda neque sapiente dolore, ducimus
                      earum aliquam rerum nobis tempore exercitationem. Corporis
                      quod nesciunt id iusto neque quidem ducimus earum, sed aut
                      dolorem consequuntur voluptate repellat odio dolorum
                      quisquam ipsam repudiandae tempore officiis ad. Reiciendis
                      non, modi sapiente optio sint reprehenderit quisquam
                      tenetur deserunt. Iusto at exercitationem eligendi error
                      minima sit! Laborum, nihil.
                    </article>
                  </div>
                </div>

                <div className="reviewownerlist">
                  <div>
                    <span className="reviewowneradds">
                      Country: {postedBy?.country}
                    </span>
                  </div>
                  <div>
                    <span className="reviewowneradds">Response rate: 100%</span>
                  </div>
                  <div>
                    <span className="reviewowneradds">
                      Response time: within a few hours
                    </span>
                  </div>
                  {/* <div>
                  <Button title="Contact Service" />
                </div> */}
                </div>
              </div>
            </div>
          )}
          <Toaster position="top-center" reverseOrder={false} />
        </SingleHousePageStyles>
      </HelmetProvider>
    </>
  );
};

export default SingleHousePage;
