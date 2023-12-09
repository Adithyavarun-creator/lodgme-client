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
} from "react-icons/fa";
import {
  FaKitchenSet,
  FaTreeCity,
  FaElevator,
  FaToiletPortable,
  FaArrowLeftLong,
} from "react-icons/fa6";
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
  MdApartment,
  MdCleaningServices,
  MdBalcony,
  MdLocationPin,
  MdClose,
} from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { GiModernCity, GiWashingMachine } from "react-icons/gi";
import { IoLocateSharp, IoBedSharp } from "react-icons/io5";
import { BsFillHouseFill } from "react-icons/bs";
import { PiArmchairFill } from "react-icons/pi";
import { RiTempHotFill } from "react-icons/ri";
import { TbHanger } from "react-icons/tb";
import Mapbox from "../../components/MapBox/MapBox";
import { DateRangePicker, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays, differenceInDays } from "date-fns";
import format from "date-fns/format";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Select from "react-select";
import { MdOutlineSmokeFree } from "react-icons/md";
import { BiSolidBlanket } from "react-icons/bi";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import { apartmentDatas } from "../../datas/apartmentDatas";
import SingleHouseImages from "../../components/SingleHousePage/SingleHouseImages";

const SingleHousePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //datas
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [noPersons, setnoPersons] = useState(1);
  const [value, setValue] = useState("");
  const [showImages, setShowImages] = useState(false);

  const [diffInDays, setDiffInDays] = useState(0);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  //date
  // const date1 = new Date(2020, 5, 1); // the later date
  // const date2 = new Date(2020, 2, 1); // the earlier date
  // const result = differenceInDays(range.startDate, range.endDate);
  //console.log(result);

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

  if (!id) {
    return <Spinner />;
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>
            {data?.caption
              ? data?.caption
              : "Paris-Montparnasse: superb 34 m2 studio"}
          </title>
        </Helmet>
        <SingleHousePageStyles>
          <div className="">
            <Button title="Back to Home" onClick={goBack} />
          </div>
          <div className="singlepagetitlebox">
            <div className="">
              <h2 className="singlepagetitletext flex">
                {data?.caption
                  ? data?.caption
                  : "Paris-Montparnasse: superb 34 m2 studio"}{" "}
                <MdLocationPin
                  className="rating"
                  style={{ color: "#EA4335" }}
                  onClick={clickMap}
                />
              </h2>

              <div className="singlepagetitlecontent" onClick={clickReview}>
                <FaStar className="rating" />
                <span className="ratingnumber">4.3</span>
              </div>
            </div>
            <div className="singlepagebookbox">
              <div>
                <Button title="Book Now" onClick={onClick} />
              </div>
              <div className="flex">
                <span className="amenitieslisttext">
                  <MdFavoriteBorder className="share-icon" />
                </span>
                <span className="sharetext">Save</span>
              </div>
              <div className="flex">
                <span className="amenitieslisttext">
                  <PiShareFatFill className="share-icon" />
                </span>
                <span className="sharetext">Share</span>
              </div>
            </div>
          </div>
          {/* singlehouseimages */}
          <SingleHouseImages
            data={data?.images}
            setShowImages={setShowImages}
            showImages={showImages}
          />

          {/* Image Carousel */}
          {showImages && (
            <div className="singlepagecarouselbox">
              <ImageCarousel
                setShowImages={setShowImages}
                showImages={showImages}
                images={data?.images}
              />
            </div>
          )}

          {/* House Amenities */}
          <div className="singlepagehouserooms">
            <div className="singlepagehouseroomdetail">
              <PiArmchairFill />
              <span>1 Living room</span>
            </div>
            <div className="singlepagehouseroomdetail">
              <IoBedSharp />
              <span>2 Beds</span>
            </div>
            <div className="singlepagehouseroomdetail">
              <FaBath />
              <span>2 Baths</span>
            </div>
            <div className="singlepagehouseroomdetail">
              <FaUsers />

              <span> 2 Visitors Allowed</span>
            </div>
            <div className="singlepagehouseroomdetail">
              <FaUsersSlash />
              <span>Visitors Not allowed</span>
            </div>
          </div>

          {/* User Details */}
          <div className="">
            <div className="singlepagehousepublishbox">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="userimage"
                />
              </div>
              <div>
                <span className="singlepagehousepublishsubname">
                  <strong>Jack</strong> is responsible service provider for this
                  house
                </span>
              </div>
            </div>
          </div>

          <div>
            <h1 className="amenities-listheading">
              TITRE DE L’ANNONCE – STUDIO/APPARTEMENT/VILLA/MAISON
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
                  {data?.additionalInfo
                    ? data?.additionalInfo
                    : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, vel veniam quod maiores dolorem officia, exercitationem veritatis blanditiis possimus neque quia totam ab nobis inventore quaerat. Error nemo dolorem eligendi odit nostrum pariatur laborum perspiciatis recusandae quod enim? Adipisc distinctio aperiam voluptas pariatur error rem itaque autem"}
                </article>
              </div>
            </div>
            {/* gird2 */}
            <div className="amenities-grid">
              <div className="amenities-list">
                <div>
                  <h1 className="amenities-listheading">
                    Composition du logement
                  </h1>
                </div>
                <div className="amenities-singlebox">
                  <PiBowlFoodBold className="amenities-icon" />
                  <span className="amenitieslisttext">Cuisine américaine</span>
                </div>

                <div className="amenities-singlebox">
                  <MdBalcony className="amenities-icon" />
                  <span className="amenitieslisttext">Terrasse</span>
                </div>

                <div className="amenities-singlebox">
                  <FaKitchenSet className="amenities-icon" />
                  <span className="amenitieslisttext">1 salle d'eau</span>
                </div>

                <div className="amenities-singlebox">
                  <FaToilet className="amenities-icon" />

                  <span className="amenitieslisttext">1 wc</span>
                </div>

                <div className="amenities-singlebox">
                  <IoBedSharp className="amenities-icon" />
                  <span className="amenitieslisttext">1 lit(s) double</span>
                </div>
              </div>

              <div className="amenities-list">
                <div>
                  <h1 className="amenities-listheading">Prestations</h1>
                </div>
                <div className="amenities-singlebox">
                  <FaTreeCity className="amenities-icon" />
                  <span className="amenitieslisttext">Wifi</span>
                </div>

                <div className="amenities-singlebox">
                  <FaWifi className="amenities-icon" />
                  <span className="amenitieslisttext">Télévision</span>
                </div>

                <div className="amenities-singlebox">
                  <MdOutlineSmokeFree className="amenities-icon" />
                  <span className="amenitieslisttext">
                    De préférence non fumeur
                  </span>
                </div>

                <div className="amenities-singlebox">
                  <FaKitchenSet className="amenities-icon" />
                  <span className="amenitieslisttext">
                    Appareils de cuisson
                  </span>
                </div>

                <div className="amenities-singlebox">
                  <BiSolidBlanket className="amenities-icon" />
                  <span className="amenitieslisttext">Linge fourni</span>
                </div>
                <div className="amenities-singlebox">
                  <SiKeepassxc className="amenities-icon" />
                  <span className="amenitieslisttext">Ménage possible</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Location Pin  */}
          <div className="singlepagemapbox" ref={mapRef}>
            <Mapbox />
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
                <div className="reviewpersondetailbox">
                  <div className="reviewuserbox">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="reviewpersonimg"
                      />
                    </div>

                    <div className="reviewwww">
                      <h2 className="reviewusername">John Doe</h2>
                      <span className="reviewusercountry">USA</span>
                    </div>
                  </div>
                  <div className="reviewuserating">
                    <FaStar className="reviewuserstar" />
                    <span className="reviewuserpostdate">4.2</span>
                    <span className="reviewuserpostdated">
                      Posted on October 4
                    </span>
                  </div>
                  <div>
                    <article className="singlepagearticlecontent">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque omnis ex cupiditate animi neque. Rem, consequatur
                      accusantium quis soluta voluptates excepturi perferendis
                      eaque laboriosam temporibus? Qui officiis suscipit
                      assumenda molestias facilis sit consequatur aspernatur
                      nostrum.
                    </article>
                  </div>
                </div>

                <div className="reviewpersondetailbox">
                  <div className="reviewuserbox">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="reviewpersonimg"
                      />
                    </div>

                    <div className="reviewwww">
                      <h2 className="reviewusername">John Doe</h2>
                      <span className="reviewusercountry">USA</span>
                    </div>
                  </div>
                  <div className="reviewuserating">
                    <FaStar className="reviewuserstar" />
                    <span className="reviewuserpostdate">4.2</span>
                    <span className="reviewuserpostdated">
                      Posted on October 4
                    </span>
                  </div>
                  <div>
                    <article className="singlepagearticlecontent">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque omnis ex cupiditate animi neque. Rem, consequatur
                      accusantium quis soluta voluptates excepturi perferendis
                      eaque laboriosam temporibus? Qui officiis suscipit
                      assumenda molestias facilis sit consequatur aspernatur
                      nostrum.
                    </article>
                  </div>
                </div>

                <div className="reviewpersondetailbox">
                  <div className="reviewuserbox">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="reviewpersonimg"
                      />
                    </div>

                    <div className="reviewwww">
                      <h2 className="reviewusername">John Doe</h2>
                      <span className="reviewusercountry">USA</span>
                    </div>
                  </div>
                  <div className="reviewuserating">
                    <FaStar className="reviewuserstar" />
                    <span className="reviewuserpostdate">4.2</span>
                    <span className="reviewuserpostdated">
                      Posted on October 4
                    </span>
                  </div>
                  <div>
                    <article className="singlepagearticlecontent">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque omnis ex cupiditate animi neque. Rem, consequatur
                      accusantium quis soluta voluptates excepturi perferendis
                      eaque laboriosam temporibus? Qui officiis suscipit
                      assumenda molestias facilis sit consequatur aspernatur
                      nostrum.
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="reservation-card" ref={dateRef}>
              <div>
                <h1 className="singlepagereviewheading">0504 par unit</h1>
              </div>
              <div className="">
                <div className="date-calendar-box">
                  <DateRange
                    onChange={(item) => setRange([item.selection])}
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
                    <span>4504 x 7 nuits</span>
                  </div>
                  <div>
                    <span>31526</span>
                  </div>
                </div>
                <div className="reservation-details">
                  <div>
                    <span>Frais de manage</span>
                  </div>
                  <div>
                    <span>1984</span>
                  </div>
                </div>

                <div className="date-calendar-box ">
                  <hr className="h-line" />
                </div>

                <div className="reservation-details">
                  <div>
                    <span>Total hors taxes</span>
                  </div>
                  <div>
                    <span>
                      <strong>33510</strong>
                    </span>
                  </div>
                </div>

                <div className="date-calendar-box ">
                  <hr className="h-line" />
                </div>

                <div className="date-calendar-box ">
                  <Button title="Book Now" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="reviewownerdetail">
              <div className="reviewownerdetailgrid-1">
                <div className="reviewownerdetailuserbox">
                  <div>
                    <img
                      className="hostimage"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="hostdetails">
                    <h2 className="hostdetailname">Serviced by John Doe</h2>
                    <span className="hostdetailsubname">
                      Joined on Feb 2023
                    </span>
                  </div>
                  <div className="verifybox">
                    <span>
                      <RiVerifiedBadgeFill />
                    </span>
                    <span>Verified</span>
                  </div>
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
                    non, modi sapiente optio sint reprehenderit quisquam tenetur
                    deserunt. Iusto at exercitationem eligendi error minima sit!
                    Laborum, nihil.
                  </article>
                </div>
              </div>

              <div className="reviewownerlist">
                <div>
                  <span className="reviewowneradds">
                    Registration number: 0*********0
                  </span>
                </div>
                <div>
                  <span className="reviewowneradds">
                    Languages: English, Français, Italiano, Español
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
                <div>
                  <Button title="Contact Service" />
                </div>
              </div>
            </div>
          </div>
        </SingleHousePageStyles>
      </HelmetProvider>
    </>
  );
};

export default SingleHousePage;

//[TITRE DE L’ANNONCE – STUDIO/APPARTEMENT/VILLA/MAISON]
