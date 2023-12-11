import axios from "axios";

export const registerUser = async (user) => {
  await axios.post(`https://lodgme-server-api.vercel.app/api/register`, user);
};

export const loginUser = async (user) => {
  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, user);
};
