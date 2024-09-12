import React, { useState } from 'react';
import './App.css';
import UploadForm from './components/UploadForm';
import PhotoGallery from './components/PhotoGallery';

function App() {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  return (
    <div className="App">
      <header>
        <h1>Photo Share</h1>
      </header>
      <UploadForm addPhoto={addPhoto} />
      <PhotoGallery photos={photos} />
    </div>
  );
}

export default App;
