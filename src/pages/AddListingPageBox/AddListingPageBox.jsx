import React, { useState } from "react";
import { AddListingPageBoxStyle } from "./AddListingPageBoxStyle";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import ListingType from "../../components/AddListingBoxes/ListingType";
import AccomodationType from "../../components/AddListingBoxes/AccomodationType";
import AccomodationSteps from "../../components/AddListingBoxes/AccomodationSteps";

const AddListingPageBox = () => {
  const [next, setNext] = useState(1);
  const navigate = useNavigate();

  const goNext = () => {
    setNext(1);
  };

  const goBack = () => {
    //put dashboard page
    navigate("/");
  };

  return (
    <>
      <AddListingPageBoxStyle>
        {next === 0 ? <AccomodationSteps next={next} setNext={setNext} /> : ""}
        {next === 1 ? <ListingType next={next} setNext={setNext} /> : ""}
        {next === 2 ? <AccomodationType next={next} setNext={setNext} /> : ""}
      </AddListingPageBoxStyle>
    </>
  );
};

export default AddListingPageBox;
