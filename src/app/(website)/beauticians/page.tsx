"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import ProfileCategory from "@/components/ProfileCategory";
import BeauticianCart from "@/components/BeauticianCart";
import { BsSearch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { useBeauticiansQuery } from "@/redux/features/users/users.api";
import LoaderWraperComp from "@/components/LoaderWraperComp";
import { useCategoriesQuery } from "@/redux/features/category/category.api";
import { TCategory } from "@/type/category.type";
import { TPageProps } from "@/type/index.type";

export default function Page(props: TPageProps) {
  const { category, date, address } = use(props.searchParams);
  const [query, setQuery] = useState({
    day: date
      ? new Date(date as string).toLocaleDateString("en-US", {
          weekday: "long",
        })
      : "",
    date: date || "",
    address: address || "",
    category: category || "",
  });
  const { data: categoryData, isLoading: cateLoading } =
    useCategoriesQuery(undefined);
  const { data, isLoading, isError } = useBeauticiansQuery(
    Object.entries(query)
      .filter(([name, value]) => !!value && name !== "date")
      .map(([name, value]) => ({
        name,
        value,
      }))
  );

  return (
    <>
      <header className="bg-[#435981] relative h-[200px] md:h-[457px] flex items-center justify-center flex-col gap-10 md:gap-16">
        <Image
          src="/beauticianHeaderBG.png"
          alt="header"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <h1 className="font-Playfair_Display font-bold text-3xl sm:text-4xl lg:text-6xl text-center text-white">
          Select a professional
        </h1>
        <form className="grid grid-cols-3 items-center justify-around gap-1 rounded-[40px] lg:text-lg bg-white z-0 py-2 px-3 sm:px-5 lg:px-9 xl:py-3 w-[93%] sm:w-11/12 xl:w-7/12">
          <div className="flex items-center relative lg:gap-1 ">
            <BsSearch className="size-5 lg:size-7 min-w-3 text-[#142F62] lg:pr-1" />
            <select
              value={query.category}
              onChange={(e) =>
                setQuery((c) => ({ ...c, [e.target.name]: e.target.value }))
              }
              name="category"
              className="pr-2 sm:px-2 py-2 lg:py-3 outline-none min-w-[100px] w-full text-sm sm:text-base"
            >
              <option value="">{cateLoading ? "loading..." : "All"}</option>
              {categoryData?.data?.map((item: TCategory) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center relative gap-1 border-l border-[#697586] md:pl-1 lg:pl-2">
            <IoLocationOutline className="size-6 lg:size-8 text-[#142F62]" />
            <input
              name="address"
              value={query.address}
              onChange={(e) =>
                setQuery((c) => ({ ...c, [e.target.name]: e.target.value }))
              }
              type="text"
              placeholder="Address"
              className="pr-2 sm:px-2 py-2 lg:py-3 outline-none w-full text-sm sm:text-base placeholder:text-black"
            />
          </div>
          <div className="flex items-center relative gap-1 border-l border-[#697586] md:pl-1 lg:pl-4">
            {/* <IoLocationOutline className="size-6 lg:size-8 text-[#142F62]" /> */}
            <input
              value={query.date}
              onChange={(e) => {
                setQuery((c) => ({
                  ...c,
                  date: e.target.value,
                  day: e.target.value
                    ? new Date(e.target.value).toLocaleDateString("en-US", {
                        weekday: "long",
                      })
                    : "",
                }));
              }}
              type="date"
              id="date"
              name="date"
              className="pl-1 sm:px-2 py-2 lg:py-3 outline-none w-full custom-date-input text-sm sm:text-base"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </form>
      </header>
      <section className=" py-16">
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-36 justify-center py-4">
          <ProfileCategory category="armonia_luxe" withName />
          <ProfileCategory category="armonia_local" withName />
        </div>
        <LoaderWraperComp
          isError={isError}
          isLoading={isLoading}
          dataEmpty={data?.data?.length < 1}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-6 lg:gap-9 px-5 2xl:px-36 mt-8 md:mt-14">
            {data?.data?.map((item: any) => {
              return <BeauticianCart key={item.profile_id} data={item} />;
            })}
          </div>
        </LoaderWraperComp>
      </section>
    </>
  );
}
