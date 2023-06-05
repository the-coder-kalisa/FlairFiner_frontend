import React, { useState, useEffect } from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import eventsData from "../../events.json";
import Popup from "./Popup";

type Event = {
  name: string;
  desc_prize: string;
  duration: string;
  location: string;
  image: string;
};
type EventsProps = {
  numEvents: number;
};
const Events: React.FC<EventsProps> = ({ numEvents }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Load events from the JSON file
    setEvents(eventsData);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="w-full">
      {showPopup && <Popup closePopup={() => setShowPopup(false)} />}

      <div className="w-full h-screen px-6">
        <div className="flex flex-row justify-around items-center h-20 shadow-md border-[#969595]">
          <section className="">{events.length} Events</section>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FaSearch className="text-gray-500" />
            </span>
            <input
              type="text"
              className={`py-2 pl-10 pr-4 rounded-lg border-2 focus:outline-none focus:border-${
                isDarkMode ? "gray-500" : "indigo-500"
              } ${
                isDarkMode
                  ? "bg-gray-700 text-gray-100"
                  : "bg-white text-gray-800"
              }`}
              placeholder="Search events"
            />
          </div>
          <Link to="#" onClick={() => setShowPopup(true)}>
            Create Events
          </Link>
        </div>
        {events.slice(0, numEvents).map((event, index) => (
          <div key={index} className="p-6 border-b-4">
            <div className="flex flex-row space-x-6">
              <div>
                <img
                  src={event.image}
                  alt={`Image ${index + 1}`}
                  className="h-32 w-32 object-cover"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-semibold">{event.name}</h2>
                  <p className="mt-2 text-gray-600">{event.desc_prize}</p>
                  <div className="flex items-center mt-4 text-gray-500">
                    <GoLocation className="mr-2" />
                    <p>{event.location}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p>{event.duration}</p>
                </div>
              </div>
              <div className="flex items-end">
                <button className="flex flex-row items-center w-40 rounded-2xl bg-[#AB0303] text-white h-12 hover:border-1 hover:border-[#AB0303] hover:bg-white hover:text-[#AB0303]">
                  Attend Event{" "}
                  <FaChevronRight className="hover-text-[#AB0303]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
