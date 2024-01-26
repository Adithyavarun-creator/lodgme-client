import React, { useState } from "react";
import { AddListingPageBoxStyle } from "./AddListingPageBoxStyle";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import ListingType from "../../components/AddListingBoxes/ListingType";
import AccomodationType from "../../components/AddListingBoxes/AccomodationType";
import AccomodationSteps from "../../components/AddListingBoxes/AccomodationSteps";
import AccomodationDetails from "../../components/AddListingBoxes/AccomodationDetails";
import RoomDetails from "../../components/AddListingBoxes/RoomDetails";
import AddAmenities from "../../components/AddListingBoxes/AddAmenities";
import HouseRules from "../../components/AddListingBoxes/HouseRules";
import UploadImages from "../../components/AddListingBoxes/UploadImages";
import AddTitle from "../../components/AddListingBoxes/AddTitle";
import AddDescription from "../../components/AddListingBoxes/AddDescription";
import BookingOption from "../../components/AddListingBoxes/BookingOption";
import AddPrice from "../../components/AddListingBoxes/AddPrice";

const AddListingPageBox = () => {
  const [next, setNext] = useState(3);
  const navigate = useNavigate();

  //states for below components
  //for 1
  const [roomtype, setRoomType] = useState("");
  const [selected, setSelected] = useState(false);

  //for 2
  const [acctype, setAccType] = useState("");

  //for 3
  const [country, setCountry] = useState("");
  //for address give value.label
  const [address, setAddress] = useState("");
  const [coordinates, setCoordiantes] = useState({
    lat: 48.85,
    lng: 2.29,
  });
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const [postCode, setPostCode] = useState();

  //for 4
  const [travellers, setTravellers] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [baths, setBaths] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [babycots, setbabycots] = useState(false);
  const [children, setChildren] = useState(false);

  //for 5 amenities
  const [checkedValue, setCheckedValue] = useState([]);

  //for 6
  const [smoking, setSmoking] = useState(false);
  const [pets, setPets] = useState(false);
  const [party, setParty] = useState(false);
  const [addbabycot, setAddbabycot] = useState(false);

  //for 7
  const [formData, setFormData] = useState({
    imageUrls: [],
  });
  const [files, setFiles] = useState([]);
  const [dragging, setIsDragging] = useState(false);

  //for 8
  const [title, setTitle] = useState("");

  //for 9
  const [description, setDescription] = useState("");

  //for 10
  const [selectBooking, setSelectBooking] = useState("");

  //for 11
  const [price, setPrice] = useState();

  const goNext = () => {
    setNext(1);
  };

  const goBack = () => {
    //put dashboard page
    navigate("/");
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Add Listing | Lodgeme</title>
        </Helmet>
        <AddListingPageBoxStyle>
          {next === 0 ? (
            <AccomodationSteps next={next} setNext={setNext} />
          ) : (
            ""
          )}
          {next === 1 ? (
            <ListingType
              next={next}
              setNext={setNext}
              roomtype={roomtype}
              setRoomType={setRoomType}
              selected={selected}
              setSelected={setSelected}
            />
          ) : (
            ""
          )}
          {next === 2 ? (
            <AccomodationType
              next={next}
              setNext={setNext}
              acctype={acctype}
              setAccType={setAccType}
            />
          ) : (
            ""
          )}
          {next === 3 ? (
            <AccomodationDetails
              setNext={setNext}
              country={country}
              setCountry={setCountry}
              coordinates={coordinates}
              setCoordiantes={setCoordiantes}
              address={address}
              setAddress={setAddress}
              postCode={postCode}
              setPostCode={setPostCode}
              latitude={latitude}
              setLatitude={setLatitude}
              longitude={longitude}
              setLongitude={setLongitude}
            />
          ) : (
            ""
          )}
          {next === 4 ? (
            <RoomDetails
              setNext={setNext}
              travellers={travellers}
              setTravellers={setTravellers}
              bedrooms={bedrooms}
              setBedrooms={setBedrooms}
              baths={baths}
              setBaths={setBaths}
              bathroom={bathroom}
              setBathroom={setBathroom}
              babycots={babycots}
              setbabycots={setbabycots}
              children={children}
              setChildren={setChildren}
            />
          ) : (
            ""
          )}
          {next === 5 ? (
            <AddAmenities
              setNext={setNext}
              checkedValue={checkedValue}
              setCheckedValue={setCheckedValue}
            />
          ) : (
            ""
          )}
          {next === 6 ? (
            <HouseRules
              setNext={setNext}
              smoking={smoking}
              setSmoking={setSmoking}
              pets={pets}
              setPets={setPets}
              party={party}
              setParty={setParty}
              addbabycot={addbabycot}
              setAddbabycot={setAddbabycot}
            />
          ) : (
            ""
          )}
          {next === 7 ? (
            <UploadImages
              setNext={setNext}
              formData={formData}
              setFormData={setFormData}
            />
          ) : (
            ""
          )}
          {next === 8 ? (
            <AddTitle setNext={setNext} title={title} setTitle={setTitle} />
          ) : (
            ""
          )}
          {next === 9 ? (
            <AddDescription
              setNext={setNext}
              description={description}
              setDescription={setDescription}
            />
          ) : (
            ""
          )}
          {next === 10 ? (
            <BookingOption
              setNext={setNext}
              selectBooking={selectBooking}
              setSelectBooking={setSelectBooking}
            />
          ) : (
            ""
          )}
          {next === 11 ? (
            <AddPrice
              setNext={setNext}
              price={price}
              setPrice={setPrice}
              roomtype={roomtype}
              acctype={acctype}
              country={country}
              address={address}
              postCode={postCode}
              travellers={travellers}
              bedrooms={bedrooms}
              bathroom={bathroom}
              baths={baths}
              smoking={smoking}
              pets={pets}
              party={party}
              addbabycot={addbabycot}
              formData={formData}
              title={title}
              description={description}
              selectBooking={selectBooking}
              checkedValue={checkedValue}
              latitude={latitude}
              longitude={longitude}
            />
          ) : (
            ""
          )}
        </AddListingPageBoxStyle>
      </HelmetProvider>
    </>
  );
};

export default AddListingPageBox;
