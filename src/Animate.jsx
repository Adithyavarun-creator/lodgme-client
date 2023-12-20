import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format, differenceInDays } from "date-fns";

const Animate = () => {
  const [openDate, setOpenDate] = useState(false);
  const [diffInDays, setDiffInDays] = useState(0);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // const date1 = new Date(date[0].startDate); // the later date
  // const date2 = new Date(date[1].endDate); // the earlier date
  // const result = differenceInDays(date1, date2);

  // console.log(result);
  const date_diff_indays = function (date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };

  // const handleSelect = (ranges) => {
  //   //console.log(ranges.selection.startDate);
  //   //console.log(ranges.selection.endDate);
  //   const diff = differenceInDays(
  //     ranges.selection.endDate,
  //     ranges.selection.startDate
  //   );
  //   setDiffInDays(diff);
  // };

  // console.log(diffInDays);

  return (
    <div className="headerSearchItem">
      {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
      {/* <span
        onClick={() => setOpenDate(!openDate)}
        className="headerSearchText"
      >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
        date[0].endDate,
        "MM/dd/yyyy"
      )}`}</span>
      {openDate && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          // onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
          minDate={new Date()}
        />
      )} */}

      {date_diff_indays("04/26/2014", "04/28/2014")}
    </div>
  );
};

export default Animate;

/**
 <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      I have some content here
    </motion.div>
 */
