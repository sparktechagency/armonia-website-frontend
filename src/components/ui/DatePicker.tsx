import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from "react-icons/md";

export type TWeekday =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

interface BusinessDayPickerProps {
  allowedWeekdays: TWeekday[];
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export const BusinessDayPicker: React.FC<BusinessDayPickerProps> = ({
  allowedWeekdays,
  selectedDate,
  setSelectedDate,
}) => {
  const weekdayMap: Record<TWeekday, number> = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const allowedDays = allowedWeekdays.map((day) => weekdayMap[day]);

  const isAllowedDay = (date: Date) => allowedDays.includes(date.getDay());

  return (
    <div className="relative w-fit group">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        filterDate={isAllowedDay}
        placeholderText="Select date"
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
        className="border py-2 px-3 shadow rounded w-full text-gray-700 leading-tight group-focus:outline-none group-focus:shadow-outline"
      />
      <MdOutlineDateRange
        size={19}
        className="text-gray-700 hover:text-gray-900 absolute top-[9px] right-2.5 pointer-events-none"
      />
    </div>
  );
};
