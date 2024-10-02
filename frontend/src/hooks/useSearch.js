import { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");

  const InputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return {
    search,
    InputChange,
    handleSearch,
  };
};

export default useSearch;
