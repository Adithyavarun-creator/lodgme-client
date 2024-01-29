import { useEffect, useState } from "react";
import { SearchPageStyles } from "./SearchPageStyles";
import SearchBox from "../../components/SearchBox/SearchBox";
import queryString from "query-string";
import { baseUrl, searchListings } from "../../baseUrl/url";
import SearchPageCard from "../SearchPageCard/SearchPageCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";

const SearchPage = () => {
  const [country, setCountry] = useState("");

  const [fetchedResults, setFetchedResults] = useState([]);
  const [staydays, setStaydays] = useState("");

  const searchListings = async (locatedCountry) => {
    const res = await axios.post(`${baseUrl}/api/search-listings`, {
      locatedCountry,
    });
    setFetchedResults(res.data);
  };

  //console.log(fetchedResults);

  useEffect(() => {
    const { locatedCountry } = queryString.parse(window.location.search);
    // setStaydays(stayDays);
    setCountry(locatedCountry);
    searchListings(locatedCountry);
  }, [window.location.search]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Search results | Lodgeme</title>
        </Helmet>
        <SearchPageStyles>
          <div className="search-box">
            <SearchBox />
          </div>

          <div className="search-resultsbox">
            <div>
              <h2>
                {fetchedResults.length > 0 ? fetchedResults.length : 0} results
                found for your search {country} country
              </h2>
            </div>

            {staydays && (
              <div>
                <h3>
                  So it seems you are planning to stay for {staydays} days with
                  Lodgeme service, we are excited to show you the available
                  clicks for you 🥳🎉
                </h3>
              </div>
            )}

            {!fetchedResults.length ? (
              <strong>No results found for your search</strong>
            ) : (
              fetchedResults.map((res) => (
                <SearchPageCard key={res._id} res={res} />
              ))
            )}
          </div>
        </SearchPageStyles>
      </HelmetProvider>
    </>
  );
};

export default SearchPage;
