import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useFormData = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        navigate("/"); // Redirect to the home page
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    formData,
    handleChange,
    handleLogin,
  };
};

export default useFormData;
