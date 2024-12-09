import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="bg-yellow-50 w-full">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        Edit Profile
      </h1>
      <div className="bg-white p-5 rounded-lg shadow-md flex gap-6 items-center w-1/2 mx-auto mt-14">
        <div className="mb-4">
          <Image
            height={300}
            width={300}
            src="/myprofile.png"
            alt="Profile Image"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Anilo Mari"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
          />

          <input
            type="text"
            placeholder="abc@gmail.com"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
          />

          <input
            type="number"
            placeholder="213 48992201298"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-center w-full">
        <div className="w-1/4">
          <Link href="">
            <button className="hover:bg-[#f1f3f7] text-white hover:text-black py-2 px-4 border-2 font-bold rounded-md bg-[#1F4B99] transition duration-300 w-full">
              Save Changes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
