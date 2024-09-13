import React, { useState } from 'react';
import "./UploadForm.scss";

function UploadForm({ addPhoto }) {
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addPhoto(reader.result);
        console.log("photo added");
      };
      reader.readAsDataURL(photo);
      setPhoto(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="choose-file"
        type="file"
        accept="image/*"
        onChange={(e) => setPhoto(e.target.files[0])}
      />
      <button className="upload-photo" type="submit">Upload Photo</button>
    </form>
  );
}

export default UploadForm;
