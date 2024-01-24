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
      setNext(10);
    }, 1000);
  };

  console.log(description);

  return (
    <>
      <div className="forstep">
        <div>
          <h2>Give detailed description about the house you are adding</h2>
        </div>
        <div>
          <span className="headingexample">
            (Elaborate house available in location, availabilities stuffs, not
            available stuffs, services you provide for travellers, room square
            feet, beds,baths and highlight your house)
          </span>
        </div>
        <div className="stepbox">
          <span className="step">9</span>
        </div>

        <div className="titlebox">
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
