import React, { useState } from "react";

function FileUploadForm({ onFileUpload }) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFiles([...files, selectedFile]);
      if (onFileUpload) {
        onFileUpload(selectedFile);
      }
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex gap-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="w-28 h-24 rounded-md border flex items-center justify-center cursor-pointer"
          >
            <img
              src={URL.createObjectURL(file)}
              alt={`Selected Image ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <label className="w-28 h-24 rounded-md border flex items-center justify-center cursor-pointer ml-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="flex flex-col text-center items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H11V2H2V16H16V7H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM14 6V4H12V2H14V0H16V2H18V4H16V6H14ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
              fill="#CDCED0"
            />
            <path
              d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H11V2H2V16H16V7H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM14 6V4H12V2H14V0H16V2H18V4H16V6H14ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
              fill="black"
              fillOpacity="0.2"
            />
          </svg>
          <span>Agregar Imagen</span>
        </div>
      </label>
    </div>
  );
}

export default FileUploadForm;
