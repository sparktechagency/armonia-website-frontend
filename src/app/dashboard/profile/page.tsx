import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="bg-yellow-50 w-full">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-3 md:px-5 py-4 text-white">
        My Profile
      </h1>
      <div className="mt-6 flex justify-end lg:mx-6 px-3">
        <Link href="">
          <button className="bg-[#f1f3f7] text-black py-2 px-4 border-2 font-bold rounded-md hover:bg-[#1F4B99] transition duration-300 text-sm md:text-base ">
            Change Password
          </button>
        </Link>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-md flex gap-6 items-center md:w-1/2 mx-3 md:mx-auto mt-6 ">
        <div className="mb-4">
          <Image
            height={300}
            width={300}
            src="/beautician.jpg"
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
      <div className="flex justify-center mt-14">
        <Link href="profile/edit">
          <button className="bg-[#1c3057] flex items-center text-white gap-3 py-2 px-4 border-2 font-bold rounded-md hover:bg-[#1F4B99] transition duration-300 text-sm md:text-base">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="22" height="22" rx="11" fill="white" />
              <path
                d="M9.90966 15.9457C10.1041 15.794 10.2805 15.6176 10.6332 15.2649L15.1529 10.7453C14.5377 10.4892 13.8092 10.0687 13.1201 9.37964C12.431 8.69049 12.0104 7.9618 11.7544 7.34661L7.23462 11.8664L7.2346 11.8664C6.88191 12.2191 6.70555 12.3955 6.55389 12.5899C6.37498 12.8193 6.22159 13.0675 6.09644 13.3301C5.99034 13.5527 5.91147 13.7893 5.75374 14.2625L4.92195 16.7579C4.84432 16.9908 4.90493 17.2475 5.0785 17.4211C5.25207 17.5946 5.50881 17.6552 5.74169 17.5776L8.23706 16.7458C8.71026 16.5881 8.94688 16.5092 9.16949 16.4031C9.43209 16.278 9.68028 16.1246 9.90966 15.9457Z"
                fill="#484848"
              />
              <path
                d="M16.407 9.49109C17.3455 8.55261 17.3455 7.03102 16.407 6.09254C15.4685 5.15405 13.947 5.15405 13.0085 6.09254L12.4664 6.63462C12.4738 6.65703 12.4815 6.67976 12.4895 6.70278C12.6882 7.27548 13.0631 8.02623 13.7683 8.73146C14.4735 9.43669 15.2243 9.81158 15.797 10.0103C15.8199 10.0182 15.8425 10.0259 15.8648 10.0333L16.407 9.49109Z"
                fill="#484848"
              />
            </svg>
            Edit Profile
          </button>
        </Link>
      </div>
    </section>
  );
}
