import { useState, useMemo } from "react";
import { AddListingStyles } from "./AddListingStyles";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
import { baseUrl } from "../../baseUrl/url";
import { useSelector } from "react-redux";
import { HomepageSelectStyles } from "../../components/SelectStyles/Select";
import Button from "../../components/Button/Button";

const AddListingPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordiantes] = useState({
    lat: null,
    lng: null,
  });

  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [livingRoom, setLivingRoom] = useState(0);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [housePrice, setHouseprice] = useState(0);
  const [user, setUser] = useState("");
  const [amentitiesinc, setAmenitiesinc] = useState([]);
  const [amentitiesnotinc, setNotamenitiesinc] = useState([]);
  //country
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    //console.log(ll);
    setAddress(value);
    setCoordiantes(ll);
  };

  //console.log(address);

  const changeHandler = (value) => {
    setValue(value);
  };

  //console.log(value.label);

  const onAddListing = async () => {
    if (
      !title ||
      !subtitle ||
      !coordinates ||
      !address ||
      !description ||
      !beds ||
      !baths ||
      !livingRoom ||
      !amentitiesinc ||
      !amentitiesnotinc ||
      !user ||
      !housePrice ||
      !value
    ) {
      alert("missing input field");
    }

    const res = await axios.post(`${baseUrl}/api/create-new-listing`, {
      title,
      subtitle,
      mapLocation: coordinates,
      houseAddress: address,
      description,
      beds,
      baths,
      livingRoom,
      amenitiesIncluded: amentitiesinc,
      amenitiesNotIncluded: amentitiesnotinc,
      publishedUser: user,
      pricePerNight: housePrice,
      locatedCountry: value.label,
    });
    console.log(res.data);
    alert("house details saved");
  };

  return (
    <>
      <AddListingStyles>
        <div className="formbox">
          <div className="forminputs">
            <label htmlFor="title">Title of your house*</label>
            <input
              name="title"
              type="text"
              placeholder="Studio/Flat/Apartment"
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
            <label htmlFor="subtitle">Enter the facilities*</label>
            <input
              name="subtitle"
              type="text"
              placeholder="Nearby bus,trams,hotspot of city,airport"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
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
            {/* <input
              name="country"
              type="text"
              placeholder="France/Latvia/Estonia"
              value={locatedCountry}
              onChange={(e) => setLocatedCountry(e.target.value)}
            /> */}
            <Select
              className="select"
              placeholder="Select Location"
              options={options}
              value={value}
              onChange={changeHandler}
              styles={HomepageSelectStyles}
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
              id=""
              cols="30"
              rows="10"
              placeholder=""
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
              Add amenities that you offer while staying *
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
              Add amenities that you do not offer while staying *
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
            <label htmlFor="username">Enter your name*</label>
            <input
              name="username"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <span>
              **Your name&nbsp;
              <strong>John Doe</strong>
              **
            </span>
          </div>

          <div className="forminputs">
            <label htmlFor="">
              Enter your address so that we will mark in map for public view *
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
        <div>
          <Button onClick={onAddListing} title="Publish House to public view" />
        </div>
      </AddListingStyles>
    </>
  );
};

export default AddListingPage;

/**
 {
    title: {
      type: String,
      text: true,
    },
    subtitle: {
      type: String,
      text: true,
    },
    located: {
      type: String,
      text: true,
    },
    amenitiesIncluded: {
      type: Array,
      text: true,
    },
    amenitiesNotIncluded: {
      type: Array,
      text: true,
    },
    houseImages: {
      type: Array,
      default: [],
    },
    beds: {
      type: Number,
      default: 1,
    },
    baths: {
      type: Number,
      default: 1,
    },
    pricePerNight: {
      type: Number,
    },
    description: {
      type: String,
      trim: true,
    },
    publishedUser: {
      type: String,
    },
    mapLocation: [
      {
        lat: {
          type: Number,
          default: 56.9581514,
        },
        lng: {
          type: Number,
          default: 24.1399615,
        },
      },
    ],
  },
 */
