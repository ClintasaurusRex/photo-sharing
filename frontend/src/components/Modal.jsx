import './Modal.scss';

function Modal({ isOpen, onClose, photo }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" >
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={photo.urls.full} alt={`Photo by ${photo.user.name}`} />
      </div>
    </div>
  );
}

export default Modal;
