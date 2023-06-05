import React, { useRef, ChangeEvent } from "react";
import cameraImage from "../../images/camera.jpg";

const UploadSection: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Perform the upload logic here with the selected file
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="bg-gray-100 px-14 py-6">
      <label htmlFor="uploadInput" className="cursor-pointer">
        <img
          src={cameraImage}
          alt="Upload"
          onClick={handleClick}
          className="w-32 h-32 m-auto"
        />
        <p>Upload Video/Image</p>
        <p className="text-gray-500 mb-2">Minimum width 480 pixels, 19:19</p>
      </label>
      <input
        id="uploadInput"
        type="file"
        accept="image/*, video/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadSection;
