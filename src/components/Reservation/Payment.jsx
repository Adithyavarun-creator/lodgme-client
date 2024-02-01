import React from "react";
import Button from "../Button/Button";
import { FaChevronLeft, FaChevronRight, FaEdit } from "react-icons/fa";
import { MdEuroSymbol } from "react-icons/md";

const Payment = ({ steps, setSteps }) => {
  const goPayment = () => {};

  return (
    <div className="dateboxcolumn">
      <div className="datebox">
        {/* <div>
          <h4>Payment</h4>
        </div> */}
        <div>
          <h3 className="plainflex amountpay">
            You totally need to pay &nbsp;
            <MdEuroSymbol />
            450
          </h3>
        </div>
      </div>
      <div className="end">
        <Button
          title="Back"
          icon={<FaChevronLeft />}
          onClick={() => setSteps(1)}
        />
        <Button title="Pay with credit/debit card" backicon={<FaChevronRight />} />
      </div>
    </div>
  );
};

export default Payment;
