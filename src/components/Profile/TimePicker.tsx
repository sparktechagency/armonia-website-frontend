import { useState } from "react";
import { GoStopwatch } from "react-icons/go";

const TimePicker = ({ name }: { name: string }) => {
  const [selectedTime, setSelectedTime] = useState("");

  // Generate times from 00:00 to 23:30 with 30-min intervals
  const generateTimes = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      for (let m of [0, 30]) {
        const hour = String(h).padStart(2, "0");
        const minute = String(m).padStart(2, "0");
        times.push(`${hour}:${minute}`);
      }
    }
    return times;
  };

  return (
    <div className="relative w-full">
    <select className="appearance-none w-full border border-gray-300 rounded-lg p-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>

    {/* Custom Icon (Dropdown Arrow) */}
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      🔽 {/* Replace with any icon (like Heroicons or Lucide) */}
    </div>
  </div>
    // <div  className="w-full relative">
    //   <select
    //     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1"
    //     value={selectedTime}
    //     onChange={(e) => setSelectedTime(e.target.value)}
    //     id={name}
    //     name={name}
    //   >
    //     <option disabled value="">
    //       Select Time
    //     </option>
    //     {generateTimes().map((time) => (
    //       <option key={time} value={time}>
    //         {time}
    //       </option>
    //     ))}
    //   </select>
    //   <GoStopwatch size={15}  className="text-gray-700 absolute top-4 right-2"/>
    // </div>
  );
};

export default TimePicker;
