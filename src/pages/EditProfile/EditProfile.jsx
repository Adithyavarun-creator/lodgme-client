import { useSelector } from "react-redux";
import { EditProfileStyles } from "./EditProfileStyles";
import { Helmet, HelmetProvider } from "react-helmet-async";
import moment from "moment";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Button from "../../components/Button/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useEffect, useRef, useState } from "react";
import { PiUploadSimple } from "react-icons/pi";
import { app } from "../../firebase/firebase";
import { baseUrl } from "../../baseUrl/url";
import toast, { Toaster } from "react-hot-toast";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const EditProfile = () => {
  const { currentUser, token } = useSelector((state) => state.user);
  const [phoneno, setPhoneno] = useState();
  const [option, setOption] = useState("");
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordiantes] = useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    // console.log(file);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePic: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    //console.log(e.target.id);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    //console.log(ll);
    setAddress(value);
    setCoordiantes(ll);
  };

  const onUpdateUser = async (e) => {
    // alert("updated");
    e.preventDefault();

    try {
      // dispatch(updateUserStart());
      setLoading(true);
      const res = await fetch(`${baseUrl}/api/update/${currentUser._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ formData, homeAddress: address }),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        toast.error(
          "There was an error while updating , Please try after sometime"
        );
        return;
      }
      toast.success("Your inputs are updated 👍");
      setLoading(false);
      window.location.reload();
    } catch (error) {
      // dispatch(updateUserFailure(error.message));
      setLoading(false);
      toast.error(error.message);
    }
  };

  //console.log(currentUser);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Edit Profile | Lodgeme</title>
        </Helmet>
        <EditProfileStyles>
          <div>
            <h1>Edit your Lodgeme Profile</h1>
          </div>
          <div className="accountdatebox">
            <h3 className="accountcreateddate">
              Your account was created on{" "}
              {moment(currentUser.createdAt).format("MMMM Do YYYY")}
            </h3>
          </div>

          <div className="accountdatebox">
            <div className="formboxcontent">
              <div className="formlabel">
                <label htmlFor="">Profile Picture*</label>
              </div>
              <div className="proflierow">
                <div>
                  <img
                    onClick={() => fileRef.current.click()}
                    src={
                      currentUser.profilePic
                        ? currentUser.profilePic
                        : formData.profilePic
                    }
                    alt="profile"
                    className="formprofileimg"
                  />
                </div>
                <div>
                  <label
                    className="custom-file-upload flex"
                    htmlFor="profilePic"
                  >
                    <PiUploadSimple />
                    &nbsp; Profile image upload
                  </label>
                  <input
                    type="file"
                    style={{ border: "none" }}
                    name="Upload Profile Picture"
                    id="profilePic"
                    accept="image/*"
                    ref={fileRef}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="formbox">
            <div className="formboxcontent">
              <div className="formlabel">
                <label htmlFor="firstname">Firstname*</label>
              </div>
              <div>
                <input
                  type="text"
                  id="firstname"
                  onChange={handleChange}
                  defaultValue={currentUser.firstname}
                />
              </div>
            </div>

            <div className="formboxcontent">
              <div className="formlabel">
                <label htmlFor="lastname">Lastname*</label>
              </div>
              <div>
                <input
                  type="text"
                  defaultValue={currentUser.lastname}
                  id="lastname"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="formboxcontent">
              <div className="formlabel">
                <label htmlFor="username">Username*</label>
              </div>
              <div>
                <input
                  type="text"
                  defaultValue={currentUser.username}
                  id="username"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="formboxcontent">
              <div className="formlabel">
                <label htmlFor="country">Country*</label>
              </div>
              <div>
                <input
                  type="text"
                  defaultValue={currentUser.country}
                  id="country"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="formboxcontent">
              <div className="formlabel">
                <label htmlFor="homeAddress">Home Address*</label>
              </div>
              <div>
                {/* <input
                  type="text"
                  defaultValue={currentUser.homeAddress}
                  id="homeAddress"
                  onChange={handleChange}
                /> */}
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                  id="homeAddress"
                  defaultValue={currentUser.homeAddress}
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
                          placeholder: `${currentUser.homeAddress}`,
                          className: "location-search-input",
                          id: "homeAddress",
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
              </div>
            </div>

            <div className="formboxcontent">
              <div className="formlabel">
                <label htmlFor="email">Email Address*</label>
              </div>
              <div>
                <input
                  type="email"
                  defaultValue={currentUser.email}
                  id="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="formboxcontent">
              <div className="formlabel">
                <label className="contactnumber" htmlFor="">
                  Contact number*
                </label>
              </div>
              <div>
                <input
                  type="tel"
                  defaultValue={currentUser.contactnumber}
                  id="contactnumber"
                  onChange={handleChange}
                />
                {/* <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneno}
                  onChange={setPhoneno}
                  defaultValue={currentUser.contactnumber}
                /> */}
              </div>
            </div>

            {/* <div className="formboxcontent">
              <div className="formlabel">
                <label htmlFor="">Gender*</label>
              </div>
              <div>
                <select
                  id="gender"
                  value={currentUser.gender ? currentUser.gender : option}
                  onChange={(e) => setOption(e.target.value)}
                  required
                  //defaultValue={currentUser.gender}
                >
                  <option value=""></option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div> */}

            <div className="formboxcontent">
              <div className="formlabel">
                <label htmlFor="gender">Gender*</label>
              </div>
              <div>
                <input
                  type="text"
                  defaultValue={currentUser.gender}
                  id="gender"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="formboxcontent">
              <div className="formlabel">
                <label htmlFor="password">Change Password*</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="************************"
                  id="password"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="accountdatebox">
            <Button
              title={loading ? "Updating your account" : "Update your account"}
              onClick={onUpdateUser}
            />
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </EditProfileStyles>
      </HelmetProvider>
    </>
  );
};

export default EditProfile;
