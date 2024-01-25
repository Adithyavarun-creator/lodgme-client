import React from "react";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineEuro } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";

const AddPrice = ({ setNext, price, setPrice, type }) => {
  const { currentUser, token } = useSelector((state) => state.user);

  console.log(currentUser, "and", token);

  const onSubmit = () => {
    if (!price) {
      toast.error("Please enter price value");
      return;
    }
    setTimeout(() => {
      toast.success("Price added");
      window.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <>
      <div className="forstep">
        <div>
          <h2 className="headingexample">Add price for your house</h2>
        </div>

        <div>
          <span className="exampletext">
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
              window.scrollTo(0, 0);
              setNext(10);
            }}
          />
          <Button title="Finally Publish your house" onClick={onSubmit} />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default AddPrice;
