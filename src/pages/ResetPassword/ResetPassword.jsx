import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ResetPasswordStyles } from "./ResetPasswordStyles";
import toast, { Toaster } from "react-hot-toast";

const ResetPassword = () => {
  const { id, token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const resetPassword = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/reset-password/${id}/${token}`,
      { password }
    );
    alert("Password saved");
    toast.success("Your new password is saved and sign in now to access");
    setTimeout(() => {
      navigate("/user-sign-in");
    }, 3000);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Reset Password | LodgeMe</title>
        </Helmet>
        <ResetPasswordStyles>
          <div>
            <h1>Reset Password for LodgeMe</h1>
          </div>
          <div>
            <input
              className="emailInput"
              type="password"
              value={password}
              placeholder="***********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div>
            <input
              className="emailInput"
              type="password"
              value={confirmPassword}
              placeholder="***********"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div> */}
          <div>
            <button className="resetpswd-btn" onClick={resetPassword}>
              Save New Password
            </button>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </ResetPasswordStyles>
      </HelmetProvider>
    </>
  );
};

export default ResetPassword;
