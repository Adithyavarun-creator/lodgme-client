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
      setNext(9);
    }, 1000);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2>
            Give title for your listing so that people can get to know about it
          </h2>
        </div>
        <div>
          <span className="headingexample">
            (Example : Apartment at heart of city)
          </span>
        </div>
        <div className="stepbox">
          <span className="step">8</span>
        </div>

        <div className="titlebox">
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
