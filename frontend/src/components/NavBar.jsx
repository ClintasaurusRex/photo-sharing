import "./NavBar.scss";
import { useState } from "react";


const NavBar = () => {
  const [search, setSearch] = useState("");

  const InputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSeach = (e) => {
    e.preventDefault();
    console.log(search);

  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/posts">Posts</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <img className="pixl-cloud" src="/pixlcloudheader.png" alt="photo" />
      <form className="search-bar" onSubmit={handleSeach}>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={InputChange}
        />
      </form>

    </nav>
  );
};
export default NavBar;
