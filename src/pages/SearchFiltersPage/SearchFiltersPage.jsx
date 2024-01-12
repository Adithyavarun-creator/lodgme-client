import { useEffect, useState, useMemo } from "react";
import { SearchFiltersPageStyles } from "./SearchFiltersPageStyles";
import SearchBox from "../../components/SearchBox/SearchBox";
import queryString from "query-string";
import countryList from "react-select-country-list";
import { baseUrl, searchListings } from "../../baseUrl/url";
import OnlySpinner from "../../components/OnlySpinner/OnlySpinner";
import SearchPageCard from "../SearchPageCard/SearchPageCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";

const SearchFiltersPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState({
    searchTerm: "",
    type: "all",
    sort: "created_at",
    order: "desc",
  });
  const [startDate, setStartDate] = useState(new Date());

  const [fetchedResults, setFetchedResults] = useState([]);

  useEffect(() => {
    //eslint-disable-next-line no-restricted-globals
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");
    // console.log(moment(startDateFromUrl).format());

    // urlParams.set("startDate", startDate);

    if (searchTermFromUrl || typeFromUrl || sortFromUrl || orderFromUrl) {
      setSearchData({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        sort: sortFromUrl || "created_at",
        order: orderFromUrl || "desc",
      });
    }

    const fetchListings = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`${baseUrl}/api/get?${searchQuery}`);
      const data = await res.json();
      setFetchedResults(data);
      setLoading(false);
    };

    fetchListings();
    //eslint-disable-next-line no-restricted-globals
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", searchData.searchTerm);
    urlParams.set("type", searchData.type);
    urlParams.set("sort", searchData.sort);
    urlParams.set("order", searchData.order);
    const searchQuery = urlParams.toString();
    navigate(`/search-filter-results?${searchQuery}`);
  };

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "furnished" ||
      e.target.id === "studio" ||
      e.target.id === "modern" ||
      e.target.id === "hotel" ||
      e.target.id === "flat" ||
      e.target.id === "hostel"
    ) {
      setSearchData({ ...searchData, type: e.target.id });
    }

    if (e.target.id === "searchTerm") {
      setSearchData({ ...searchData, searchTerm: e.target.value });
    }

    if (e.target.id === "availableFrom") {
      setSearchData({
        ...searchData,
        availableFrom: moment(searchData.availableFrom).format(),
      });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";

      const order = e.target.value.split("_")[1] || "desc";

      setSearchData({ ...searchData, sort, order });
    }
  };

  // console.log(moment(startDate).format());

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Search filter results | Lodgeme</title>
        </Helmet>
        <SearchFiltersPageStyles>
          <div className="search-box">
            {/* <SearchBox /> */}
            <div className="searchboxstyles">
              <div className="searchcontentbox">
                <div className="searchlocationbox">
                  <label htmlFor="location">Search Country</label>
                  <input
                    type="text"
                    id="searchTerm"
                    placeholder="Country Name"
                    value={searchData.searchTerm}
                    onChange={handleChange}
                  />
                </div>

                <div className="inputcheckboxsection">
                  <div className="searchlocationbox">
                    <label htmlFor="location">Type</label>
                  </div>
                  <div className="input-checkbox-content">
                    <div>
                      <label htmlFor="all" className="span">
                        All
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="all"
                        name="all"
                        onChange={handleChange}
                        checked={searchData.type === "all"}
                      />
                    </div>
                  </div>

                  <div className="input-checkbox-content">
                    <div>
                      <label htmlFor="furnished" className="span">
                        Furnished
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="furnished"
                        name="furnished"
                        onChange={handleChange}
                        checked={searchData.type === "furnished"}
                      />
                    </div>
                  </div>

                  <div className="input-checkbox-content">
                    <div>
                      <label htmlFor="modern" className="span">
                        Modern
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="modern"
                        name="modern"
                        onChange={handleChange}
                        checked={searchData.type === "modern"}
                      />
                    </div>
                  </div>

                  <div className="input-checkbox-content">
                    <div>
                      <label htmlFor="studio" className="span">
                        Studio
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="studio"
                        name="studio"
                        onChange={handleChange}
                        checked={searchData.type === "studio"}
                      />
                    </div>
                  </div>

                  <div className="input-checkbox-content">
                    <div>
                      <label htmlFor="hotel" className="span">
                        Hotel
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="hotel"
                        name="hotel"
                        onChange={handleChange}
                        checked={searchData.type === "hotel"}
                      />
                    </div>
                  </div>

                  <div className="input-checkbox-content">
                    <div>
                      <label htmlFor="flat" className="span">
                        Flat
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="flat"
                        name="flat"
                        onChange={handleChange}
                        checked={searchData.type === "flat"}
                      />
                    </div>
                  </div>

                  <div className="input-checkbox-content">
                    <div>
                      <label htmlFor="hostel" className="span">
                        Hostel
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="hostel"
                        name="hostel"
                        onChange={handleChange}
                        checked={searchData.type === "hostel"}
                      />
                    </div>
                  </div>
                </div>

                <div className="inputcheckboxsection">
                  <div className="searchlocationbox">
                    <label htmlFor="location">Sort by</label>
                  </div>
                  <select
                    onChange={handleChange}
                    defaultValue={"created_at_desc"}
                    id="sort_order"
                    className=""
                  >
                    <option value="regularPrice_desc">Price high to low</option>
                    <option value="regularPrice_asc">Price low to high</option>
                    <option value="createdAt_desc">Latest</option>
                    <option value="createdAt_asc">Oldest</option>
                  </select>
                </div>

                <div className="searchfilterbtnbox">
                  <button className="searchfilterbtn" onClick={handleSubmit}>
                    Search your matches
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="search-resultsbox">
            <div></div>
            <h2>
              {fetchedResults.length > 0 ? fetchedResults.length : 0}{" "}
              {fetchedResults.length === 1 ? "result" : "results"} found for
              your search country
            </h2>
            {/* <div>{loading && <OnlySpinner />}</div> */}

            {!fetchedResults.length ? (
              <strong>No results found for your search</strong>
            ) : loading ? (
              <OnlySpinner />
            ) : (
              fetchedResults.map((res) => (
                <SearchPageCard key={res._id} res={res} />
              ))
            )}
          </div>
        </SearchFiltersPageStyles>
      </HelmetProvider>
    </>
  );
};

export default SearchFiltersPage;
