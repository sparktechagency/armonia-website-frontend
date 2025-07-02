"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import ProfileCategory from "@/components/ProfileCategory";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";
import Checkout from "@/components/Checkout";
import { TPageProps, TUniObject } from "@/type/index.type";
import { useGetUserQuery } from "@/redux/features/users/users.api";
import LoaderWraperComp from "@/components/LoaderWraperComp";
import { Service } from "@/redux/features/auth/authSlice";
import Swal from "sweetalert2";
import { useAppSelector } from "@/redux/hook";
import Login from "@/components/Login";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function Page(props: TPageProps) {
  const { id } = use(props.params);
  const searchParams = useSearchParams();
  const { cate } = Object.fromEntries(searchParams.entries());
  const [selectedCategory, setSelectedCategory] = useState(cate);
  const [selectedService, setSelectedService] = useState<Service[]>([]);
  const { data, isLoading, isError } = useGetUserQuery(id);
  const { user } = useAppSelector((state) => state.auth);

  const categoryWise =
    data?.data?.services?.reduce(
      (
        acc: Record<string, any>[],
        { categoryName, id, name, price, time, category, description }: Service
      ) => {
        const existingCategory = acc.find(
          (item) => item.categoryName === categoryName
        );
        if (existingCategory) {
          existingCategory.services.push({
            id,
            name,
            price,
            time,
            category,
            description,
          });
        } else {
          acc.push({
            image: category?.image,
            categoryName,
            categoryId: category?.id,
            services: [{ id, name, price, time, description }],
          });
        }
        return acc;
      },
      []
    ) || [];
  return (
    <>
      <header className="relative h-[200px] lg:h-[350px] flex items-center justify-center bg-[#435981]">
        <Image
          src="/headerBG.png"
          alt="header"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <h1 className="text-3xl lg:text-6xl text-center text-white font-Playfair_Display font-bold">
          Beautician Details
        </h1>
      </header>
      <LoaderWraperComp isError={isError} isLoading={isLoading}>
        <section className="px-5 xl:px-36 py-16 flex flex-col gap-2 md:gap-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="flex flex-col gap-4">
              <div className="relative inline-block w-fit">
                <h3 className="font-bold text-4xl lg:text-7xl font-Playfair_Display text-blue-500 capitalize notranslate">
                  {data?.data?.user.name}
                </h3>
                {!user?.id && (
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 rounded-md"></div>
                )}
              </div>
              <div className="flex justify-between items-center">
                <ProfileCategory category={data?.data?.category} withName />
                <p className="flex items-center gap-2 text-blue-500 notranslate">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 lg:size-6"
                  >
                    <g clipPath="url(#clip0_2413_2713)">
                      <path
                        d="M13.0876 20.2346C12.7257 20.0058 12.272 20.0058 11.9102 20.2347L6.36042 23.7446C5.50023 24.2887 4.43684 23.4837 4.66541 22.4616L6.13673 15.8821C6.23232 15.4547 6.09372 15.0071 5.77652 14.7189L0.891516 10.2798C0.134835 9.59221 0.541615 8.29345 1.5414 8.20485L7.97912 7.6344C8.39834 7.59726 8.76354 7.32137 8.92826 6.9174L11.4547 0.721256C11.8469 -0.240419 13.1531 -0.240418 13.5453 0.721257L16.0717 6.9174C16.2365 7.32137 16.6017 7.59726 17.0209 7.6344L23.4586 8.20485C24.4584 8.29345 24.8652 9.59221 24.1085 10.2798L19.2235 14.7189C18.9063 15.0071 18.7677 15.4547 18.8633 15.8821L20.3347 22.4621C20.5632 23.4841 19.5 24.2891 18.6398 23.7452L13.0876 20.2346Z"
                        fill="#FFC500"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2413_2713">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  {data?.data?.reviewStatistics?._avg?.rating || "0.0"} (
                  {data?.data?.reviewStatistics?._count?.rating})
                </p>
              </div>
              {/* <p className="flex items-center gap-2 text-xl lg:text-3xl text-blue-300 notranslate">
                <IoLocationOutline className="size-6 lg:size-8 " />
                <span>
                  {data?.data?.postalCode}{" "}
                  {data?.data?.address && ", " + data?.data?.address}
                </span>
              </p>*/}
              {/* <p className="text-xl lg:text-3xl">
                Available Time:{" "}
                <span className="notranslate">
                  {data?.data?.availableSlots?.[0]?.slot?.start}{" "}
                </span>
                To{" "}
                <span className="notranslate">
                  {" "}
                  {
                    data?.data?.availableSlots?.[
                      data?.data?.availableSlots?.length - 1
                    ]?.slot?.end
                  }
                </span>
              </p> */}
              {/* <div className="flex items-center gap-2">
                <p className="text-xl lg:text-3xl">Working Days :</p>{" "}
                <div className="flex items-center flex-wrap gap-2">
                  {data?.data?.weeklySchedules?.weekDays.map(
                    (item: TUniObject, index: number) => (
                      <span
                        key={index}
                        className="text-sm lg:text-base px-2 border h-fit bg-yellow-50"
                      >
                        {item.dayName}
                      </span>
                    )
                  )}
                </div>
              </div>  */}
              <p className="text-lg lg:text-2xl font-medium text-blue-500 text-justify">
                {data?.data?.bio}
              </p>
            </div>
            <div className=" w-full flex items-center justify-center overflow-hidden lg:h-[600px] lg:min-w-[40%] lg:max-w-[50%] relative">
              <Image
                src={
                  data?.data?.user?.image
                    ? `${process.env.NEXT_PUBLIC_API_URL}${data?.data?.user?.image}`
                    : "/profile-demo.png"
                }
                alt="beautician"
                className="w-full h-full object-cover"
                fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
              />
              {!user?.id && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10"></div>
              )}
            </div>
          </div>
          <div className="text-center py-0 md:py-10">
            <h2 className="text-3xl lg:text-5xl font-bold font-Playfair_Display">
              Our Services
            </h2>
            <p className="text-lg lg:text-xl mt-2">
              Bringing Out Your Natural Beauty with Expert Care, Precision, and
              a Touch of Elegance
            </p>
            <div className="flex justify-center flex-nowrap gap-3 overflow-x-auto mt-4">
              {categoryWise.map((catergory: TUniObject, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(catergory.categoryName)}
                  className={cn(
                    "whitespace-pre py-3.5 px-3 text-base cursor-pointer text-brand/80 hover:text-[#000000] transition-all relative hover:bg-sky-100 hover:before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-blue-400",
                    {
                      "text-brand bg-sky-100 before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-blue-400":
                        selectedCategory === catergory.categoryName ||
                        (!selectedCategory && index === 0),
                    }
                  )}
                >
                  <p className="flex items-center gap-2">
                    <span>{catergory.categoryName}</span>
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            {categoryWise
              .filter((item: TUniObject) =>
                selectedCategory
                  ? item.categoryName === selectedCategory
                  : item.categoryName === categoryWise[0].categoryName
              )
              .map(
                (
                  { image, categoryName, services }: TUniObject,
                  index: number
                ) => (
                  <div
                    key={index}
                    className={`flex gap-5 lg:gap-10 flex-col md:flex-row`}
                  >
                    <div className="w-full h-fit md:sticky top-0 left-0 lg:w-1/2 flex items-center justify-center overflow-hidden relative pt-5 md:pt-10 xl:pt-16">
                      <Image
                        src={
                          image
                            ? `${process.env.NEXT_PUBLIC_API_URL}${image}`
                            : "/profile-demo.png"
                        }
                        alt={categoryName}
                        className="w-full h-full object-cover"
                        width={1000}
                        height={1000}
                        // fill
                        // sizes="100vw"
                        // style={{
                        //   objectFit: "cover",
                        // }}
                      />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <h3 className="text-3xl lg:text-5xl font-bold text-blue-500">
                        {categoryName}
                      </h3>
                      <ul className="flex flex-col mt-5 gap-6">
                        {services.map((service: Service, cindex: number) => (
                          <li key={cindex} className="space-y-2 shadow-sm p-2">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center justify-between max-w-md w-full relative">
                                <span className="border-dotted border w-full absolute bottom-1.5"></span>
                                <p className="z-10 bg-white">{service.name}</p>
                                <p className="z-10 bg-white">
                                  {service.time}min
                                </p>
                              </div>
                              <div className="flex items-center justify-center gap-3 notranslate">
                                <p>€{service.price}</p>
                                <input
                                  checked={
                                    selectedService.find(
                                      (item: Service) => item.id === service.id
                                    )
                                      ? true
                                      : false
                                  }
                                  onChange={() =>
                                    setSelectedService((c) =>
                                      c.some((item) => item.id === service.id)
                                        ? c.filter(
                                            (item) => item.id !== service.id
                                          )
                                        : [...c, service]
                                    )
                                  }
                                  type="checkbox"
                                  className="size-4 lg:size-5 accent-blue-500 rounded-md"
                                />
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">
                              {service.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
          </div>

          {!user?.id ? (
            <Button
              className="md:w-1/4 mx-auto bg-blue-500 text-white lg:text-2xl font-bold rounded-2xl my-16 px-4"
              paddingY={12}
              gradientBorder
              openModalOnClick={<Login forword={`/beauticians/${id}`} />}
            >
              Checkout
            </Button>
          ) : selectedService.length ? (
            <Button
              className="md:w-1/4 mx-auto bg-blue-500 text-white lg:text-2xl font-bold rounded-2xl my-16 px-4"
              paddingY={12}
              gradientBorder
              openModalOnClick={
                <Checkout
                  selectedServices={selectedService}
                  profileId={data?.data?.id}
                  allowedWeekdays={[
                    ...data?.data?.weeklySchedules?.weekDays.map(
                      (item: TUniObject) => item.dayName
                    ),
                  ]}
                />
              }
            >
              Checkout
            </Button>
          ) : (
            <button
              onClick={() =>
                Swal.fire({
                  icon: "warning",
                  title: "Checkout Failed!",
                  text: `"Before proceeding to checkout, please select at least one service to continue."`,
                })
              }
              className="font-nunito border-blue-500 border-2 p-3 lg:p-4 md:w-1/4 mx-auto bg-blue-500 text-white lg:text-2xl font-bold rounded-2xl my-16 px-4"
            >
              Select & Checkout
            </button>
          )}
        </section>
      </LoaderWraperComp>
      <Testimonials data={data?.data?.reviews} />
    </>
  );
}
