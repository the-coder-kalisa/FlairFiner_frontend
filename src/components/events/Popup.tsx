import React from "react";
import UploadSection from "./UploadSection";
import EventCreate from "./EventCreate";

interface PopupProps {
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center h-full overflow-y-scroll bg-black z-[40] bg-opacity-50 transition-opacity duration-1000">
      <div className="bg-white p-8 rounded transition-transform duration-500 h-[80%] overflow-y-scroll">
        <h2 className="mb-6">Create Event</h2>
        <UploadSection />
        <EventCreate />
        <button onClick={closePopup} className="text-white bg-gray-500 w-full rounded-md mt-2">Save</button>
      </div>
    </div>
  );
};

export default Popup;