import React from "react";
import Image from "next/image";
import ProfileCategory from "@/components/ProfileCategory";
import BeauticianCart from "@/components/BeauticianCart";
import { BsSearch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

export default function page() {
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
        <form className="grid grid-cols-3 items-center justify-around gap-1 px-5 lg:px-9 rounded-[40px] lg:text-lg bg-white z-0 py-2 xl:py-3 w-11/12 xl:w-7/12">
          <div className="flex items-center relative lg:gap-1 ">
            <BsSearch className="size-5 lg:size-7 text-[#142F62] lg:pr-1" />
            <select className="px-2 py-2 lg:py-3 outline-none min-w-[100px] w-full">
              <option className="w-full" label="Hair" value={"Hair"} />
              <option className="w-full" label="Face" value={"Face"} />
              <option className="w-full" label="Hair1" value={"Hair1"} />
              <option className="w-full" label="Hair2" value={"Hair2"} />
            </select>
          </div>
          <div className="flex items-center relative gap-1 border-l border-[#697586] md:pl-1 lg:pl-2">
            <IoLocationOutline className="size-6 lg:size-8 text-[#142F62]" />
            <input
              type="text"
              placeholder="Post Code"
              className="px-2 py-2 lg:py-3 outline-none w-full"
            />
          </div>
          <div className="flex items-center relative gap-1 border-l border-[#697586] md:pl-1 lg:pl-4">
            {/* <IoLocationOutline className="size-6 lg:size-8 text-[#142F62]" /> */}
            <input
              type="date"
              id="date"
              placeholder="Post Code"
              // onClick={(e)=> e.target.focus()}
              className="px-2 py-2 lg:py-3 outline-none w-full custom-date-input"
              defaultValue={new Date().toISOString().split("T")[0]}
            />
          </div>
        </form>
      </header>
      <section className=" py-16">
        <div className="flex items-center gap-6 lg:gap-36 justify-center py-4">
          <ProfileCategory category="Classic" withName />
          <ProfileCategory category="Elite" withName />
          <ProfileCategory category="Celebrity" withName />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-6 lg:gap-9 px-5 xl:px-36 mt-8 md:mt-14">
          <BeauticianCart />
          <BeauticianCart />
          <BeauticianCart />
          <BeauticianCart />
          <BeauticianCart />
          <BeauticianCart />
        </div>
      </section>
    </>
  );
}
