import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import UploadForm from "./components/UploadForm";
import PhotoGallery from "./components/PhotoGallery";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  const [photos, setPhotos] = useState([]);
  const [displayedPhotos, setDisplayedPhotos] = useState(photos);

  const handleSearch = (searchResults) => {
    setDisplayedPhotos(searchResults);
  };

  const addPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  return (
    <Router>
      <div className="App">
        <NavBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <UploadForm addPhoto={addPhoto} />
                <PhotoGallery photos={displayedPhotos} />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
