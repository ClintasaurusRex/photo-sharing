import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    // Add any additional logout logic here, such as clearing tokens or session data
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <button type="button" className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
