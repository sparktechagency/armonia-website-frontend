"use client";
import { context } from "@/app/Context";
import React, { useContext } from "react";
import { VscSend } from "react-icons/vsc";

const SendMessageIput = () => {
  const appContext = useContext(context);

  return (
    <div className="flex items-center gap-2  w-1/2 mx-auto pt-24">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 p-2 border border-gray-300 rounded-lg outline-none hover:border-yellow-500 text-black"
      />
      <button className="bg-[#CCAD72] text-white px-4 py-2 rounded-lg hover:bg-blue-600">
      <VscSend size={22} />
      </button>
    </div>
  );
};

export default SendMessageIput;
