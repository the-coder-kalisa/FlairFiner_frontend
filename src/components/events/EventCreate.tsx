import React, { useState } from "react";
import timeZones from "../../timeZone.json";

type EventFormat = {
  value: string;
  label: string;
};

const eventFormats: EventFormat[] = [
  { value: "conference", label: "Conference" },
  { value: "workshop", label: "Workshop" },
  { value: "webinar", label: "Webinar" },
  { value: "seminar", label: "Seminar" },
  { value: "concert", label: "concert" },
];

const EventCreate: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<string>("");

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFormat(event.target.value);
  };

  return (
    <div className="flex flex-col mt-3">
      <div>
        <label htmlFor="eventFormat" className="">
          Event format*
        </label>{" "}
        <br />
        <select
          id="eventFormat"
          name="eventFormat"
          value={selectedFormat}
          onChange={handleFormatChange}
          required
          className="w-full outline-gray-400 rounded-md p-1 border-2 border-gray-300 mb-3"
        >
          <option value="">Select an option</option>
          {eventFormats.map((format) => (
            <option key={format.value} value={format.value}>
              {format.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="eventName">Event Name</label> <br />
        <input
          type="text"
          name="eventName"
          id="eventName"
          className="w-full rounded-md p-1 outline-gray-400 border-2 border-gray-300 mb-3"
          style={{ outlineColor: "gray" }}
        />
      </div>
      <div>
        <label htmlFor="timeZone">Timezone*</label> <br />
        <select
          defaultChecked
          className="w-full rounded-md p-1 outline-gray-400 border-2 border-gray-300 mb-3"
        >
          {timeZones.map((timeZone: string) => (
            <option key={timeZone} value={timeZone}>
              {timeZone}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="location">Location Address*</label> <br />
        <input
          type="text"
          name="location"
          id="location"
          className="w-full rounded-md p-1 outline-gray-400 border-2 border-gray-300 mb-3"
          style={{ outlineColor: "gray" }}
        />
      </div>
    </div>
  );
};

export default EventCreate;
