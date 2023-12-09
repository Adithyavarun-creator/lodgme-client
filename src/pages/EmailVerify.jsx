import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EmailVerify = () => {
  const { id, token } = useParams();

  console.log(id,token);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/${id}/verify/${token}`
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    verifyEmail();
  }, [id, token]);

  return <div>EmailVerify</div>;
};

export default EmailVerify;
