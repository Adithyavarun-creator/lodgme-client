import axios from "axios";

const baseUrl = "";

export const registerUser = async (user) => {
  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/register`, user);
};

export const loginUser = async (user) => {
  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, user);
};
