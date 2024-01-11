import React from "react";
import { ButtonStyles } from "./ButtonStyles";
import { MdDelete } from "react-icons/md";

const Button = ({ title, onClick, icon }) => {
  return (
    <ButtonStyles onClick={onClick}>
      {icon ? icon : ""}
      {title}
    </ButtonStyles>
  );
};

export default Button;
