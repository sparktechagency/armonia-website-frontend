import { TPageProps } from "@/type/index.type";
import Image from "next/image";
import React from "react";

const page = async (props: TPageProps) => {
  const { id } = await props.params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}categories?name=${id}`,
    {
      next: {
        revalidate: 60,
      },
      cache: "no-cache",
    }
  );
  const data = await response.json();
  console.log(data?.data);
  return (
    <div className="px-3 xl:px-36 py-4 ">
      <div className="flex flex-col lg:flex-row justify-between items-center p-8 gap-7 bg-white">
        <div className="flex flex-col max-w-lg">
          <h1 className="text-4xl font-semibold text-black mb-4">
            {data?.data?.[0]?.name}
          </h1>
          {/* <p className="text-lg text-gray-700 mb-6">
            Leg waxing, bikini waxing & more in the privacy of your own home.
          </p>
          <ul className="space-y-2 text-lg text-gray-700 mb-6">
            <li>✓ Appointments, 6am - 10pm</li>
            <li>✓ Vetted therapists</li>
            <li>✓ Long-lasting hair removal</li>
          </ul> */}
          <div
            className="no-tailwind"
            dangerouslySetInnerHTML={{ __html: data?.data?.[0]?.description }}
          ></div>
          <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 mt-3">
            BOOK NOW
          </button>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <Image
            src="/category/spa-procedures.jpg"
            alt="Mobile Waxing"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
