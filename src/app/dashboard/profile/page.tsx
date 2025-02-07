"use client";

import TimePicker from "@/components/Profile/TimePicker";
import ProfileCategory from "@/components/ProfileCategory";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineUpload } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

export default function page() {
  const [editable, setEditable] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  console.log(user?.availableSlots?.[0].slot.start);
  return (
    <section className="bg-yellow-50 w-full md:px-6 min-h-full pb-7">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-3 md:px-5 py-4 text-white">
        My Profile
      </h1>
      <div className="mt-8 flex justify-between lg:mx-6 px-3">
        <div className="">
          {!!user?.category && (
            <ProfileCategory category={user?.category} withName={true} />
          )}
        </div>
        <Link href="">
          <button className="bg-[#f1f3f7] text-black py-2 px-4 border-2 font-bold rounded-md hover:bg-[#1F4B99] hover:text-white transition duration-300 text-sm md:text-base ">
            Change Password
          </button>
        </Link>
      </div>
      <div className="p-5 rounded-lg shadow-sm flex gap-6 items-center mx-3 md:mx-auto mt-2 mb-2">
        <div className="mb-4">
          <Image
            height={300}
            width={300}
            src="/beautician.jpg"
            alt="Profile Image"
          />
        </div>

        <div className="w-full">
          <label>
            Name
            <input
              type="text"
              defaultValue={user?.name}
              placeholder="Anilo Mari"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 mt-1"
            />
          </label>
          <label>
            Email
            <input
              type="text"
              defaultValue={user?.email}
              placeholder="abc@gmail.com"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 mt-1"
            />
          </label>
          <label>
            Postal code
            <input
              type="text"
              defaultValue={user?.postalCode}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 mt-1"
            />
          </label>
          <div className="grid grid-cols-8 gap-5 mb-4">
            <div className="col-span-5">
              Available for service
              <div className="flex items-center gap-3">
                {/* <input
                  onChange={(e) => console.log(e.target.value)}
                  type="time"
                  step="1800" 
                  defaultValue={"14:30"}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1"
                /> */}
                <TimePicker name="start" />
                <span>to</span>
                <input
                  type="time"
                  defaultValue={new Date().toISOString().slice(11, 16)}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1"
                />
              </div>
            </div>
            <label className="col-span-3">
              Duration
              <input
                disabled
                type="text"
                defaultValue={"30min"}
                placeholder="30min"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-1"
              />
            </label>
          </div>
        </div>
      </div>
      <label>
        Bio
        <textarea
          defaultValue={user?.bio}
          rows={4}
          placeholder="Write anything..."
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 mt-1"
        />
      </label>
      <div className={"flex justify-center mt-14"}>
        {editable ? (
          <button
            type="submit"
            className="bg-[#1c3057] flex items-center text-white gap-2 py-2 px-6 border-2 font-bold rounded-md hover:bg-[#1F4B99] transition duration-300 text-sm md:text-base"
          >
            <MdOutlineUpload size={20} />
            Update
          </button>
        ) : (
          <button
            onClick={() => setEditable(true)}
            type="button"
            className="bg-[#1c3057] flex items-center text-white gap-2 py-2 px-5 border-2 font-bold rounded-md hover:bg-[#1F4B99] transition duration-300 text-sm md:text-base"
          >
            <TbEdit size={20} />
            Edit Profile
          </button>
        )}
      </div>
    </section>
  );
}
