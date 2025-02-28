"use client";
import LoaderWraperComp from "@/components/LoaderWraperComp";
import { timeAgo } from "@/lib/utils";
import { useAllNotificationQuery } from "@/redux/features/notification/notification.api";
import { TUniObject } from "@/type/index.type";
import React, { createElement } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const Page = () => {
  const { data, isLoading, isError } = useAllNotificationQuery([]);
  console.log(data);
  return (
    <div className="w-full space-y-5 lg:space-y-8 bg-yellow-50">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        Notifications
      </h1>
      <LoaderWraperComp
        isError={isError}
        isLoading={isLoading}
        dataEmpty={data?.data?.length < 1}
      >
        <div className="max-w-full w-full flex flex-col gap-4 lg:gap-6 mx-auto py-3 pb-16">
          {data?.data?.map((notification: TUniObject, index: number) => (
            <div
              key={index}
              className="flex items-center gap-3 lg:gap-5 hover:bg-white/50 py-4 px-3 sm:px-6 transition-all"
            >
              <div className="rounded-full">
                {createElement(IoIosNotificationsOutline, {
                  className: "size-8 text-slate-600",
                })}
              </div>
              <div className="space-y-1">
                <p className="text-sm md:text-base text-slate-700">
                  {notification?.message}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {timeAgo(notification?.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </LoaderWraperComp>
    </div>
  );
};

export default Page;
