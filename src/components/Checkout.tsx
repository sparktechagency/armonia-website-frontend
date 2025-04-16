"use client";
import Image from "next/image";
import React, { FormEvent, useContext, useState } from "react";
import { Service, Slot } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { useRemaningSlotsQuery } from "@/redux/features/slots/slots.api";
import { FaCaretDown } from "react-icons/fa";
import { toast } from "react-toastify";
import { TUniObject } from "@/type/index.type";
import { useCreateBookingMutation } from "@/redux/features/booking/booking.api";
import Swal from "sweetalert2";
import { BtnSpenner } from "./Spinner";
import { context } from "@/app/Context";
import { useRouter } from "next/navigation";
import { BusinessDayPicker, TWeekday } from "./ui/DatePicker";

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
  const [selectedSlot, setSelectedSlot] = useState<TUniObject[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading } = useRemaningSlotsQuery(
    {
      args: [{ name: "date", value: selectedDate?.getTime() }],
      profileId,
    },
    { skip: !setSelectedDate }
  );
  const [dispatch, { isLoading: muLoading }] = useCreateBookingMutation();

  const total = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );
  const totalTime = selectedServices.reduce(
    (sum, service) => sum + service.time,
    0
  );
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const formValues = Object.values(Object.fromEntries(formData.entries()));
    if (selectedSlot.length < totalTime / 30) {
      toast.error("Please select the slots in order");
      return;
    }
    const payload = {
      profileId,
      bookingDate: selectedDate?.getTime(),
      serviceIds: selectedServices.map((item) => item.id),
      timeSlotIds: selectedSlot,
    };
    console.log(payload);
    try {
      await dispatch(payload).unwrap();
      appContext?.setModal(null);
      Swal.fire({
        icon: "success",
        title: "Booking success!!",
        text: "Your booking request has been sent successfully! 🎉",
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
  const handleSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // if (slotIsExist) {
    //   toast.error("The slot is already selected!", {
    //     position: "bottom-center",
    //   });
    // } else {
    const slotNeed = totalTime / 30;

    //check if any slot available in the selected date

    if (slotNeed > data?.data?.length) {
      toast.error(
        `Beautician do not have ${slotNeed} slots to book. If you want to book you can reduce service`,
        {
          position: "bottom-center",
        }
      );
      return;
    }
    const index = data?.data.findIndex((item: Slot) => {
      console.log(item)
    return  item.id === e.target.value;
    });
    // console.log(index)

    if (index === -1) {
      toast.error("Please select the slots in order");
    }
    if (index !== 0) {
      const newArr = data?.data.slice(index - 1);
      newArr.splice(slotNeed + 1, newArr.length - slotNeed);

      if (newArr.length < slotNeed) {
        toast.error(
          `Beautician does not have ${slotNeed} consecutive slots available. Please reduce the service duration or select earlier slots.`
        );
        return;
      }
      for (let i = 0; i < newArr.length - 1; i++) {
        const currentIndex = newArr[i]?.index;
        const nextIndex = newArr[i + 1]?.index;
        console.log("Errrr", nextIndex);
        if (nextIndex === undefined) {
          toast.error("Please select the slots in order");
          break;
          return; // Exit the loop if the next index is undefined
        }
        if (nextIndex - currentIndex !== 1) {
          toast.error(
            `Please select slots that should has ${slotNeed} slots in order. other than you can change the the service`
          );
          break;
          return;
        }
      }
      setSelectedSlot(() => newArr.map((item: Slot) => item.id));
    } else {
      const newArr = data?.data.slice(index);
      newArr.splice(slotNeed, newArr.length - slotNeed);

      if (newArr.length < slotNeed) {
        toast.error(
          `Beautician does not have ${slotNeed} consecutive slots available. Please reduce the service duration or select earlier slots.`
        );
        return;
      }
      for (let i = 0; i < newArr.length - 1; i++) {
        const currentIndex = newArr[i]?.index;
        const nextIndex = newArr[i + 1]?.index;
        console.log(nextIndex);
        if (nextIndex === undefined) {
          toast.error("Please select the slots in order");
          break;
        }
        if (nextIndex - currentIndex !== 1) {
          toast.error(
            `Please select slots that should has ${
              slotNeed + 1
            } slots in order. other than you can change the the service`
          );
          break;
        }
      }
      setSelectedSlot(() => newArr.map((item: Slot) => item.id));
    }
    // setSelectedSlot((c) =>
    //   serviceIsExist
    //     ? [
    //         ...c.filter(
    //           (item) => !(`slot-${index}` in item)
    //         ),
    //         {
    //           ["slot" + "-" + index]: e.target.value,
    //         },
    //       ]
    //     : [
    //         ...c,
    //         { ["slot" + "-" + index]: e.target.value },
    //       ]
    // );
    // }
  };

  // console.log("Total Slots", `${totalTime / 30}`);
  // const bongoBoltu = selectedSlot.find((item) => item[`slot-${2}`]);
  // console.log("bongoBoltu", bongoBoltu ? Object.values(bongoBoltu)[0] : "");
  // console.log(selectedSlot.find((item) => item[`slot-${2}`]) ? selectedSlot.find((item) => item[`slot-${2}`])[`slot-${2}`] : "");
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
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
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
            <div className="lg:py-8 mt-20  mx-auto">
              <h1 className="lg:text-4xl text-3xl font-bold font-Playfair_Display text-blue-500 mb-8">
                Selected Service Prices
              </h1>
              <p className="font-bold">
                Total Required slot : {totalTime / 30}
              </p>
              <ul className="space-y-2">
                {selectedServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-dotted gap-3 pb-3 text-gray-700"
                  >
                    <div className="flex justify-between items-center w-full gap-2">
                      <p>
                        <span className="font-semibold">{service.name}</span>
                        <span className="text-[10px] font-medium">
                          {service.time} min
                        </span>
                      </p>
                      <span className="text-blue-500 text-right notranslate">
                        ${service.price}
                      </span>
                    </div>
                    <div className="w-full relative max-w-[118px] sm:max-w-32">
                      <FaCaretDown
                        size={12}
                        className="text-gray-500 hover:text-gray-400 absolute top-[15px] right-2 pointer-events-none"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <select
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 md:py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1 text-sm sm:text-base"
                // defaultValue={""}
                // value={
                //   selectedSlot.find((item) => item)
                // }
                required
                onClick={() => {
                  if (!selectedDate)
                    toast.warning("Appointment date select is required!", {
                      position: "bottom-center",
                    });
                }}
                name={"slot" + "-"}
                onChange={(e) => handleSlotChange(e)}
              >
                <option disabled value="">
                  {isLoading ? "Loading..." : "Slot"}
                </option>
                {data?.data?.map((item: Slot, slotIindex: number) => (
                  <option
                    key={slotIindex}
                    value={item.id}
                    className="notranslate"
                  >
                    {item.start} - {item.end}
                  </option>
                ))}
              </select>

              <div className="flex justify-between items-center mt-8 font-bold lg:text-xl text-lg">
                <span>Total</span>
                <span className="text-green-600 notranslate">${total}</span>
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
          // disabled={isSubmitable}
          className="flex justify-center items-center gap-2 max-w-lg w-full mt-10 rounded-2xl font-nunito bg-blue-500 text-white border-blue-500 border-2 p-3 lg:p-4 "
        >
          {muLoading && <BtnSpenner />} Send Request
        </button>
      </div>
    </form>
  );
}
