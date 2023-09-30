import React, { useState } from 'react';
import './InputImage.css';

const InputImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(file)
    };

    return (

        <div className="custom-file-input">
            <label htmlFor="fileInput" className="file-label">
                {selectedFile ? (
                    <img
                        src={URL.createObjectURL(selectedFile)}
                        className="preview-image"
                        alt=""
                    />
                ) : (
                    <div className="placeholder-image">
                        <span>Image Preview</span>
                    </div>
                )}
                <span className="file-text">Choose a file</span>
            </label>
            <input
                type="file"
                accept='image/*'
                id="fileInput"
                className="file-input"
                onChange={handleFileChange}
            />
        </div>

    );
}

export default InputImage;
