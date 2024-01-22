import React, { useState } from "react";
import Select from "react-select";
import { DropdownSelectStyles } from "./DropdownSelectStyle";
import { amenitiesOptions } from "../datas/amenities";

export const options = [
  { value: "Breakfast", label: "Breakfast" },
  { value: "Lunch", label: "Lunch" },
  { value: "Dinner", label: "Dinner" },
  { value: "Kitchen", label: "Kitchen" },
  { value: "City View", label: "City View" },
  { value: "Kitchen", label: "Kitchen" },
  { value: "Workspace", label: "Workspace" },
  { value: "Wifi", label: "Wifi" },
  { value: "Lift", label: "Lift" },
  { value: "Private Balcony", label: "Private Balcony" },
  { value: "Washing Machine", label: "Washing Machine" },
  { value: "Hair Dryer", label: "Hair Dryer" },
  { value: "Cleaning Products", label: "Cleaning Products" },
  { value: "Shower gel", label: "Shower gel" },
  { value: "Bathroom Geyser", label: "Bathroom Geyser" },
  { value: "Pillows and Blankets", label: "Pillows and Blankets" },
  { value: "Iron", label: "Iron" },
  { value: "HDTV", label: "HDTV" },
  { value: "Smoke Alarm", label: "Smoke Alarm" },
  { value: "Fridge", label: "Fridge" },
  { value: "Cooking Applicances", label: "Cooking Applicances" },
  { value: "Microwave", label: "Microwave" },
  { value: "Dishwasher", label: "Dishwasher" },
  { value: "Kettle", label: "Kettle" },
  { value: "Dining table", label: "Dining table" },
  { value: "Host Assistance", label: "Host Assistance" },
  { value: "Sofa", label: "Sofa" },
  { value: "Coffee Table", label: "Coffee Table" },
  { value: "Host Assistance", label: "Host Assistance" },
  { value: "Tour Assistance", label: "Tour Assistance" },
  { value: "Parking", label: "Parking" },
];

const DropdownSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (option) => {
    setSelectedOptions(option);
  };

  const submit = () => {
    console.log(selectedOptions);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Select
        isMulti={true}
        placeholder="Select amenities available"
        options={amenitiesOptions}
        value={selectedOptions}
        onChange={handleChange}
        styles={DropdownSelectStyles}
      />
      <button onClick={submit}>Submit</button>
      {selectedOptions.map((option) => (
        <span key={option.label}>{option.value}&nbsp;</span>
      ))}
    </div>
  );
};

export default DropdownSelect;
