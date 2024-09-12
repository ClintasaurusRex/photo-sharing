import React, { useState } from 'react';

function UploadForm({ addPhoto }) {
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addPhoto(reader.result);
      };
      reader.readAsDataURL(photo);
      setPhoto(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPhoto(e.target.files[0])}
      />
      <button type="submit">Upload Photo</button>
    </form>
  );
}

export default UploadForm;
