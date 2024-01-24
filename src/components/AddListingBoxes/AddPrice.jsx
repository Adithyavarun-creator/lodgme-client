import React from "react";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineEuro } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";

const AddPrice = ({ setNext, price, setPrice, type }) => {
  const onSubmit = () => {
    if (!price) {
      toast.error("Please enter price value");
      return;
    }
    setTimeout(() => {
      toast.success("Price added");
    }, 1000);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2>Add price for your house</h2>
        </div>

        <div>
          <span className="headingexample">
            Mention the pricing for house for stay per day
          </span>
        </div>

        <div className="stepbox">
          <span className="step">11</span>
        </div>

        <div className="pricebox">
          <MdOutlineEuro className="priceicon" />
          <input
            type="number"
            name=""
            id=""
            className="pricenumber"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <span
            className="perday"
            onClick={(e) => setPrice(e.target.value)}
            value={price}
          >
            per day
          </span>
        </div>

        <div className="addlistbtn">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => {
              setNext(10);
            }}
          />
          <Button
            title="Publish your house in Lodgeme community"
            onClick={onSubmit}
          />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default AddPrice;
