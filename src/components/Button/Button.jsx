import React from "react";
import { ButtonStyles } from "./ButtonStyles";

const Button = ({ title, onClick }) => {
  return <ButtonStyles onClick={onClick}>{title}</ButtonStyles>;
};

export default Button;
