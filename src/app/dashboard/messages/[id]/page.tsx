"use client";
import { useMessagesQuery } from "@/redux/features/messages/message.api";
import { TPageProps } from "@/type/index.type";
import Image from "next/image";
import React, { use } from "react";

const Page = (props: TPageProps) => {
  const { id } = use(props.searchParams);
  const { data, isLoading, isError } = useMessagesQuery(id as string, {
    skip: !id,
  });
  console.log(data, isLoading, isError)
  const user = {
    name: "John Doe",
    img: "/beautician.jpg",
    message: "Hello there! How are you today?",
  };
  return (
    <div className="w-full p-6 bg-[#fafafa]">
      <div className="flex items-center gap-4 p-4 border-b-2 ">
        {/* User Image */}
        <Image
          src={user.img}
          height={50}
          width={50}
          alt="User Profile Picture"
          className="rounded-full border border-gray-300"
        />

        <div className="flex-1 font-sans">
          <h1 className="text-xl font-medium text-gray-800 mb-2">
            {user.name}
          </h1>
          <p className="text-sm text-gray-500">Active 2 hours ago</p>
        </div>
      </div>
      <div className="  mx-auto mt-8 p-4 space-y-4">
        <div className="flex justify-start">
          <p className="bg-[#627496] text-white p-4 rounded-br-2xl rounded-b-2xl rounded-r-2xl max-w-[80%]">
            Hi, I&apos;m looking to get my backyard pool cleaned. Do you offer
            that service?
          </p>
        </div>

        {/* Message from Admin */}
        <div className="flex justify-end">
          <p className="bg-[#CCAD72] text-white p-4 rounded-bl-2xl rounded-b-2xl rounded-l-2xl max-w-[80%]">
            Yes, we do! Could you let me know your preferred time for the
            service?
          </p>
        </div>

        <div className="flex justify-start">
          <p className="bg-[#627496] text-white p-4 rounded-br-2xl rounded-b-2xl rounded-r-2xl max-w-[80%]">
            Hi, I&apos;m looking to get my backyard pool cleaned. Do you offer
            that service?
          </p>
        </div>

        <div className="flex justify-end">
          <p className="bg-[#CCAD72] text-white p-4 rounded-bl-2xl rounded-b-2xl rounded-l-2xl max-w-[80%]">
            Yes, we do! Could you let me know your preferred time for the
            service?
          </p>
        </div>

        <div className="flex justify-start">
          <p className="bg-[#627496] text-white p-4 rounded-br-2xl rounded-b-2xl rounded-r-2xl max-w-[80%]">
            Hi, I&apos;m looking to get my backyard pool cleaned. Do you offer
            that service?
          </p>
        </div>

        <div className="flex items-center gap-2  w-1/2 mx-auto pt-24">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg outline-none hover:border-yellow-500 text-black"
          />
          <button className="bg-[#CCAD72] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2628_5678)">
                <path
                  d="M0.864258 10.6152L24.1382 8.72503L10.8643 27.9357L0.864258 10.6152ZM4.86426 17.5434L6.86426 21.0075L15.0012 14.0003L4.86426 17.5434Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2628_5678">
                  <rect
                    width="21.1009"
                    height="20"
                    fill="white"
                    transform="translate(0.864258 10.6152) rotate(-30)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
