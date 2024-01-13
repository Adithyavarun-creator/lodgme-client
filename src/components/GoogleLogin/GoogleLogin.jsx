import { app, signInWithGooglePopup } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import {
  signInFailure,
  signInSuccess,
  signInToken,
} from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl/url";
import GoogleLogo from "../../assets/loginlogos/google.png";
import toast, { Toaster } from "react-hot-toast";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch(`${baseUrl}/api/googlesignin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      //dispatch(signInToken(data.token));
      dispatch(signInSuccess(data));
      if (data?.user === null) {
        toast.success(
          "You are verfifed by google account , now you can login again"
        );
        setTimeout(() => {
          navigate("/user-sign-in");
          window.location.reload();
        }, 3000);
      } else {
        navigate("/dashboard-google-user");
      }
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  return (
    <>
      <img
        src={GoogleLogo}
        onClick={handleGoogleClick}
        className="socialiconimg"
        alt=""
        title="Sign with Google Account"
      />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default GoogleLogin;
