import React from 'react';

function PhotoGallery({ photos }) {
  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Uploaded ${index}`} />
      ))}
    </div>
  );
}

export default PhotoGallery;