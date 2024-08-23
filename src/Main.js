import AllCards from "./AllCards";
import Search from "./Search";
import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterByFullTime, setFilterByFullTime] = useState(false);
  const [filterByLocation, setFilterByLocation] = useState("");

  const [filtredData, setFiltredData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const resp = await fetch("/devjobs-web-app/Data/data.json");
        const results = await resp.json();
        setData(results.cards);
      } catch {}
    }
    fetchdata();
  }, [filterByFullTime, searchQuery, data, filterByLocation]);

  useEffect(() => {
    const filter = data.filter((card) => {
      const MatchesSearch = card.position
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesFullTime = filterByFullTime
        ? card.contract.toLowerCase() === "full time"
        : true;

      const matchesLocation = card.location
        .toLowerCase()
        .includes(filterByLocation);
      return MatchesSearch && matchesFullTime && matchesLocation;
    });
    setFiltredData(filter);
  }, [filterByFullTime, searchQuery, data, filterByLocation]);

  return (
    <div className="main">
      <Search
        FilterByLocation={filterByLocation}
        setFilterByLocation={setFilterByLocation}
        SearchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterByFullTime={filterByFullTime}
        setFilterByFullTime={setFilterByFullTime}
      />
      <AllCards filtredData={filtredData} />
    </div>
  );
};
export default Main;
