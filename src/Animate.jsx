import React, { useEffect, useState } from "react";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays, differenceInDays } from "date-fns";
import format from "date-fns/format";
const Animate = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [diffInDays, setDiffInDays] = useState(0);

  const handleSelect = (ranges) => {
    console.log(ranges.selection.startDate);
    console.log(ranges.selection.endDate);
    const diff = differenceInDays(
      ranges.selection.endDate,
      ranges.selection.startDate
    );
    setDiffInDays(diff);
  };

  console.log(diffInDays);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <h1>The number of days you stay is {diffInDays} days</h1>
        </div>
        <div>
          <input
            style={{ width: "300px", height: "50px" }}
            value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
              range[0].endDate,
              "MM/dd/yyyy"
            )}`}
            readOnly
            className="date_inputfield"
          />
        </div>
        <div>
          <DateRangePicker
            className="date_range"
            onChange={(item) => {
              setRange([item.selection]);
              handleSelect(item);
            }}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            rangeColors={["#015151", "#015151", "#fed14c"]}
            minDate={new Date()}
          />
        </div>
      </div>
    </>
  );
};

export default Animate;
