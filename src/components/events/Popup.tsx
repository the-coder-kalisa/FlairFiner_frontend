import React from "react";
import UploadSection from "./UploadSection";
import EventCreate from "./EventCreate";

interface PopupProps {
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[40] bg-opacity-50 transition-opacity duration-1000">
      <div className="bg-white p-8 rounded transition-transform duration-500">
        <h2 className="mb-6">Create Event</h2>
        <UploadSection />
        <EventCreate />
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;