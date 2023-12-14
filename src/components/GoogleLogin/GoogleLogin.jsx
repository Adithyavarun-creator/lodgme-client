import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app, signInWithGooglePopup } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl/url";
import GoogleLogo from "../../assets/loginlogos/google.png";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      //   const provider = new GoogleAuthProvider();
      //   const auth = getAuth(app);
      //   const result = await signInWithPopup(auth, provider);
      const response = await signInWithGooglePopup();
      console.log(response.user);

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
      setTimeout(() => {
        navigate("/dashboard-user");
      }, 2500);
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
    </>
  );
};

export default GoogleLogin;
