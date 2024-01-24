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
  dragging,
  setIsDragging,
  files,
  setFiles,
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
      setNext(8);
    }, 1000);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2>
            Upload images of your house that is going to be published for
            travellers
          </h2>
        </div>
        <div>
          <span className="headingexample">
            Maximum number of images should be 5 and more
          </span>
        </div>
        <div className="stepbox">
          <span className="step">7</span>
        </div>
        <div className="uploadbox">
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
              <div className="delimgbox" key={i}>
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

//const onFileSelect = (e) => {
// const files = e.target.files;
// if (files.length === 0) return;
// for (let i = 0; i < files.length; i++) {
//   if (files[i].type.split("/")[0] !== "image") continue;
//   if (!images.some((e) => e.name === files[i].name)) {
//     setImages((prevImages) => [
//       ...prevImages,
//       {
//         name: files[i].name,
//         url: URL.createObjectURL(files[i]),
//       },
//     ]);
//   }
// }
//}

//const onDrop = (e) => {
//e.preventDefault();
//setIsDragging(false);
// const files = e.dataTransfer.files;
// for (let i = 0; i < files.length; i++) {
//   if (files[i].type.split("/")[0] !== "image") continue;
//   if (!images.some((e) => e.name === files[i].name)) {
//     setImages((prevImages) => [
//       ...prevImages,
//       {
//         name: files[i].name,
//         url: URL.createObjectURL(files[i]),
//       },
//     ]);
//   }
// }
//};

/**
 rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // This rule allows anyone with your Firestore database reference to view, edit,
    // and delete all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // all client requests to your Firestore database will be denied until you Update
    // your rules
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
 */
