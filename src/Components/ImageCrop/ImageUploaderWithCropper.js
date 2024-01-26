import React, { useRef, useState } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

const ImageUploaderWithCropper = () => {
  const [croppedImage, setCroppedImage] = useState(null);
  const imageInputRef = useRef(null);
  const previewImageRef = useRef(null);
  const cropperRef = useRef(null);

  const handleImageUpload = (event) => {
    const input = event.target;

    if (!input.files || input.files.length === 0) {
      alert("No image selected.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const previewImage = previewImageRef.current;
      previewImage.src = e.target.result;

      // Initialize Cropper.js on the preview image
      cropperRef.current = new Cropper(previewImage, {
        aspectRatio: 5, // Adjust this value for the desired aspect ratio
        viewMode: 1, // Adjust this value for the desired view mode
      });
    };

    // Read the selected image file
    reader.readAsDataURL(input.files[0]);
  };

  const cropImage = () => {
    // Get the cropped data URL
    const croppedDataURL = cropperRef.current.getCroppedCanvas().toDataURL();
    setCroppedImage(croppedDataURL);
  };

  return (
    <div>
      <input
        type="file"
        ref={imageInputRef}
        accept="image/*"
        onChange={handleImageUpload}
      />
      <div>
        <img ref={previewImageRef} style={{ maxWidth: "100%" }} alt="Preview" />
      </div>
      <button onClick={cropImage}>Crop</button>
      {croppedImage && (
        <div>
          <h2>Cropped Image</h2>
          <img src={croppedImage} alt="Cropped" />
        </div>
      )}
    </div>
  );
};

export default ImageUploaderWithCropper;
