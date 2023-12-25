// export const baseUrl = "https://server-api-q17g.onrender.com";
// http://localhost:8000
import axios from "axios";

export const baseUrl = "http://localhost:8000";

export const searchListings = async (query) => {
  await axios.post(`${baseUrl}/api/search-listings`, query);
};
