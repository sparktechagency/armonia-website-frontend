"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Verify() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // State for OTP inputs

  const handleOtpChange = (e, index) => {
    let newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="w-[600px] mx-auto shadow-2xl p-8 rounded-lg px-12">
        {/ Header /}

        <div className="text-center mb-6 space-y-3">
          <div className="flex items-center lg:gap-40 gap-16">
            <Link href={"/login"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6489 20.0485C11.1803 20.5171 10.4205 20.5171 9.95186 20.0485L2.75186 12.8485C2.28323 12.3799 2.28323 11.6201 2.75186 11.1514L9.95186 3.95145C10.4205 3.48282 11.1803 3.48282 11.6489 3.95145C12.1175 4.42008 12.1175 5.17988 11.6489 5.6485L6.49745 10.8H20.4004C21.0631 10.8 21.6004 11.3372 21.6004 12C21.6004 12.6627 21.0631 13.2 20.4004 13.2L6.49745 13.2L11.6489 18.3514C12.1175 18.8201 12.1175 19.5799 11.6489 20.0485Z"
                  fill="#262626"
                />
              </svg>
            </Link>

            <h1 className="text-2xl font-bold text-black font-Playfair_Display">
              Verify OTP
            </h1>
          </div>
          <p className="text-gray-400">
            Enter the code that was sent to your email.
          </p>
        </div>

        {/ OTP Input Fields /}
        <form action="" className="flex justify-around mb-3 ">
          {otp.map((digit, index) => (
            <input
              key={index}
              className="w-12 h-12 text-center border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={digit}
              maxLength="1"
              onChange={(e) => handleOtpChange(e, index)}
            />
          ))}
        </form>

        {/ Resend OTP Link /}
        <div className="text-center text-sm text-gray-500 flex justify-around">
          <span>Didn't receive the code?</span>
          <Link href="/resend-otp" className="text-green-500 ml-1">
            Resend
          </Link>
        </div>

        {/ Verify Button /}
        <div className="mt-6">
          <Link
            href={"OTP/reset"}
            className="bg-[#142F62] w-full py-2 text-white font-bold rounded-md hover:bg-[#1F4B99] transition duration-300"
          >
            Verify
          </Link>
        </div>
      </div>
    </div>
  );
}
