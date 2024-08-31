import AllCards from "./AllCards";
import Search from "./Search";
import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterByFullTime, setFilterByFullTime] = useState(false);
  const [filterByLocation, setFilterByLocation] = useState("");
  const [slice, setSlice] = useState(6);

  const [filtredData, setFiltredData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const resp = await fetch("/devjobs-web-app/Data/data.json");
        const results = await resp.json();
        setOriginalData(results.cards);
        setData(results.cards.slice(0, slice));
      } catch {}
    }
    fetchdata();
  }, [filterByFullTime, searchQuery, data, filterByLocation, slice]);

  useEffect(() => {
    const filter = originalData.filter((card) => {
      const MatchesSearch =
        card.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.company.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFullTime = filterByFullTime
        ? card.contract.toLowerCase() === "full time"
        : true;

      const matchesLocation = card.location
        .toLowerCase()
        .includes(filterByLocation);
      return MatchesSearch && matchesFullTime && matchesLocation;
    });
    setFiltredData(filter.slice(0, slice));
  }, [filterByFullTime, searchQuery, originalData, filterByLocation, slice]);

  return (
    <div className="main">
      <Search
        FilterByLocation={filterByLocation}
        setFilterByLocation={setFilterByLocation}
        SearchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterByFullTime={filterByFullTime}
        setFilterByFullTime={setFilterByFullTime}
        setSlice={setSlice}
      />
      <AllCards filtredData={filtredData} setSlice={setSlice} slice={slice} />
    </div>
  );
};
export default Main;
