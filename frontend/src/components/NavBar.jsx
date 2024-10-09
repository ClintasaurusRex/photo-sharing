import "./NavBar.scss";
import { useState } from "react";
import photos from "../mock-data/photos";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const InputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
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

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/posts">Posts</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      <img className="pixl-cloud" src="/pixlcloudheader.png" alt="photo" />
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={InputChange}
        />
      </form>
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((photo) => (
            <div key={photo.id} className="search-result-item">
              <img src={photo.url} alt={`Photo by ${photo.user.name}`} />
              <p>
                {photo.location.city}, {photo.location.country}
              </p>
              <p>{photo.user.name}</p>
            </div>
          ))}
        </div>
      )}
      <ul className="navbar-links">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
