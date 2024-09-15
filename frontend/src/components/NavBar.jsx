import "./NavBar.scss";
import useSearch from "../hooks/useSearch";


const NavBar = () => {
  const { search, InputChange, handleSearch } = useSearch();

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/posts">Posts</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/about">About</a></li>
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
      <ul className="navbar-links">
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
    </nav>
  );
};
export default NavBar;
