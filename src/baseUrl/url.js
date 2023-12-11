import axios from "axios";

export const registerUser = async (user) => {
  await axios.post(
    `https://lodgme-server-4qkl0t292-adithyavarun-creator.vercel.app/api/register`,
    user
  );
};

export const loginUser = async (user) => {
  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, user);
};
