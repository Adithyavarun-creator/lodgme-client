// export const baseUrl = "https://server-api-q17g.onrender.com";
// http://localhost:8000
//https://lodgme-server-api.vercel.app
import axios from "axios";

export const baseUrl = "https://lodgme-server-api.vercel.app";

export const searchListings = async (query) => {
  await axios.post(`${baseUrl}/api/search-listings`, query);
};
