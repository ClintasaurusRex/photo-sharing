import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (this is a placeholder, replace with actual logic)
    const user = sessionStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    // Perform logout logic (e.g., clear session storage, make API call)
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">PhotoSharingApp</a>
      </div>
      <div className="navbar-links">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        ) : (
          <a href="/login" className="login-btn">
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
