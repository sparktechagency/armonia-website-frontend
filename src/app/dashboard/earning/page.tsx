"use client";
import LoaderWraperComp from "@/components/LoaderWraperComp";
import { cn } from "@/lib/utils";
import { usePaymentsQuery } from "@/redux/features/earnings/earnings.api";
import { TUniObject } from "@/type/index.type";
import React from "react";

export default function Page() {
  const { data, isLoading, isError } = usePaymentsQuery([]);
  console.log(data);
  return (
    <section className="bg-yellow-50 w-full">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        Earning
      </h1>
      <div className="px-2 mt-5">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-5 lg:px-10 lg:pt-4">
          <div className="bg-primary text-white text-center py-6 rounded-lg shadow-md max-w-md w-full bg-blue-500">
            <p className="text-4xl font-semibold mt-2 notranslate">
              ${data?.data?.completed || (0).toFixed(2)}
            </p>
            <h1 className="text-lg font-bold">Total Net-Income</h1>
          </div>
          <div className="bg-primary text-white text-center py-6 rounded-lg shadow-md max-w-md w-full bg-green-500">
            <p className="text-4xl font-semibold mt-2 notranslate">
              ${data?.data?.adminCharge || (0).toFixed(2)}
            </p>
            <h1 className="text-lg font-bold">Admin Charge</h1>
          </div>
        </div>

        {/* History Section */}
        <div className="mt-8 w-full max-w-[100vw] overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">History</h2>
          <LoaderWraperComp
            isLoading={isLoading}
            isError={isError}
            dataEmpty={data?.data?.length < 1}
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-light-gray text-primary">
                  {/* <th className="py-2 px-4 border">Transaction History</th> */}
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border text-center">Status</th>
                  <th className="py-2 px-4 border">Date</th>
                  <th className="py-2 px-4 border">Total</th>
                  <th className="py-2 px-4 border">Charge</th>
                  <th className="py-2 px-4 border">Amount</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.payments?.map(
                  (item: TUniObject, index: number) => (
                    <tr key={index} className="odd:bg-white even:bg-light-gray">
                      {/* <td className="py-2 px-4 border">
                        {index === 0 ? "Withdraw" : "William Send"}
                      </td> */}
                      <td className="py-2 px-4 border">{item?.user?.name}</td>
                      <td className="py-2 px-4 border notranslate">
                        {item?.user?.email}
                      </td>
                      <td
                        className={cn(
                          "py-2 px-4 border capitalize text-center",
                          {
                            "text-yellow-300": item?.status === "completed",
                          }
                        )}
                      >
                        {item?.status === "completed"
                          ? item?.status
                          : "Early Paid"}
                      </td>
                      <td className="py-2 px-4 border whitespace-pre">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td
                        className={`py-2 px-4 border font-semibold text-slate-800 notranslate`}
                      >
                        ${item?.totalAmount}
                      </td>
                      <td
                        className={`py-2 px-4 border font-semibold text-red-500 notranslate`}
                      >
                        ${(item?.totalAmount * 0.3).toFixed(2)}
                      </td>
                      <td
                        className={`py-2 px-4 border font-semibold text-green-500 notranslate`}
                      >
                        $
                        {item?.status === "completed"
                          ? (
                              item?.totalAmount -
                              item?.totalAmount * 0.3
                            ).toFixed(2)
                          : (0).toFixed(2)}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </LoaderWraperComp>
        </div>
      </div>
    </section>
  );
}
