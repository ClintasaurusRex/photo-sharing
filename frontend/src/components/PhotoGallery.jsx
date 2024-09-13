import "./PhotoGallery.scss";
import photos from '../mock-data/photos';
import { useState } from "react";
import Modal from "./Modal";

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };


  return (
    <div className="photo-gallery">
      {photos.map(photo => (
        <div
          key={photo.id}
          className="photo-item"
          onClick={() => openModal(photo)}
        >
          <img src={photo.urls.full} alt={`Photo by ${photo.user.name}`} />
          <div className="photo-info">
            <p>{photo.location.city}, {photo.location.country}</p>
            <p>By: {photo.user.name}</p>
          </div>
        </div>
      ))}
      <Modal isOpen={!!selectedPhoto} onClose={closeModal} photo={selectedPhoto} />
    </div>
  );
};
export default PhotoGallery;
