import { useState } from "react";
import { useEffect } from "react";
import filter from "./assets/mobile/icon-filter.svg";
import location from "./assets/desktop/icon-location.svg";

const Search = ({
  FilterByLocation,
  setFilterByLocation,
  SearchQuery,
  setSearchQuery,
  filterByFullTime,
  setFilterByFullTime,
}) => {
  const [isPopupOpen, setIsPopopOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  // const [fullTime, setFullTime] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth <= 400);
  });
  const handleOnFilterClick = () => {
    setIsPopopOpen(true);
  };

  const handleOnSeerchClick = () => {
    setIsPopopOpen(false);
  };
  const HandleInputeChange = (e) => {
    setSearchQuery(e.currentTarget.value);
  };
  const HandleLocationChange = (e) => {
    setFilterByLocation(e.currentTarget.value);
  };
  const handleFilterbyFullTime = () => {
    setFilterByFullTime((prev) => !prev);
  };

  return (
    <>
      <div
        className="search"
        onClick={windowWidth ? handleOnFilterClick : null}
      >
        <div className="col1">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
              fill=""
            />
          </svg>

          <input
            type="text"
            placeholder={
              window.innerWidth <= 1024
                ? " filter by title..."
                : "Filter by title, companies, expertise…"
            }
            className=""
            value={SearchQuery}
            onChange={HandleInputeChange}
          ></input>
        </div>

        <input
          type="text"
          placeholder=" filter by title"
          className="searchQuery"
          value={SearchQuery}
          onChange={HandleInputeChange}
        ></input>
        <div className="col2">
          <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
              fill="#5964E0"
            />
          </svg>
          <input
            type="text"
            value={FilterByLocation}
            onChange={HandleLocationChange}
            placeholder="filter by location"
          ></input>
        </div>
        <div className="col3">
          <input
            type="checkbox"
            onChange={handleFilterbyFullTime}
            checked={filterByFullTime}
          ></input>
          <label>Full Time</label>
          <p></p>
          <button>Search</button>
        </div>

        <div className="icons">
          <img
            src={filter}
            alt="filter"
            onClick={windowWidth ? handleOnFilterClick : null}
          ></img>
          <div className="search-icon">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <>
          <div className={`${isPopupOpen ? "overlayer" : ""}`}></div>
          <div className="popup">
            <div className="filtering-card">
              <div className="by-location">
                <img src={location} alt="loaction"></img>
                <input
                  type="text"
                  value={FilterByLocation}
                  onChange={HandleLocationChange}
                  placeholder="filter by location"
                ></input>
              </div>
              <div className="by-full-time">
                <label>
                  <input
                    type="checkbox"
                    onChange={handleFilterbyFullTime}
                    checked={filterByFullTime}
                  ></input>
                  Full Time
                </label>
              </div>
              <div>
                <button className="search-btn" onClick={handleOnSeerchClick}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Search;
