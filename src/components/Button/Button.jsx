import React from "react";
import { ButtonStyles } from "./ButtonStyles";
import { MdDelete } from "react-icons/md";

const Button = ({ title, onClick, icon, disabled, backicon }) => {
  return (
    <ButtonStyles onClick={onClick} disabled={disabled ? disabled : ""}>
      {icon ? icon : ""}&nbsp;
      {title}&nbsp;
      {backicon ? backicon : ""}
    </ButtonStyles>
  );
};

export default Button;
