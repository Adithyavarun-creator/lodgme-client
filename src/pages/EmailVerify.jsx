import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../baseUrl/url";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const url = `${baseUrl}/api/${params.id}/verify/${params.token}`;
        const { data } = await axios.get(url);
        //console.log(data);
        setValidUrl(true);
        setTimeout(() => {
          navigate("/user-sign-in");
        }, 2400);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };

    verifyEmail();
  }, [params.id, params.token]);

  return (
    <>
      <div>
        {validUrl ? (
          <>
            <img
              src="https://media.istockphoto.com/id/1313547780/vector/profile-verification-check-marks-icons-vector-illustration.jpg?s=612x612&w=0&k=20&c=XDWxGC05gd-sTn_cBvlI2aG1onqOdiVdPb0IeFO-Q2M="
              alt=""
              style={{ height: "100px", width: "100px" }}
            />
            <h2>
              You are verified, redirecting to LodgeMe login page in a moment
            </h2>
          </>
        ) : (
          <h2>404 Page</h2>
        )}
      </div>
    </>
  );
};

export default EmailVerify;
