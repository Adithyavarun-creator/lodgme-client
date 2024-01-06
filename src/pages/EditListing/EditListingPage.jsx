import { useState, useMemo, useRef, useEffect } from "react";
import { EditListingStyles } from "./EditListingStyles";

import { DateRangePicker } from "react-date-range";
import { DatePicker } from "antd";
import { differenceInDays } from "date-fns";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import format from "date-fns/format";
import { FaCalendarMinus } from "react-icons/fa";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
import { baseUrl } from "../../baseUrl/url";
import { useSelector } from "react-redux";
import { AddListingSelectStyles } from "../../components/SelectStyles/Select";
import Button from "../../components/Button/Button";
import { MdDelete } from "react-icons/md";
import { Helmet, HelmetProvider } from "react-helmet-async";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase/firebase";
import { useParams } from "react-router-dom";

const EditListingPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { RangePicker } = DatePicker;

  const [address, setAddress] = useState("");
  const [coordinates, setCoordiantes] = useState({
    lat: null,
    lng: null,
  });
  const [token, setToken] = useState("");

  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [livingRoom, setLivingRoom] = useState(0);
  const [title, setTitle] = useState("");
  const [facilities, setFacilities] = useState("");
  const [houseType, setHouseType] = useState("");
  const [description, setDescription] = useState("");
  const [housePrice, setHouseprice] = useState(0);
  const [user, setUser] = useState("");
  const [amentitiesinc, setAmenitiesinc] = useState([]);
  const [amentitiesnotinc, setNotamenitiesinc] = useState([]);
  const [fromDate, setFromdate] = useState("");
  const [toDate, setTodate] = useState("");
  const [noOfpersons, setnoOfpersons] = useState(0);

  //dates
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);

  //country
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  //images
  const [formData, setFormData] = useState({
    imageUrls: [],
  });
  const [files, setFiles] = useState([]);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState("");
  // const [token, setToken] = useState("");
  // get the target element to toggle
  const refOne = useRef(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      // const listingId = params.listingId;
      const res = await fetch(`${baseUrl}/api/get/${id}`);
      const data = await res.json();
      // console.log(data);
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      // setFormData(data);
    };

    fetchListing();
  }, [id]);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    //console.log(ll);
    setAddress(value);
    setCoordiantes(ll);
  };

  const changeHandler = (value) => {
    setValue(value);
  };

  // //uploadfiles
  const handleImageSubmit = () => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2 mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  // // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(
        storage,
        `/houseListingImages/${user}/${fileName}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPercent(progress);
          //console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  // const [token, setToken] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setToken(token);
  }, [token]);

  // console.log(currentUser._id);

  // const subject = currentUser._id;
  // // const text2 = subject.slice(14, subject.length - 2);
  // console.log(subject);

  const onUpdateListing = async () => {
    try {
      // setLoading(true);
      const res = await fetch(`${baseUrl}/api/listing-update/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          postedBy: currentUser._id,
          title,
          // mapLocation: coordinates,
          // houseAddress: address,
          // description,
          // type: houseType,
          // houseImages: formData.imageUrls,
          // beds,
          // facilities: facilities,
          // baths,
          // livingRoom,
          // noOfpersons,
          // amenitiesIncluded: amentitiesinc,
          // amenitiesNotIncluded: amentitiesnotinc,
          // postedBy: currentUser,
          // pricePerNight: housePrice,
          // locatedCountry: value.label,
          // availableFrom: range[0].startDate,
          // availableTill: range[0].endDate,
        }),
      });
      // alert("house details saved");
      console.log(res?.data);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  // const data = await res.json();
  //     await fetch(`${baseUrl}/api/create-new-listing`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`, // <---------- HERE
  //       },
  //       body: JSON.stringify({
  //         title,
  //         mapLocation: coordinates,
  //         houseAddress: address,
  //         description,
  //         type: houseType,
  //         houseImages: formData.imageUrls,
  //         beds,
  //         facilities: facilities,
  //         baths,
  //         livingRoom,
  //         noOfpersons,
  //         amenitiesIncluded: amentitiesinc,
  //         amenitiesNotIncluded: amentitiesnotinc,
  //         postedBy: currentUser,
  //         pricePerNight: housePrice,
  //         locatedCountry: value.label,
  //         availableFrom: range[0].startDate,
  //         availableTill: range[0].endDate,
  //       }),
  //     });
  //     setLoading(false);

  //     //console.log(res.data);

  //console.log(range[0].startDate);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Edit Listing | Lodgeme</title>
        </Helmet>
        <div>
          <h1>Editing</h1>
        </div>
        <EditListingStyles>
          <div className="formbox" ref={refOne}>
            <div className="forminputs">
              <label htmlFor="title">Title of your house*</label>
              <input
                name="title"
                type="text"
                placeholder="Apartment in city center"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <span>
                **The title has to be specific so that people get to know about
                your house like&nbsp;
                <strong>Superb studio apartment in city center</strong>**
              </span>
            </div>

            <div className="forminputs">
              <label htmlFor="title">Type of your house*</label>
              <input
                name="title"
                type="text"
                placeholder="Studio/Flat/Apartment"
                value={houseType}
                onChange={(e) => setHouseType(e.target.value)}
              />
              <span>
                **The title has to be specific so that people get to know about
                your house like&nbsp;
                <strong>Studio/Flat/Apartment</strong>**
              </span>
            </div>
            <div className="forminputs">
              <label htmlFor="facilities">Enter the facilities*</label>
              <input
                name="facilities"
                type="text"
                placeholder=" Beaches,Parks,Museums"
                value={facilities}
                onChange={(e) => setFacilities(e.target.value)}
              />
              <span>
                **The facilities has to be specific so that people get to know
                what is near your house like&nbsp;
                <strong>
                  Beaches,Parks,Museums,Bus transports,Car transport
                </strong>
                **
              </span>
            </div>
            <div className="forminputs">
              <label htmlFor="dates">
                Select Available dates for your house*
              </label>
              <input
                value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
                  range[0].endDate,
                  "dd/MM/yyyy"
                )}`}
                readOnly
                onClick={() => setOpen((open) => !open)}
              />
            </div>

            {open && (
              <div className="datepicker">
                <DateRangePicker
                  onChange={(item) => {
                    setRange([item.selection]);
                    handleSelect(item);
                  }}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  months={2}
                  direction="horizontal"
                  rangeColors={["#015151", "#015151", "#fed14c"]}
                  minDate={new Date()}
                />
              </div>
            )}

            <div className="forminputs">
              <label htmlFor="price">Price per night*</label>
              <input
                name="price"
                type="number"
                placeholder="Price per night in EUR"
                value={housePrice}
                onChange={(e) => setHouseprice(e.target.value)}
              />
              <span>
                **The price is you post for staying in the house per day&nbsp;
                <strong>EUR100</strong>
                **
              </span>
            </div>
            <div className="forminputs">
              <label htmlFor="beds">Number of beds*</label>
              <input
                name="beds"
                type="number"
                placeholder="beds"
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
              />
              <span>
                **The number of beds available in the house&nbsp;
                <strong>1 or 2 beds</strong>
                **
              </span>
            </div>
            <div className="forminputs">
              <label htmlFor="beds">Guest allowed to visit*</label>
              <input
                name="noOfpersons"
                type="number"
                placeholder="Number of guests to visit"
                value={noOfpersons}
                onChange={(e) => setnoOfpersons(e.target.value)}
              />
              <span>
                **We can allow only 2-3 guest to visit you&nbsp;
                <strong>2-3</strong>
                **
              </span>
            </div>
            <div className="forminputs">
              <label htmlFor="baths">Number of baths*</label>
              <input
                name="baths"
                type="number"
                placeholder="baths"
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
              />
              <span>
                **The number of baths available in the house&nbsp;
                <strong>1 or 2 baths</strong>
                **
              </span>
            </div>
            <div className="forminputs">
              <label htmlFor="livingroom">Number of Living room*</label>
              <input
                name="livingroom"
                type="number"
                placeholder="baths"
                value={livingRoom}
                onChange={(e) => setLivingRoom(e.target.value)}
              />
              <span>
                **The number of living rooms available in the house&nbsp;
                <strong>1 or 2 living rooms</strong>
                **
              </span>
            </div>
            <div className="forminputs">
              <label htmlFor="country">Country Located*</label>
              <Select
                placeholder="Select Location"
                options={options}
                value={value}
                onChange={changeHandler}
                styles={AddListingSelectStyles}
                name="location"
              />
              <span>
                **The country where house is located&nbsp;
                <strong>France/Germany/Latvia</strong>
                **
              </span>
            </div>
            <div className="forminputs">
              <label htmlFor="description">Description of your house*</label>
              <textarea
                name="description"
                placeholder="This is a house with all your needed amenities and furnishments. We provide you breakfast and dinner with unlimited servings.We even provide you American and Chinese cuisines"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span>
                **A short description about the features present in house&nbsp;
                <strong>
                  It is a grand and furnished studio house with cuty view
                </strong>
                **
              </span>
            </div>

            <div className="forminputs">
              <label htmlFor="amenitiesinc">
                Add amenities that you offer while staying*
              </label>
              <input
                name="amenitiesinc"
                placeholder="Amenities Included"
                value={amentitiesinc}
                onChange={(e) => setAmenitiesinc(e.target.value)}
              />
              <span>
                **The amenities that you can afford when people stay in the
                house&nbsp;
                <strong>Foods,Wifi,TV,Tour arrangements</strong>
                **
              </span>
            </div>
            <div className="forminputs">
              <label htmlFor="amenitiesnotinc">
                Add amenities that you do not offer while staying*
              </label>
              <input
                name="amenitiesnotinc"
                placeholder="Amenities Not Included"
                value={amentitiesnotinc}
                onChange={(e) => setNotamenitiesinc(e.target.value)}
              />
              <span>
                **The amenities that you cannot afford when people stay in the
                house&nbsp;
                <strong>Food,Servicing,Tour arrangements</strong>
                **
              </span>
            </div>

            <div className="forminputs">
              <label htmlFor="">
                Enter your address so that we will mark in map for public view*
              </label>
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder:
                          "Select the address to pin in the map for public view of your house",
                        className: "location-search-input",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            key={suggestion.placeId}
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
              <span>
                **The exact location where house is present in google map&nbsp;
                <strong>Zemgala gatve, Riga</strong>
                **
              </span>
            </div>
          </div>
          <div className="uploadImagebox">
            <div className="uploadImage">
              <label>Upload House Images*</label>

              <input
                className="imginput"
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
                accept="image/*"
              />

              <span>
                **The maximum count of images has to be <strong>5</strong> and
                above**
              </span>
            </div>

            <div className="">
              <button
                className="uploadbtn"
                onClick={handleImageSubmit}
                disabled={uploading}
              >
                Submit to preview images that you have selected
              </button>
            </div>
          </div>
          {percent ? (
            <div>
              <span className="progress">
                Uploaded all your images {`${percent}%`}
              </span>
            </div>
          ) : (
            <div>
              <span className="progress">{percent}</span>
            </div>
          )}
          <div className="imagemap">
            {formData.imageUrls.length > 0 &&
              formData.imageUrls.map((url, index) => (
                <div className="imageboxurl" key={index}>
                  <div>
                    <img src={url} className="imageUrls" alt="" />
                  </div>
                  <div className="deleteimg">
                    <MdDelete
                      className="deleteicon"
                      onClick={() => handleRemoveImage(index)}
                    />
                  </div>
                </div>
              ))}
          </div>
          <div>
            <Button onClick={onUpdateListing} title="Update" />
          </div>
        </EditListingStyles>
      </HelmetProvider>
    </>
  );
};

export default EditListingPage;
