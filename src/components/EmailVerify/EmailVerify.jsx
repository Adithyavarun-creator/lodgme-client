import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../baseUrl/url";
import { MdVerified, MdError } from "react-icons/md";
import { EmailVerifyStyles } from "./EmailVerifyStyles";
import Button from "../Button/Button";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  // console.log(params);

  const onLogin = () => {
    navigate("/user-sign-in");
  };

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const url = `${baseUrl}/api/${params.id}/verify/${params.token}`;
        const { data } = await axios.get(url);
        setValidUrl(true);
        setTimeout(() => {
          navigate("/user-sign-in");
        }, 2600);
      } catch (error) {
        setValidUrl(false);
      }
    };

    verifyEmail();
  }, [params.id, params.token]);

  return (
    <>
      <EmailVerifyStyles>
        {validUrl ? (
          <>
            <MdVerified className="verify-icon" />
            <h2 className="verified-text">
              You are verified as a vaid user, redirecting to LodgeMe login page
              in a moment
            </h2>
          </>
        ) : (
          <>
            <MdError className="verify-icon" />
            <h2 className="verified-text">
              We have an issue in verifying your account, we will solve it ,
              meanwhile you can login with your registered credentials and
              browse
            </h2>
          </>
        )}
        <Button title="Login" onClick={onLogin} />
      </EmailVerifyStyles>
    </>
  );
};

export default EmailVerify;
