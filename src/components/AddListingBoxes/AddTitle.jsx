import React from "react";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const AddTitle = ({ setNext, setTitle, title }) => {
  const goDescription = () => {
    if (!title) {
      toast.error("Title not filled");
      return;
    }
    toast.success("Title saved");
    setTimeout(() => {
      window.scrollTo(0, 0);
      setNext(9);
    }, 1000);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2 className="headingexample">Give title for your listing</h2>
        </div>

        <div className="stepbox">
          <span className="step">8</span>
        </div>

        <div className="titlebox">
          <span className="exampletext">(Example : Apartment at heart of city)</span>
          <textarea
            name=""
            id=""
            minLength="20"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="addlistbtn">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => {
              window.scrollTo(0, 0);
              setNext(7);
            }}
          />
          <Button
            title="Add Description"
            backicon={<FaChevronRight />}
            onClick={goDescription}
          />
        </div>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default AddTitle;
