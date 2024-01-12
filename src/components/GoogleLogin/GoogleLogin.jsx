import { app, signInWithGooglePopup } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl/url";
import GoogleLogo from "../../assets/loginlogos/google.png";
import toast, { Toaster } from "react-hot-toast";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const response = await signInWithGooglePopup();
      dispatch(signInSuccess(response.user.data));

      //console.log(result);
      const res = await fetch(`${baseUrl}/api/googlesignin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: response.user.displayName,
          email: response.user.email,
          photo: response.user.photoURL,
        }),
      });

      const data = await res.json();
      //console.log(data);
      dispatch(signInSuccess(data));
      toast("You are logging in to Lodgeme community shortly!", {
        icon: "👏",
      });
      setTimeout(() => {
        navigate("/dashboard-google-user");
      }, 1400);
    } catch (error) {
      console.log(error);
      dispatch(signInFailure(error));
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
