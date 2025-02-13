"use client";
// import { DatePicker, DatePickerProps, TimePicker } from "antd";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import Button from "./Button";
import { Service, Slot } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { useRemaningSlotsQuery } from "@/redux/features/slots/slots.api";
import { FaCaretDown } from "react-icons/fa";

type FormValues = {
  [key: string]: FormDataEntryValue | undefined;
};

export default function Checkout({
  selectedServices,
  profileId,
}: {
  selectedServices: Service[];
  profileId: string;
}) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading, isError } = useRemaningSlotsQuery(
    {
      args: [{ name: "date", value: selectedDate?.getTime() }],
      profileId,
    },
    { skip: !setSelectedDate }
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //  e.preventDefault();
    //  const formData = new FormData(e.currentTarget);
    //  const formValues: FormValues = Object.fromEntries(formData.entries());
  };
  //   const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  //     console.log(date, dateString);
  //   };
  //   const [time, setTime] = useState(null);

  //   const onChanges = (time, timeString) => {
  //     setTime(timeString);
  //     console.log("Selected time:", timeString);
  //   };
  console.log(data, isLoading, isError);

  const total = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );
  return (
    <form className="bg-white max-w-[1440px] w-full py-16 px-10 lg:px-56 relative">
      <div className="text-black lg:flex justify-center items-start gap-8">
        <Image
          src={"/checkout.png"}
          height={702}
          width={334}
          className="hidden sm:block"
          alt="img"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="space-y-4">
          <p className="text-xl font-semibold font-Playfair_Display">
            Beautician
          </p>
          <h1 className="lg:text-4xl text-4xl font-bold text-blue-500 font-Playfair_Display">
            Book Appointment
          </h1>
          <p>Please fill this form to book an appointment</p>
          <div className="space-y-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                User Name
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                defaultValue={user?.name}
                type="text"
                placeholder="Username"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email (Not Editable)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={user?.email}
                readOnly
                placeholder="Email"
              />
            </div>
            <div className="w-full lg:flex justify-between items-center gap-5">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Appointment Date
                </label>
                <input
                  required
                  type="date"
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  min={new Date().toISOString().split("T")[0]}
                />
                {/* <DatePicker
                    onChange={onChange}
                    className="lg:w-[300px] w-full py-2 px-3"
                  /> */}
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Time
                </label>
                <input type="time" step={1800} />
                {/* <TimePicker
                    className="lg:w-[300px] w-full py-2 px-3"
                    onChanges={onChanges}
                    value={time}
                  />
                  {time && <p>Selected Time: {time}</p>} */}
              </div>
            </div>
            <div className="lg:py-8 mt-20  mx-auto">
              <h1 className="lg:text-4xl text-3xl font-bold font-Playfair_Display text-blue-500 mb-8">
                Selected Service Prices
              </h1>
              <ul className="space-y-4">
                {selectedServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-dotted pb-2 text-gray-700"
                  >
                    <p>
                      <span className="font-semibold">{service.name}</span>
                      <span className="text-[10px] font-medium"> (30min)</span>
                    </p>
                    <span className="text-blue-500">from €{service.price}</span>
                    <div className="w-full relative max-w-44">
                      <select
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1"
                        defaultValue={""}
                        name={"category"}
                      >
                        <option disabled value="">
                          Select Slot
                        </option>
                        {data.data?.map((item: Slot) => (
                          <option key={item.id} value={item.id}>
                            {item.start} to {item.end}
                          </option>
                        ))}
                      </select>
                      <FaCaretDown
                        size={19}
                        className="text-gray-700 hover:text-gray-800 absolute top-[16.5px] right-2.5 pointer-events-none"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-8 font-bold lg:text-xl text-lg">
                <span>Total</span>
                <span className="text-green-600">€{total}</span>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center ">
            <button className="bg-[#142F62] w-[600px] py-4 mb-28 text-xl font-bold font-Playfair_Display text-white rounded-3xl transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105">
              Send Request
            </button>
          </div> */}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button type="submit" className="max-w-lg w-full mt-10 rounded-2xl">
          Send Request
        </Button>
      </div>
    </form>
  );
}
