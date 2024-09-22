import { useState } from "react";
import axios from "axios";

const useFormData = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    receiveUpdates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        { user: formData } // Nest formData under the user key
      );
      console.log("Form Submitted", response.data);
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Button Clicked");
    // Handle form submission logic here
  };

  return { formData, handleChange, handleSubmit, handleClick };
};

export default useFormData;

// const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   return { formData, handleChange, handleSubmit };
