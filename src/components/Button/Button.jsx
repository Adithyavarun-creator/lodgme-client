import React from "react";
import { ButtonStyles } from "./ButtonStyles";
import { MdDelete } from "react-icons/md";

const Button = ({ title, onClick, icon, disabled }) => {
  return (
    <ButtonStyles onClick={onClick} disabled={disabled ? disabled : ""}>
      {icon ? icon : ""}&nbsp;
      {title}
    </ButtonStyles>
  );
};

export default Button;
