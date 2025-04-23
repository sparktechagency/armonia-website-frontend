"use client";

import LoaderWraperComp from "@/components/LoaderWraperComp";
import { useCategoriesQuery } from "@/redux/features/category/category.api";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const { data, isLoading, isError } = useCategoriesQuery(undefined);
  return (
    <section className="px-3 2xl:px-36 py-16 bg-[#fffbef]">
      <h3 className="text-blue-500 text-xl sm:text-4xl lg:text-4xl font-semibold text-center w-3/4 xl:w-2/4 mx-auto">
        The ultimate beauty escape – without ever leaving your home provide by
        top beauticians in Algarve.
      </h3>

      <LoaderWraperComp
        isLoading={isLoading}
        isError={isError}
        dataEmpty={data?.data?.length < 1}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 mt-16 container">
          {data?.data?.map((service: any, index: number) => (
            <Link key={index} href={`/services/${service.name}`} passHref>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${service?.image}`}
                  alt={service.name}
                  height={1000}
                  width={1000}
                  className="object-cover w-full h-[250px] group-hover:opacity-80 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <h2 className="text-3xl font-bold text-white">
                    {service.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </LoaderWraperComp>
    </section>
  );
};

export default Page;
