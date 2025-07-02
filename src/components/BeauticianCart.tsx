"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProfileCategory from "./ProfileCategory";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TUniObject } from "@/type/index.type";
import { Service } from "@/redux/features/auth/authSlice";
import { PiMapPinLineBold } from "react-icons/pi";
import { RiStarFill } from "react-icons/ri";
import { useAppSelector } from "@/redux/hook";

export default function BeauticianCart({
  data,
  selectedCategory,
}: {
  data: TUniObject;
  selectedCategory?: string;
}) {
  const [sliceQty, setSliceQty] = useState(0);
  const { user } = useAppSelector((state) => state.auth);
  const next = (length: number) => {
    setSliceQty((c) => (c < length - 4 ? c + 1 : c));
  };
  const preview = () => {
    setSliceQty((c) => (c > 0 ? c - 1 : c));
  };
  // const beauticianCategory = []

  function getUniqueCategoryNames(services: Service[]): string[] {
    const categorySet = new Set<string>();

    services.forEach((service) => {
      if (service.categoryName) {
        categorySet.add(service.categoryName);
      }
    });

    return Array.from(categorySet);
  }
  // console.log(data);
  return (
    <div className="bg-yellow-50 rounded-lg relative w-full drop-shadow-md h-full">
      {!!data.category && (
        <ProfileCategory
          category={data.category}
          className="absolute top-5 lg:top-4 right-4"
        />
      )}
      <Link
        href={`/beauticians/${data.profile_id}${
          selectedCategory ? `?cate=${selectedCategory}` : ""
        }`}
      >
        <div className="w-full flex flex-col items-center sm:flex-row px-5 lg:px-8 py-6 gap-4">
          <div className="relative w-full md:w-20 xl:min-w-32 xl:w-32 h-full max-h-56 md:h-20 xl:h-32 md:rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
              src={
                data?.image
                  ? `${process.env.NEXT_PUBLIC_API_URL}${data?.image}`
                  : "/profile-demo.png"
              }
              alt="beautician"
              // style={{
              //   // objectFit: '', // cover, contain, none
              //   objectPosition: 'bottom', // center, top, bottom, left, right
              // }}
              width={128}
              height={128}
              className="w-full h-full"
            />
            {!user?.id && (
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-10"></div>
            )}
          </div>
          <div className="w-full overflow-hidden flex flex-col gap-4 text-start">
            <div className="relative inline-block w-fit">
              <h3 className="relative z-10 font-Playfair_Display text-xl lg:text-2xl font-bold notranslate">
                {data.user_name}
              </h3>
              {!user?.id && (
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-10 rounded-md"></div>
              )}
            </div>
            <p className="flex items-center gap-2 text-blue-500 notranslate">
              <RiStarFill size={20} className="flex-shrink-0 text-yellow-400" />
              {data.average_rating ? data.average_rating : "0.0"} (
              {data.total_reviews})
            </p>
            <p className="flex gap-2 text-blue-500 notranslate">
              <PiMapPinLineBold
                size={20}
                className="flex-shrink-0 mt-0.5 text-yellow-400"
              />
              <span className="line-clamp-2 ">{data?.address}</span>
            </p>
            <div className="max-w-full w-full flex items-center gap-2 overflow-x-scroll scrollbar-none">
              {getUniqueCategoryNames(data?.services)?.map(
                (category, index: number) => (
                  <span
                    key={index}
                    className="bg-blue-400 w-fit block text-white text-center px-2 pt-0.5 pb-1 rounded text-base text-nowrap"
                  >
                    {category}
                  </span>
                )
              )}
              {/* {data.services?.length > 3 && <span>etc.</span>} */}
            </div>
          </div>
        </div>
      </Link>
      <hr />
      <div className="my-5 flex items-center gap-2 sm:gap-3 px-3 2xl:px-4 w-full justify-between">
        <button
          disabled={sliceQty < 1}
          onClick={() => preview()}
          className="outline-none text-slate-600 disabled:text-slate-400 py-1.5"
        >
          <FaArrowLeft className="size-4" />
        </button>
        {data?.weekly_schedule?.weekDays
          ?.slice(sliceQty, sliceQty + 4)
          .map((item: TUniObject) => (
            <span
              key={item.id}
              className="px-3 xl:px-4 py-1.5 lg:py-2 border border-blue-400 rounded text-center bg-blue-100 text-xs sm:text-sm w-full notranslate"
            >
              {item.dayName?.slice(0, 3)}
            </span>
          ))}
        <button
          disabled={data?.weekly_schedule?.weekDays?.length === sliceQty + 4}
          onClick={() =>
            next(data?.weekly_schedule?.weekDays?.length as number)
          }
          className="outline-none text-slate-600 disabled:text-slate-400 py-1.5"
        >
          <FaArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
