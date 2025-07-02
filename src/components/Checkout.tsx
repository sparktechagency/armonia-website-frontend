"use client";
import Image from "next/image";
import React, { FormEvent, useContext, useState } from "react";
import { Service, TSlot } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { useRemaningSlotsQuery } from "@/redux/features/slots/slots.api";
import { toast } from "react-toastify";
import { useCreateBookingMutation } from "@/redux/features/booking/booking.api";
import Swal from "sweetalert2";
import { BtnSpenner } from "./Spinner";
import { context } from "@/app/Context";
import { useRouter } from "next/navigation";
import { BusinessDayPicker, TWeekday } from "./ui/DatePicker";
import { convertMinutesToTotalDuration } from "@/lib/getDurationFromMinute";
import { cn } from "@/lib/utils";

// type FormValues = {
//   [key: string]: FormDataEntryValue | undefined;
// };

export default function Checkout({
  selectedServices,
  profileId,
  allowedWeekdays,
}: {
  selectedServices: Service[];
  profileId: string;
  allowedWeekdays: TWeekday[];
}) {
  const router = useRouter();
  const appContext = useContext(context);
  const { user } = useAppSelector((state) => state.auth);
  const [selectedSlot, setSelectedSlot] = useState<TSlot[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dispatch, { isLoading: muLoading }] = useCreateBookingMutation();

  const total = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );
  const totalTime = selectedServices.reduce(
    (sum, service) => sum + service.time,
    0
  );
  const { data, isLoading } = useRemaningSlotsQuery(
    {
      args: [
        { name: "date", value: selectedDate?.getTime() },
        { name: "duration", value: totalTime },
      ],
      profileId,
    },
    { skip: !setSelectedDate }
  );
  const remainingSlots = Object.entries(data?.data || {});
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    // return console.log(formValues);
    // if (selectedSlot.length < totalTime / 30) {
    //   toast.error("Please select the slots in order");
    //   return;
    // }
    const payload = {
      ...formValues,
      profileId,
      bookingDate: selectedDate?.getTime(),
      serviceIds: selectedServices.map((item) => item.id),
      timeSlotIds: selectedSlot.map((item: TSlot) => item.id),
      slots: selectedSlot,
      isPreviousAvailable: false,
    };
    try {
      await dispatch(payload).unwrap();
      appContext?.setModal(null);
      Swal.fire({
        icon: "success",
        title: "✅Request Received",
        text: "Thank you! Our concierge team will be in touch within 3 hours to confirm your booking. You'll hear from us via email shortly. ",
      });
      router.push("/dashboard/bookings/pending");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Failed!!",
        text:
          error.message ||
          error?.data?.message ||
          "Something went wrong. Please try again later.",
      });
    }
  };
  // console.log(selectedServices);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-[1440px] w-full py-16 px-10 lg:px-56 relative"
    >
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
          <h1 className="lg:text-3xl text-2xl font-bold text-blue-500 font-Playfair_Display">
            Book Appointment
          </h1>
          {/* <p>Please fill this form to book an appointment</p> */}
          <div className="space-y-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Client Name
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                defaultValue={user?.name}
                placeholder="Username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                readOnly
                type="text"
                id="username"
                value={user?.email}
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                Your Location
              </label>
              <input
                // autoComplete="on"
                required
                id="location"
                type="text"
                name="location"
                placeholder="Location..."
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                // htmlFor="username"
              >
                Appointment Date
              </label>
              {/* <input
                required
                type="date"
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                min={new Date().toISOString().split("T")[0]}
              /> */}
              <BusinessDayPicker
                allowedWeekdays={allowedWeekdays}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                // htmlFor="username"
              >
                Appointment Time
              </label>
              <select
                className={cn(
                  "appearance-none shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  { "text-gray-400": !selectedDate }
                )}
                defaultValue={""}
                // value={
                //   data?.data?.find(
                //     (item: Slot) =>
                //       item.id === selectedSlot[isPreviousAvailable ? 1 : 0]
                //   )?.id || ""
                // }
                required
                onClick={() => {
                  if (!selectedDate)
                    toast.warning("Appointment date select is required!", {
                      position: "bottom-center",
                    });
                }}
                // name={"slot" + "-"}
                onChange={(e) => {
                  setSelectedSlot(data?.data?.[e.target.value]);
                }}
              >
                <option disabled value="">
                  {isLoading
                    ? "Loading..."
                    : remainingSlots.length < 0
                    ? "No available slots"
                    : "Select time slot"}
                </option>
                {remainingSlots?.map(([key, value], slotIindex: number) => {
                  console.log(key, value);
                  return (
                    <option
                      key={slotIindex}
                      value={key}
                      className="notranslate"
                    >
                      {key}
                    </option>
                  );
                })}
              </select>
              <p className="text-sm text-gray-600 pt-1">
                You will need {convertMinutesToTotalDuration(totalTime)} from
                selected start time!
              </p>
            </div>
            <div className="lg:py-4 mt-20  mx-auto">
              <h1 className="lg:text-3xl text-2xl font-bold font-Playfair_Display text-blue-500 mb-4">
                Selected Service Prices
              </h1>
              <div>
                {/* <div className="">
                  {selectedSlotInfo.slice(1).map((item, i) => (
                    <p key={item.id || i}>
                      {item.start} - {item.end}
                    </p>
                  ))}
                </div> */}

                {/* <p className="text-gray-700 font-semibold">
                  Selected Time:
                  {selectedSlotInfo?.length > 0 &&
                  selectedSlotInfo[0]?.start &&
                  selectedSlotInfo[selectedSlotInfo.length - 1]?.end
                    ? `${selectedSlotInfo[0].start} - ${
                        selectedSlotInfo[selectedSlotInfo.length - 1].end
                      }`
                    : ""}
                </p> */}
              </div>
              {/* <p className="mb-2 block text-gray-700 font-medium">
                Selected Services
              </p> */}
              <ul className="space-y-2">
                {selectedServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-dotted gap-3 pb-3 text-gray-700"
                  >
                    <div className="flex justify-between items-center w-full gap-2">
                      <p>
                        <span className="font-semibold">{service.name}</span>{" "}
                        <span className="text-[10px] font-medium">
                          {service.time} min
                        </span>
                      </p>
                      <span className="text-blue-500 text-right notranslate">
                        € {service.price}
                      </span>
                    </div>
                    {/* <div className="w-full relative max-w-[118px] sm:max-w-32">
                      <FaCaretDown
                        size={12}
                        className="text-gray-500 hover:text-gray-400 absolute top-[15px] right-2 pointer-events-none"
                      />
                    </div> */}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-6 font-bold lg:text-xl text-lg">
                <span>Total</span>
                <span className="text-green-600 notranslate">€ {total}</span>
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
        <button
          type="submit"
          disabled={muLoading}
          className={`${"bg-blue-500"} flex justify-center items-center gap-2 max-w-lg w-full mt-10 rounded-2xl font-nunito bg-blue-500 text-white border-blue-500 border-2 p-3 lg:p-4 `}
          // className="flex justify-center items-center gap-2 max-w-lg w-full mt-10 rounded-2xl font-nunito bg-blue-500 text-white border-blue-500 border-2 p-3 lg:p-4 "
        >
          {muLoading && <BtnSpenner />} Send Request
        </button>
      </div>
    </form>
  );
}
