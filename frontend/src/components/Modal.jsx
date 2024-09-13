import PropTypes from "prop-types";
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
