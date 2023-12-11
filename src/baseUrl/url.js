import axios from "axios";

const baseUrl = "https://server-api-q17g.onrender.com";

export const registerUser = async (user) => {
  await axios.post(`${baseUrl}/api/register`, user);
};

export const loginUser = async (user) => {
  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, user);
};
