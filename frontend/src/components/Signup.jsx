import React, { useState, useEffect } from "react";
import useFormData from "../hooks/useFormData";
import { useNavigate } from "react-router-dom";
import EmailPass from "./Email-Pass";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (this is a placeholder, replace with actual logic)
    const user = sessionStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const onSuccess = () => {
    navigate("/");
  };

  const { formData, handleChange, handleSubmit } = useFormData(onSuccess);

  const handleLogout = () => {
    // Perform logout logic (e.g., clear session storage, make API call)
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="signup-container">
      {isLoggedIn ? (
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="signup-form">
          <h1>Sign up</h1>

          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Ash Williams"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <EmailPass formData={formData} handleChange={handleChange} />

          <button type="submit" className="signup-btn">
            Sign up
          </button>

          <p className="signin-link">
            Already have an account? <a href="/signin">Sign in</a>
          </p>

          <div className="or-divider">
            <span>or</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signup;
