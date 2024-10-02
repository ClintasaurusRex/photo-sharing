import { useState } from "react";
import photos from "../mock-data/photos";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  const InputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = photos.filter((photo) => {
      const searchTerm = search.toLowerCase();
      return (
        photo.location.city.toLowerCase().includes(searchTerm) ||
        photo.location.country.toLowerCase().includes(searchTerm) ||
        photo.user.name.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredPhotos(filtered);
  };

  return {
    search,
    InputChange,
    handleSearch,
    filteredPhotos,
  };
};

export default useSearch;
