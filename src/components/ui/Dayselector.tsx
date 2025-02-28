"use client";
import React, { useState } from "react";

const Dayselector = ({
  editAble,
  selectedDays,
  setSelectedDays,
}: {
  editAble?: boolean;
  selectedDays: string[];
  setSelectedDays: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Handle day selection
  const handleDayChange = (day: string) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((item) => item !== day)
        : [...prevSelectedDays, day]
    );
  };

  return (
    <>
      <div className="space-y-2 mb-4 mt-1">
        {daysOfWeek.map((day) => (
          <div key={day} className="flex items-center">
            <input
              type="checkbox"
              id={day}
              value={day}
              required={selectedDays.length < 1}
              //   disabled={editAble}
              checked={selectedDays.includes(day)}
              onChange={() => {
                if (!editAble) handleDayChange(day);
              }}
              className="form-checkbox h-3.5 w-3.5 text-blue-600 accent-blue-500 border-gray-300 rounded-lg"
            />
            <label htmlFor={day} className="ml-2 text-gray-700">
              {day}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dayselector;
