import React, { useState } from "react";
import Button from "../Button/Button";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Info = ({ steps, setSteps }) => {
  const [name, setName] = useState("");
  const [firstname, setFirstame] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const goPayment = () => {
    if (!name) {
      toast.error("Please enter name");
      return;
    }
    if (!firstname) {
      toast.error("Please enter firstname");
      return;
    }
    if (!email) {
      toast.error("Please enter email");
      return;
    }
    if (!phone) {
      toast.error("Please enter phone number");
      return;
    }
    setSteps(2);
  };

  return (
    <>
      <div className="dateboxcolumn">
        <div className="datebox">
          <div>
            <h4>Personal Information</h4>
          </div>
          <div className="gridrow">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Firstname"
                value={firstname}
                onChange={(e) => setFirstame(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="end">
          <Button
            title="Back"
            icon={<FaChevronLeft />}
            onClick={() => setSteps(0)}
          />
          <Button
            title="Proceed to payment"
            backicon={<FaChevronRight />}
            onClick={goPayment}
          />
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Info;
