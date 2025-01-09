"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [selectedUser, setSelectedUser] = useState<number | null>(null); // Track the selected user

  const users = [
    {
      name: "John Doe",
      img: "/beautician.jpg",
      message: "Hello there! How are you today?",
    },
    {
      name: "Jane Doe",
      img: "/beautician.jpg",
      message: "Hi! I need your help with a project.",
    },
    {
      name: "Michael Doe",
      img: "/beautician.jpg",
      message: "I need help with my hair styling.",
    },
    {
      name: "Sarah Doe",
      img: "/beautician.jpg",
      message: "I need help with my haircuts.",
    },
    {
      name: "David Doe",
      img: "/beautician.jpg",
      message: "I need help with my makeup application.",
    },
  ];

  return (
    <section className="bg-yellow-50 w-full">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        My Profile
      </h1>
      <div className="mx-auto flex p-10 gap-8">
        {/* Left Panel */}
        <div className="w-1/4">
          {/* Search Input */}
          <div className="relative w-full max-w-md mx-auto mt-8 px-2">
            <input
              type="text"
              placeholder="Search Names"
              className="w-full py-4 pl-4 pr-12 rounded-3xl hover:border-yellow-500 border outline-none text-black"
            />
            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="28"
                height="28"
              >
                <path
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2.5-5.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            </div>
          </div>

          {/* User List */}
          <div className="px-3 mt-6">
            {users.map((user, index) => (
              <div
                key={index}
                className={`text-black p-4 border-b-2 cursor-pointer ${
                  selectedUser === index ? "bg-gray-100" : ""
                }`}
                onClick={() => setSelectedUser(index)}
              >
                <div className="flex items-center gap-4 w-full">
                  <Image
                    src={user.img}
                    alt={user.name}
                    width={50}
                    height={50}
                    className="rounded-full overflow-hidden w-[50px] h-[50px] object-cover"
                  />
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h1 className="font-medium text-lg">{user.name}</h1>
                      <p className="text-sm text-gray-500">{user.message}</p>
                    </div>
                    <input
                      id={`messageCheckbox-${index}`}
                      type="checkbox"
                      className=" size-4 rounded-full accent-sky-500"
                      checked={selectedUser === index}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-2/3  border-2  rounded-3xl p-6 bg-[#fafafa]">
          {selectedUser !== null ? (
            <div>
              <div className="flex items-center gap-4 p-4 border-b-2 ">
                {/* User Image */}
                <Image
                  src={users[selectedUser].img}
                  height={50}
                  width={50}
                  alt="User Profile Picture"
                  className="rounded-full border border-gray-300"
                />

                <div className="flex-1 font-sans">
                  <h1 className="text-xl font-medium text-gray-800 mb-2">
                    {users[selectedUser].name}
                  </h1>
                  <p className="text-sm text-gray-500">Active 2 hours ago</p>
                </div>
              </div>
              <div className="  mx-auto mt-8 p-4 space-y-4">
                <div className="flex justify-start">
                  <p className="bg-[#627496] text-white p-4 rounded-br-2xl rounded-b-2xl rounded-r-2xl max-w-[80%]">
                    Hi, I&apos;m looking to get my backyard pool cleaned. Do you
                    offer that service?
                  </p>
                </div>

                {/* Message from Admin */}
                <div className="flex justify-end">
                  <p className="bg-[#CCAD72] text-white p-4 rounded-bl-2xl rounded-b-2xl rounded-l-2xl max-w-[80%]">
                    Yes, we do! Could you let me know your preferred time for
                    the service?
                  </p>
                </div>

                <div className="flex justify-start">
                  <p className="bg-[#627496] text-white p-4 rounded-br-2xl rounded-b-2xl rounded-r-2xl max-w-[80%]">
                    Hi, I&apos;m looking to get my backyard pool cleaned. Do you
                    offer that service?
                  </p>
                </div>

                <div className="flex justify-end">
                  <p className="bg-[#CCAD72] text-white p-4 rounded-bl-2xl rounded-b-2xl rounded-l-2xl max-w-[80%]">
                    Yes, we do! Could you let me know your preferred time for
                    the service?
                  </p>
                </div>

                <div className="flex justify-start">
                  <p className="bg-[#627496] text-white p-4 rounded-br-2xl rounded-b-2xl rounded-r-2xl max-w-[80%]">
                    Hi, I&apos;m looking to get my backyard pool cleaned. Do you
                    offer that service?
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
          ) : (
            <p className="text-gray-500 text-center italic">
              Select a user to view details
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
