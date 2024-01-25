import React from "react";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const AddDescription = ({ setNext, description, setDescription }) => {
  const goBooking = () => {
    if (!description) {
      toast.error("Description not filled");
      return;
    }
    toast.success("Description saved");
    setTimeout(() => {
      window.scrollTo(0, 0);
      setNext(10);
    }, 1000);
  };


  return (
    <>
      <div className="forstep">
        <div>
          <h2 className="headingexample">Give detailed description about the house you are adding</h2>
        </div>

        <div className="stepbox">
          <span className="step">9</span>
        </div>

        <div className="titlebox">
          <span className="exampletext">
            (Elaborate specialities about your house)
          </span>
          <textarea
            name=""
            id=""
            minLength="20"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="addlistbtn">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => {
              window.scrollTo(0, 0);
              setNext(8);
            }}
          />
          <Button
            title="Add Booking Options"
            backicon={<FaChevronRight />}
            onClick={goBooking}
          />
        </div>

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default AddDescription;
