import React from 'react';
import photos from '../mock-data/photos';

function PhotoGallery() {
  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.urls.regular} alt={`Photo by ${photo.user.name}`} />
          <p>{photo.location.city}, {photo.location.country}</p>
          <p>By: {photo.user.name} (@{photo.user.username})</p>
          <img src={photo.user.profile} alt={`${photo.user.name}'s profile`} className="profile-pic" />
          <div className="similar-photos">
            <h4>Similar Photos:</h4>
            {photo.similar_photos.map((similarPhoto) => (
              <img key={similarPhoto.id} src={similarPhoto.urls.regular} alt={`Similar photo ${similarPhoto.id}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default PhotoGallery;
