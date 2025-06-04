/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { context } from "@/app/Context";
import LoaderWraperComp from "@/components/LoaderWraperComp";
import { BtnSpenner } from "@/components/Spinner";
import GoogleMap from "@/components/ui/LiveGoogleMap";
import { convertMinutesToTotalDuration } from "@/lib/getDurationFromMinute";
import { TSlot } from "@/redux/features/auth/authSlice";
// import { Slot } from "@/redux/features/auth/authSlice";
import { useBookingDetailsByIdQuery } from "@/redux/features/booking/booking.api";
import { useCreateConversationMutation } from "@/redux/features/messages/message.api";
import { TUniObject } from "@/type/index.type";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {  useContext, useEffect, useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { LuClockAlert } from "react-icons/lu";
// import { LuClockAlert } from "react-icons/lu";
import Swal from "sweetalert2";

// import { useRouter } from "next/router";

export default function Page() {
  const searchParams = useSearchParams();
  const { id } = Object.fromEntries(searchParams.entries());
  const router = useRouter();
  const appContext = useContext(context);
  const [currentLocation, setCurrenLocation] = useState<{
    latitude?: number;
    longitude?: number;
  }>({});
  const { data, isLoading, isError } = useBookingDetailsByIdQuery(id, {
    skip: !id,
  });
  const [createConversation, { isLoading: conLoading }] =
    useCreateConversationMutation();
  // console.log({ data, isLoading, isError });
  const handleCreateConversation = async () => {
    try {
      const res = await createConversation({
        participant: data?.data?.profile?.user?.id,
      }).unwrap();
      router.push(`/dashboard/messages/${res.data.id}`);
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
  useEffect(() => {
    setCurrenLocation({
      latitude: data?.data?.profile?.latitude,
      longitude: data?.data?.profile?.longitude,
    });
    if (appContext?.socket) {
      appContext.socket.on(`track-${data?.data?.profile?.id}`, (response) => {
        setCurrenLocation(response);
      });
      return () => {
        appContext?.socket?.off(`track-${data?.data?.profile?.id}`);
      };
    }
  }, [data?.data]);
  const getTimeByDateAndTime = ({
    date,
    time,
  }: {
    date: string;
    time: string;
  }) => {
    return new Date(`${date}T${time}`).getTime();
  };
  const findingAvailableTime = (
    slots: { slot: TSlot }[],
    appointmentDate: string
  ) => {
    const currentTime = new Date().getTime();
    if (!slots || slots.length === 0) return null;

    let minStart = slots[0].slot.start;
    let maxEnd = slots[0].slot.end;
    // console.log(
    //   getTimeByDateAndTime({
    //     date: appointmentDate.split("T")[0],
    //     time: minStart,
    //   })
    // );
    for (const item of slots) {
      if (item.slot.start < minStart) minStart = item.slot.start;
      if (item.slot.end > maxEnd) maxEnd = item.slot.end;
    }

    const availableTime = {
      enableTime: getTimeByDateAndTime({
        date: appointmentDate.split("T")[0],
        time: minStart,
      }),
      disableTime: getTimeByDateAndTime({
        date: appointmentDate.split("T")[0],
        time: maxEnd,
      }),
    };
    if (currentTime > availableTime.disableTime) {
      return "Google Maps tracking has expired. The tracking session is ended.";
    } else if (currentTime + 30 * 60000 > availableTime.enableTime) {
      return "active";
    } else {
      return "Google Maps tracking will be available in 30 minutes from the booking time. Please check back later to track the location.";
    }
  };
  console.log(
    findingAvailableTime(data?.data?.bookedSlots, data?.data?.bookingDate)
  );
  return (
    <LoaderWraperComp
      isError={isError}
      isLoading={isLoading}
      className="h-[80vh]"
    >
      <div className="w-full py-8 px-3 md:px-6 bg-gray-100 min-h-[90vh] flex flex-col items-center justify-center gap-8">
        <div className="w-full max-w-3xl flex justify-start items-center gap-5">
          <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-lg overflow-hidden">
            <Image
              src={
                data?.data?.profile?.user?.image
                  ? `${process.env.NEXT_PUBLIC_API_URL}${data?.data?.profile?.user?.image}`
                  : "/profile-demo.png"
              }
              alt="beautician"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs sm:text-sm text-slate-500">Beautician info</p>
            <h3 className="font-medium text-base lg:text-lg text-blue-500">
              Name: {data?.data?.profile?.user.name}
            </h3>
            <h3 className="font-medium text-base lg:text-lg notranslate text-blue-500 pb-2">
              E-mail: {data?.data?.profile?.user.email}
            </h3>
            <button
              disabled={conLoading}
              onClick={handleCreateConversation}
              className="px-5 py-1 w-full h-fit border border-blue-600 text-blue-600 hover:text-white disabled:bg-blue-200 disabled:text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none transition-all flex justify-center items-center gap-2"
            >
              Message{" "}
              {conLoading ? (
                <BtnSpenner />
              ) : (
                <BiMessageRoundedDots className="size-4 mt-1" />
              )}
            </button>
          </div>
          {/* <p className="flex items-center gap-2 text-xl lg:text-3xl text-blue-300">
              <IoLocationOutline className="size-6 lg:size-8" />
              EC3P
            </p> */}
        </div>
        <ul className="space-y-2 w-full max-w-3xl px-2 lg:px-4">
          <li className="flex gap-2">
            <label className="block text-gray-700 mb-2">Total Price:</label>
            <p className="notranslate"> € {data?.data?.totalAmount}</p>
          </li>
          <li className="flex  gap-2">
            <label className="block text-gray-700 mb-2">Payment Status:</label>
            <p className="notranslate">
              {data?.data?.status === "paid" ? "30% Early Paid" : ""}
            </p>
          </li>
          <li className="flex  gap-2">
            <label className="block text-gray-700 mb-2">
              Appointment Date:
            </label>
            <p>
              {new Date(data?.data?.bookingDate).toDateString()}{" "}
              {data?.data?.bookedSlots?.[0].slot.start}
            </p>
          </li>
          <li className="flex  gap-2">
            <label className="block text-gray-700 mb-2">
              Appointment Time:
            </label>
            <p>
              {data?.data?.bookedSlots?.[0].slot.start} -{" "}
              {
                data?.data?.bookedSlots?.[data?.data?.bookedSlots?.length - 1]
                  .slot?.end
              }{" "}
              (You will need{" "}
              {convertMinutesToTotalDuration(
                data?.data?.bookedSlots?.length * 30
              )}
              )
            </p>
          </li>
          <li>
            <label className="block text-gray-700 mb-2">Booked Services:</label>
          </li>
          {data?.data?.bookedServices?.map(
            (service: TUniObject, index: number) => (
              <li
                key={index}
                className="flex justify-between items-center gap-3 pb-3"
              >
                <p>
                  <span className="font-semibold text-ellipsis truncate">
                    {service?.name}
                  </span>
                </p>
                <span className="text-blue-500 text-right notranslate">
                  € {service?.price}
                </span>
                {/* <p>
                {service?.bookedSlots?.start}-{service?.bookedSlots?.end}
              </p> */}
              </li>
            )
          )}
        </ul>
        {/* <GoogleMap currentLocation={currentLocation} /> */}
        {findingAvailableTime(
          data?.data?.bookedSlots,
          data?.data?.bookingDate
        ) === "active" ? (
          <GoogleMap currentLocation={currentLocation} />
        ) : (
          <div className="flex flex-col justify-center items-center gap-4 min-h-64 py-16 px-6 bg-gray-200 w-full">
            <LuClockAlert className="text-slate-500" size={34} />
            <p className="text-center lg:text-lg text-gray-500 max-w-2xl">
              {findingAvailableTime(
                data?.data?.bookedSlots,
                data?.data?.bookingDate
              )}
            </p>
          </div>
        )}
      </div>
    </LoaderWraperComp>
  );
}
