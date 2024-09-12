import React, { useState } from 'react';
import './App.scss';
import UploadForm from './components/UploadForm';
import PhotoGallery from './components/PhotoGallery';
import NavBar from './components/NavBar';

function App() {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  return (
    <div className="App">
      <NavBar />
      <UploadForm addPhoto={addPhoto} />
      <PhotoGallery photos={photos} />
    </div>
  );
}

export default App;
