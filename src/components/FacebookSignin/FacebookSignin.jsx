import { app, signInWithGooglePopup } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import FacebookLogo from "../../assets/loginlogos/facebook.png";
import toast, { Toaster } from "react-hot-toast";
import { baseUrl } from "../../baseUrl/url";
import { FacebookProvider, LoginButton } from "react-facebook";
import axios from "axios";

const FacebookSignin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSuccess(response) {
    try {
      const result = await axios.post(`${baseUrl}/api/facebooksignin`, {
        userId: response.authResponse.userID,
        accessToken: response.authResponse.accessToken,
      });
      dispatch(signInSuccess(result.data.authObject));
      toast.success("Welcome to your dashboard content of Lodgeme");
      setTimeout(() => {
        navigate("/dashboard-facebook-user");
      }, 1400);
    } catch (error) {
      dispatch(signInFailure(error));
    }
  }

  function handleError(error) {
    console.log(error);
  }

  return (
    <>
      <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
        <LoginButton
          scope="email"
          onError={handleError}
          onSuccess={handleSuccess}
        >
          <img
            src={FacebookLogo}
            className="socialiconimg"
            alt=""
            title="Sign with Facebook Account"
          />
        </LoginButton>
      </FacebookProvider>
    </>
  );
};

export default FacebookSignin;
