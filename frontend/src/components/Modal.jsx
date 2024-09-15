// import PropTypes from "prop-types";
import "./Modal.scss";

function Modal({ isOpen, onClose, photo }) {
  if (!isOpen) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <img id="img-modal" src={photo.urls.full} alt={`Photo by ${photo.user.name}`} />
      </div>
      <p>
        {photo.location.city}, {photo.location.country}
      </p>
      <p>By: {photo.user.name}</p>
      <div className="similar-photos">
        <h2>Similar Photos</h2>
        <div className="similar-photos-grid">
          {photo.similar_photos.map((similarPhoto) => (
            <div key={similarPhoto.id} className="similar-photo-item">
              <img
                src={similarPhoto.urls.full}
                alt={`Similar photo by ${similarPhoto.user.name}`}
              />
              <p>
                {similarPhoto.location.city}, {similarPhoto.location.country}
              </p>
              <p>By: {similarPhoto.user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Modal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   photo: PropTypes.shape({
//     urls: PropTypes.shape({
//       full: PropTypes.string.isRequired,
//     }).isRequired,
//     user: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

export default Modal;
