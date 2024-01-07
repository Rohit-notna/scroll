// ... (existing imports)

import { useState } from "react";

const Calend = () => {
  const [date, setDate] = useState(new Date());

  const renderTimeSlots = () => {
    const timeSlots = [];
    const events = [
      { startHour: 11, endHour: 12, title: 'Coffee with Marisu', location: 'Philz Coffee', color: 'bg-blue-400' },
      { startHour: 13, endHour: 14, title: 'Meeting with Danny Trinh', location: 'Mars Land', color: 'bg-gray-400' },
    ];

    const startTime = 10;
    const endTime = 14;

    for (let hour = startTime; hour <= endTime; hour++) {
      const isEvent = events.some(event => hour >= event.startHour && hour < event.endHour);

      timeSlots.push(
        <div key={hour} className={`flex items-center ${isEvent ? 'border-b' : ''}`}>
          <div className="w-16">{`${hour}:00`}</div>
          <div className={`flex-grow ${isEvent ? 'border-l p-2' : ''}`}>
            {isEvent && events.map((event, index) => {
              if (hour >= event.startHour && hour < event.endHour) {
                return (
                  <div
                    key={index}
                    className={`w-80 ${event.color} rounded-sm py-2 px-2`} // Concatenate the color class directly
                  >
                    <p className="">{event.title} <span className="text-md ml-3 opacity-70">{event.location}</span></p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      );
    }

    return timeSlots;
  };

  return (
    <div className="flex flex-col border rounded-lg bg-gray-100 mt-7 mb-4 overflow-y-auto">
      <div className="flex">
      </div>
      <div className="flex">
        <div className="">
          {renderTimeSlots()}
        </div>
      </div>
    </div>
  );
};

export default Calend;
