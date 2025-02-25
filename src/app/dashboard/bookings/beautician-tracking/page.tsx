"use client";

import LoaderWraperComp from "@/components/LoaderWraperComp";
import { useBookingDetailsByIdQuery } from "@/redux/features/booking/booking.api";
import { TPageProps, TUniObject } from "@/type/index.type";
import Image from "next/image";
import { use } from "react";

// import { useRouter } from "next/router";

export default function Page(props: TPageProps) {
  const { id } = use(props.searchParams);
  const lat = 39.01374;
  const lng = -95.688979;
  const { data, isLoading, isError } = useBookingDetailsByIdQuery(id, {
    skip: !id,
  });
  console.log({ data, isLoading, isError });
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
                data?.data?.user?.image
                  ? `${process.env.NEXT_PUBLIC_API_URL}${data?.data?.user?.image}`
                  : "/profile-demo.png"
              }
              alt="beautician"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
          <div className="">
            <p className="text-xs sm:text-sm text-slate-500">Beautician info</p>
            <h3 className="font-medium text-base lg:text-lg text-blue-500">
              Name: {data?.data?.profile?.user.name}
            </h3>
            <h3 className="font-medium text-base lg:text-lg notranslate text-blue-500">
              E-mail: {data?.data?.profile?.user.email}
            </h3>
            {/* <p className="flex items-center gap-2 text-xl lg:text-3xl text-blue-300">
              <IoLocationOutline className="size-6 lg:size-8" />
              EC3P
            </p> */}
            <button className="border p-2">Contact</button>
          </div>
        </div>
        <ul className="space-y-2 w-full max-w-3xl px-2 lg:px-4">
          <li className="flex gap-2">
            <label className="block text-gray-700 mb-2">Total Price:</label>
            <p>€{data?.data?.totalAmount}</p>
          </li>
          <li className="flex  gap-2">
            <label className="block text-gray-700 mb-2">Payment Status:</label>
            <p>{data?.data?.status === "paid" ? "30% Paid" : ""}</p>
          </li>
          <li className="flex  gap-2">
            <label className="block text-gray-700 mb-2">
              Appointment Date:
            </label>
            <p>{new Date(data?.data?.createdAt).toDateString()}</p>
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
                <span className="text-blue-500 text-right">
                  from €{service?.price}
                </span>
                {/* <p>
                {service?.bookedSlots?.start}-{service?.bookedSlots?.end}
              </p> */}
              </li>
            )
          )}
        </ul>
        <div className="w-full max-w-3xl h-full max-h-96">
          <iframe
            title="Dynamic Google Map"
            className="w-full min-h-full h-full rounded-lg"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFi80uuJIWkkLCpodFa8oXmD8XD_h8LMc&q=${lat},${lng}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </LoaderWraperComp>
  );
}
