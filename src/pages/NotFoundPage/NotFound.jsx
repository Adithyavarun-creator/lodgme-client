import React from "react";
import { TbError404 } from "react-icons/tb";
import { NotFoundStyles } from "./NotFoundStyles";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const hompagebtn = () => {
    navigate("/");
  };

  return (
    <NotFoundStyles>
      <div className="flex">
        <h2>Page you are looking does not exist</h2>
      </div>
      <div>
        <TbError404 className="notfound-icon" />
      </div>
      <div>
        <Button title="Go Back to Homepage" onClick={hompagebtn} />
      </div>
    </NotFoundStyles>
  );
};

export default NotFound;
