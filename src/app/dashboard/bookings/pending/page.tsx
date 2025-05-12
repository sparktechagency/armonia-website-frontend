"use client";
import React, { useContext } from "react";
import LoaderWraperComp from "@/components/LoaderWraperComp";
import {
  useBookingsQuery,
  useUpdateBookingStatusMutation,
} from "@/redux/features/booking/booking.api";
import { TUniObject } from "@/type/index.type";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useAppSelector } from "@/redux/hook";
import { context } from "@/app/Context";
import BookingDetails from "@/components/BookingDetails";

export default function Page() {
  const appContext = useContext(context);
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading, isError } = useBookingsQuery([
    {
      name: "status",
      value: "pending",
    },
  ]);
  const [updateBookingStatus, { isLoading: upLoading }] =
    useUpdateBookingStatusMutation();

  const hanleStatus = async ({
    status,
    id,
  }: {
    status: "accepted" | "rejected" | "cancelled";
    id: string;
  }) => {
    const toastId = toast.loading("Please wait...");
    try {
      await updateBookingStatus({
        status,
        id,
      }).unwrap();
      toast.success(`Successfully request ${status}!`);
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Failed!!",
        text:
          error.message ||
          error?.data?.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      toast.dismiss(toastId);
    }
  };
  return (
    <section className="bg-yellow-50 w-full">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        Service Request
      </h1>
      <div className=" mx-auto sm:p-4 dark:text-gray-800">
        <LoaderWraperComp
          isError={isError}
          isLoading={isLoading}
          dataEmpty={data?.data?.length < 1}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className=" border-b-2 border-black">
                <tr className=" text-left">
                  <th className="p-3 border-r-4">SI NO.</th>
                  <th className="p-3 border-r-4">
                    {user?.type === "customer" ? "Beautician" : "User"} Name
                  </th>
                  <th className="p-3 border-r-4">
                    {user?.type === "customer" ? "Post Code" : "Email"}
                  </th>
                  <th className="p-3 border-r-4">Price</th>
                  <th className="p-3 border-r-4 text-right">
                    Appointment Date
                  </th>
                  {user?.type === "beautician" && (
                    <th className="p-3 border-r-4 text-center">Service</th>
                  )}
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((item: TUniObject, index: number) => (
                  <tr key={index} className="border-t-2 border-b-2">
                    <td className="p-3 border-r-4 notranslate">{++index}</td>
                    <td className="p-3 border-r-4">
                      {user?.type === "customer"
                        ? item.profile?.user?.name
                        : item.user?.name}
                    </td>
                    <td className="p-3 border-r-4 notranslate">
                      {user?.type === "customer"
                        ? item.profile?.postalCode
                        : item.user?.email}
                    </td>
                    <td className="p-3 border-r-4 notranslate">
                      € {item.totalAmount}
                    </td>
                    <td className="p-3 border-r-4 text-right notranslate">
                      {new Date(item.bookingDate).toDateString()}
                    </td>
                    {user?.type === "beautician" && (
                      <td className="p-3 border-r-4 text-center">
                        <button
                          onClick={() =>
                            appContext?.setModal(
                              <BookingDetails bookingId={item.id} />
                            )
                          }
                          className="rounded-md px-3 py-1 hover:text-sky-600"
                        >
                          View
                        </button>
                      </td>
                    )}
                    <td className="p-3">
                      {user?.type === "beautician" ? (
                        <div className="flex justify-center items-center gap-2">
                          <button
                            disabled={upLoading}
                            onClick={() =>
                              hanleStatus({ id: item.id, status: "cancelled" })
                            }
                            className="bg-red-400 text-white px-2 py-1 rounded-md"
                          >
                            Cancel
                          </button>
                          <button
                            disabled={upLoading}
                            onClick={() =>
                              hanleStatus({ id: item.id, status: "accepted" })
                            }
                            className="bg-green-500 text-white px-2 py-1 rounded-md"
                          >
                            Confirm
                          </button>
                        </div>
                      ) : (
                        <button
                          disabled={upLoading}
                          onClick={() =>
                            hanleStatus({ id: item.id, status: "cancelled" })
                          }
                          className="bg-blue-500 text-white px-2 py-1 rounded-md"
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LoaderWraperComp>
      </div>
    </section>
  );
}
