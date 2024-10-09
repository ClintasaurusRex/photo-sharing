import { useState } from "react";
import photos from "../mock-data/photos";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const InputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const filteredList = photos.filter((photo) => {
      return (
        !search ||
        photo.user.name.toLowerCase().includes(search.toLowerCase()) ||
        photo.location.city.toLowerCase().includes(search.toLowerCase()) ||
        photo.location.country.toLowerCase().includes(search.toLowerCase())
      );
    });
    setSearchResults(filteredList);
  };

  return {
    search,
    InputChange,
    handleSearch,
    searchResults,
  };
};

export default useSearch;
