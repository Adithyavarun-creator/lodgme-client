// export const baseUrl = "https://server-api-q17g.onrender.com";
// http://localhost:8000
//https://lodgme-server-api.vercel.app
import axios from "axios";

export const baseUrl = "https://server-api-q17g.onrender.com";
export const clientUrl = "https://lodgeme.com";

export const searchListings = async (query) => {
  await axios.post(`${baseUrl}/api/search-listings`, query);
};

//dashboard email ceo@lodgeme.com (MAIL°
//dashboard password Mot de passe : 0659043811Cm@
