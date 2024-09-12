import "./PhotoGallery.scss";
import photos from '../mock-data/photos';

const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      {photos.map(photo => (
        <div key={photo.id} className="photo-item">
          <img src={photo.urls.full} alt={`Photo by ${photo.user.name}`} />
          <div className="photo-info">
            <p>{photo.location.city}, {photo.location.country}</p>
            <p>By: {photo.user.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PhotoGallery;
