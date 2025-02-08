import { IoMdStopwatch } from "react-icons/io";

const TimePicker = ({
  name,
  defaultValue,
  disabled,
}: {
  name: string;
  defaultValue?: string;
  disabled?: boolean;
}) => {
  // const [selectedTime, setSelectedTime] = useState("");

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
    <div className="w-full relative">
      <select
        required
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1"
        // value={selectedTime}
        // onChange={(e) => setSelectedTime(e.target.value)}
        defaultValue={defaultValue || ""}
        id={name}
        name={name}
        disabled={disabled}
      >
        <option disabled value="">
          {name.slice(0, 1).toUpperCase() + name.slice(1)} Time
        </option>
        {generateTimes().map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <IoMdStopwatch
        size={19}
        className="text-gray-700 hover:text-gray-800 absolute top-[16.5px] right-2.5 pointer-events-none"
      />
    </div>
  );
};

export default TimePicker;
