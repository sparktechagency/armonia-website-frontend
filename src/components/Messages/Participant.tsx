"use client";

import React, { useContext } from "react";
import { TUniObject } from "@/type/index.type";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { compareByCTime } from "@/lib/time";
import { context } from "@/app/Context";

const Participant = ({ data }: { data: TUniObject }) => {
  const router = useRouter();
  const appContext = useContext(context);
  console.log(appContext?.partiActive)
  return (
    <div className="flex justify-start gap-2 items-center pb-2 border-b">
      <button onClick={() => router.back()} className="px-1">
        <MdOutlineArrowBackIosNew size={22} />
      </button>
      <div className="w-full flex items-center gap-4 px-0 lg:px-4 ">
        {/* User Image */}
        <Image
          src={
            data.image
              ? `${process.env.NEXT_PUBLIC_API_URL}${data.image}`
              : "/profile-demo.png"
          }
          height={50}
          width={50}
          alt="User Profile Picture"
          className="rounded-full border border-gray-300"
        />
        <div className="flex-1 font-sans">
          <h1 className="text-xl font-medium text-gray-800 mb-2">
            {data?.name}
          </h1>
          <p className="text-sm text-gray-500">
            {appContext?.partiActive ? (
              <span> 🟢 Active</span>
            ) : (
              <span>Active {compareByCTime(data.updatedAt)} </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Participant;
