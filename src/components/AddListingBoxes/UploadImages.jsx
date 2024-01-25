import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../Button/Button";
import { faCamera, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OnlySpinner from "../OnlySpinner/OnlySpinner";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase/firebase";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const UploadImages = ({
  setNext,
  formData,
  setFormData,
}) => {
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState("");
  const fileInputRef = useRef(null);

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, `/houseListingImages/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPercent(progress);
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

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  // console.log(formData);

  const onFileSelect = (e) => {
    const files = e.target.files;
    if (files.length < 5) {
      toast.error("Max file has to be 5 and more");
      return;
    }
    if (files.length + formData.imageUrls.length) {
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

  const adTitlePage = () => {
    if (!formData.imageUrls.length) {
      toast.error("Please upload and preview images");
      return;
    }
    toast.success("Images uploaded");
    setTimeout(() => {
      window.scrollTo(0, 0);
      setNext(8);
    }, 1000);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2 className="headingexample">Upload images of your house</h2>
        </div>
        <div className="stepbox">
          <span className="step">7</span>
        </div>
        <div className="uploadbox">
          <div>
            <span style={{ color: "#015151", textAlign: "center" }}>
              Maximum number of images should be 5 and more
            </span>
          </div>
          <div className="uploadcamera">
            <FontAwesomeIcon icon={faCamera} className="uploadcameraicon" />
          </div>

          <div>
            <h3 className="uploadtext">
              <span
                onClick={selectFiles}
                role="button"
                style={{ textDecoration: "underline" }}
              >
                Browse images from device
              </span>
            </h3>
          </div>
          <div className="dragarea">
            <input
              type="file"
              name="file"
              multiple
              ref={fileInputRef}
              onChange={onFileSelect}
            />
          </div>
          <div>
            <span className="uploadtextrule">
              You can upload jpg/jpeg/png/webp image format
            </span>
          </div>
        </div>
        {percent && (
          <div>
            <strong className="headingexample">
              {Math.trunc(percent)}% done uploading all your images
            </strong>
          </div>
        )}
        <div className="uploadimagebox">
          {formData.imageUrls ? (
            formData.imageUrls.map((image, i) => (
              <div className="delimgbox">
                <img src={image} alt="" className="uploadedimages" />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="deleteimgicon"
                  onClick={() => handleRemoveImage(i)}
                />
              </div>
            ))
          ) : (
            <OnlySpinner />
          )}
        </div>

        <div className="addlistbtn">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => {
              window.scrollTo(0, 0);
              setNext(6);
            }}
          />
          <Button
            title="Add Title"
            backicon={<FaChevronRight />}
            onClick={adTitlePage}
          />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default UploadImages;
