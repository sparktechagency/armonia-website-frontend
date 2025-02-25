"use client";
import Image from "next/image";
import React, { FormEvent, useContext } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useBookingByIdQuery } from "@/redux/features/booking/booking.api";
import Swal from "sweetalert2";
import { context } from "@/app/Context";
import { TUniObject } from "@/type/index.type";
import LoaderWraperComp from "./LoaderWraperComp";

// type FormValues = {
//   [key: string]: FormDataEntryValue | undefined;
// };

export default function BookingDetails({ bookingId }: { bookingId: string }) {
  const appContext = useContext(context);
  const { data, isLoading, isError } = useBookingByIdQuery(bookingId, {
    skip: !bookingId,
  });
  // const [dispatch, { isLoading: muLoading }] = useCreateBookingMutation();

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const formValues = Object.values(Object.fromEntries(formData.entries()));
  //   const payload = {
  //     profileId,
  //     bookingDate: selectedDate?.getTime(),
  //     serviceIds: selectedServices.map((item) => item.id),
  //     timeSlotIds: formValues,
  //   };
  //   try {
  //     await dispatch(payload).unwrap();
  //     appContext?.setModal(null);
  //     Swal.fire({
  //       icon: "success",
  //       title: "Booking success!!",
  //       text: "Your booking request has been sent successfully! 🎉",
  //     });
  //   } catch (error: any) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Failed!!",
  //       text:
  //         error.message ||
  //         error?.data?.message ||
  //         "Something went wrong. Please try again later.",
  //     });
  //   }
  // };
  console.log(data?.data);
  const total = data?.data?.services?.reduce(
    (sum: number, service: TUniObject) => sum + service.price,
    0
  );
  // const bongoBoltu = selectedSlot.find((item) => item[`slot-${2}`]);
  // console.log("bongoBoltu", bongoBoltu ? Object.values(bongoBoltu)[0] : "");
  // console.log(selectedSlot.find((item) => item[`slot-${2}`]) ? selectedSlot.find((item) => item[`slot-${2}`])[`slot-${2}`] : "");
  return (
    <form className="bg-white max-w-[1440px] w-full py-16 px-5 md:px-10 lg:px-56 relative">
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
        <LoaderWraperComp isLoading={isLoading} isError={isError}>
          <div className="space-y-4">
            <p className="text-xl font-semibold font-Playfair_Display">
              Customer
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-500 font-Playfair_Display">
              Appointment Details
            </h1>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Customer Name
                </label>
                <input
                  required
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  defaultValue={data?.data?.userName || ""}
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  defaultValue={data?.data?.email || ""}
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
                <p>{new Date(data?.data?.createdAt).toDateString()}</p>
              </div>
              <div className="lg:py-8 mt-20  mx-auto">
                <h1 className="lg:text-4xl text-3xl font-bold font-Playfair_Display text-blue-500 mb-8">
                  Selected Service Prices
                </h1>
                <ul className="space-y-2">
                  {data?.data?.services?.map(
                    (service: TUniObject, index: number) => (
                      <li
                        key={index}
                        className="flex justify-between items-center border-b border-dotted gap-3 pb-3 text-gray-700"
                      >
                        <p>
                          <span className="font-semibold text-ellipsis truncate">{service?.name}</span>
                        </p>
                        <span className="text-blue-500 text-right">
                          from €{service?.price}
                        </span>
                        <p>
                          {service?.bookedSlots?.start}-
                          {service?.bookedSlots?.end}
                        </p>
                      </li>
                    )
                  )}
                </ul>
                <div className="flex justify-between items-center mt-8 font-bold lg:text-xl text-lg">
                  <span>Total</span>
                  <span className="text-green-600">€{total}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center ">
              <button
                onClick={() => appContext?.setModal(null)}
                className=" w-fit bg-green-400 py-2 mb-28 px-5 font-Playfair_Display text-white rounded-3xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                Okay
              </button>
            </div>
          </div>
        </LoaderWraperComp>
      </div>
    </form>
  );
}
