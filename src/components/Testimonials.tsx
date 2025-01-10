import React from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function Testimonials() {
  return (
    <section className="px-3 xl:px-36 py-16 text-center bg-yellow-50">
      <p className="text-yellow-500">Testimonials</p>
      <h3 className="text-3xl md:text-5xl font-semibold text-blue-500 font-Playfair_Display px-2">
        What our Customers says...
      </h3>
      <div className="my-14 min-h-[688px] bg-blue-500 rounded-[40px] flex flex-col lg:flex-row items-center justify-around gap-10 md:gap-20 p-10">
        <div className="flex justify-center max-w-xl w-full">
          <div className="hidden md:block w-[40px] lg:w-[70px] h-[228px] bg-white rounded-full mr-3" />
          <div className="hidden md:block w-[40px] lg:w-[70px] h-[443px] bg-white rounded-full -mr-10" />
          <div className="w-[230px] lg:w-[280px] h-[230px] md:h-[280px] my-auto rounded-full border-4 border-white overflow-hidden flex items-center justify-center">
            <Image
              src="/beautician.jpg"
              alt="quote"
              width={280}
              height={280}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="text-white max-w-xl text-start relative my-6 py-2">
          <svg
            width="46"
            height="41"
            viewBox="0 0 46 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-7 lg:-top-10 -left-8 lg:-left-14 size-7 md:size-8 lg:size-12"
          >
            <path
              d="M0 28.276C0 20.4253 4.69333 11.1667 14.08 0.5L20.096 4.212C15.6587 11.0387 13.184 16.244 12.672 19.828L20.224 24.436C20.224 27.4227 19.4987 30.3667 18.048 33.268C16.6827 36.1693 15.2747 38.4307 13.824 40.052C9.04533 40.052 5.248 38.772 2.432 36.212C0.810667 34.7613 0 32.116 0 28.276ZM24.96 28.276C24.96 20.4253 29.6533 11.1667 39.04 0.5L45.056 4.212C40.6187 11.0387 38.144 16.244 37.632 19.828L45.184 24.436C45.184 27.4227 44.4587 30.3667 43.008 33.268C41.6427 36.1693 40.2347 38.4307 38.784 40.052C34.0053 40.052 30.208 38.772 27.392 36.212C25.7707 34.7613 24.96 32.116 24.96 28.276Z"
              fill="white"
            />
          </svg>

          <h5 className="font-Playfair_Display font-bold text-3xl lg:text-5xl">
            Leslie Alexander
          </h5>
          <p className="lg:text-xl mt-5">
            &ldquo;Absolutely love this platform! Booking my salon appointments
            has never been so easy and hassle-free. The interface is sleek,
            intuitive, and perfect for my busy lifestyle!&ldquo;
          </p>
          <svg
            width="46"
            height="41"
            viewBox="0 0 46 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-5 lg:-bottom-10 -right-5 lg:-right-10 size-7 md:size-8 lg:size-12"
          >
            <path
              d="M45.1841 28.276C45.1841 20.4253 40.4907 11.1667 31.1041 0.5L25.0881 4.212C29.5254 11.0387 32.0001 16.244 32.5121 19.828L24.9601 24.436C24.9601 27.4227 25.6854 30.3667 27.1361 33.268C28.5014 36.1693 29.9094 38.4307 31.3601 40.052C36.1387 40.052 39.9361 38.772 42.7521 36.212C44.3734 34.7613 45.1841 32.116 45.1841 28.276ZM20.2241 28.276C20.2241 20.4253 15.5308 11.1667 6.14408 0.5L0.128082 4.212C4.56541 11.0387 7.04008 16.244 7.55208 19.828L8.01086e-05 24.436C8.01086e-05 27.4227 0.725414 30.3667 2.17608 33.268C3.54141 36.1693 4.94941 38.4307 6.40008 40.052C11.1787 40.052 14.9761 38.772 17.7921 36.212C19.4134 34.7613 20.2241 32.116 20.2241 28.276Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        {/* Left Button */}
        <button className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white shadow hover:bg-gray-200 transition">
          <IoChevronBack className="text-[#382A3F] size-8" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#382A3F] shadow hover:bg-[#4A3B50] transition">
          <IoChevronForward className="text-white size-8" />
        </button>
      </div>
    </section>
  );
}
