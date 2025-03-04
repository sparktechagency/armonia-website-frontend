"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import ProfileCategory from "@/components/ProfileCategory";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";
import Checkout from "@/components/Checkout";
import { IoLocationOutline } from "react-icons/io5";
import { TPageProps, TUniObject } from "@/type/index.type";
import { useGetUserQuery } from "@/redux/features/users/users.api";
import LoaderWraperComp from "@/components/LoaderWraperComp";
import { Service } from "@/redux/features/auth/authSlice";
import Swal from "sweetalert2";
import { useAppSelector } from "@/redux/hook";
import Login from "@/components/Login";

export default function Page(props: TPageProps) {
  const { id } = use(props.params);
  const [selectedService, setSelectedService] = useState<Service[]>([]);
  const { data, isLoading, isError } = useGetUserQuery(id);
  const { user } = useAppSelector((state) => state.auth);

  // const categories = {
  //   "Make up": {
  //     image: "/category/make-up.jpg",
  //     name: "Make Up",
  //     services: [
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //     ],
  //   },
  //   "Hair styling": {
  //     image: "/category/hair-styling.jpg",
  //     name: "Hair Styling",
  //     services: [
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //     ],
  //   },
  //   "Nail care": {
  //     image: "/category/nail-care.jpg",
  //     name: "Skin Care",
  //     services: [
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //     ],
  //   },
  //   Cosmetology: {
  //     image: "/category/cosmetology.jpg",
  //     name: "Manicure",
  //     services: [
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //     ],
  //   },
  //   "SPA procedures": {
  //     image: "/category/spa-procedures.jpg",
  //     name: "Manicure",
  //     services: [
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //       {
  //         name: "Hair Cut",
  //         duration: "30min",
  //         price: "$50",
  //       },
  //     ],
  //   },
  // };

  const categories1 =
    data?.data?.services?.reduce(
      (
        acc: Record<string, any>[],
        { categoryName, id, name, price, time, category }: Service
      ) => {
        const existingCategory = acc.find(
          (item) => item.categoryName === categoryName
        );
        if (existingCategory) {
          existingCategory.services.push({ id, name, price, time, category });
        } else {
          acc.push({
            image: category?.image,
            categoryName,
            categoryId: category?.id,
            services: [{ id, name, price, time }],
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
        <section className="px-5 xl:px-36 py-16 flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-4xl lg:text-7xl font-Playfair_Display text-blue-500">
                {data?.data?.user.name}
              </h3>
              <div className="flex justify-between items-center">
                <ProfileCategory category={data?.data?.category} withName />
                <p className="flex items-center gap-2 text-blue-500">
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
              <p className="flex items-center gap-2 text-xl lg:text-3xl text-blue-300">
                <IoLocationOutline className="size-6 lg:size-8" />
                <span>{data?.data?.postalCode}</span>
                {/* Post Code - */}
              </p>
              <p className="text-xl lg:text-3xl">
                Available Time: {data?.data?.availableSlots?.[0]?.slot?.start}{" "}
                To{" "}
                {
                  data?.data?.availableSlots?.[
                    data?.data?.availableSlots?.length - 1
                  ]?.slot?.end
                }
              </p>
              <div className="flex items-center gap-2">
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
              </div>
              <p className="text-lg lg:text-2xl font-medium text-blue-500 text-justify">
                {data?.data?.bio}
              </p>
            </div>
            <div className="w-full flex items-center justify-center overflow-hidden lg:h-[600px] relative">
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
            </div>
          </div>
          <div className="text-center py-10">
            <h2 className="text-3xl lg:text-5xl font-bold font-Playfair_Display">
              Our Services
            </h2>
            <p className="text-lg lg:text-xl mt-2">
              Bringing Out Your Natural Beauty with Expert Care, Precision, and
              a Touch of Elegance
            </p>
          </div>
          <div className="space-y-12 lg:space-y-10">
            {categories1.map(
              (
                { image, categoryName, services }: TUniObject,
                index: number
              ) => (
                <div
                  key={index}
                  className={`flex gap-5 lg:gap-10 items-center ${
                    index % 2 === 0
                      ? "flex-col md:flex-row"
                      : "flex-col md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden h-[550] relative">
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
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-3xl lg:text-5xl font-bold text-blue-500">
                      {categoryName}
                    </h3>
                    <ul className="flex flex-col mt-5 gap-6">
                      {services.map((service: Service, cindex: number) => (
                        <li className="flex items-center gap-3" key={cindex}>
                          <div className="flex items-center justify-between max-w-md w-full relative">
                            <span className="border-dotted border w-full absolute bottom-1.5"></span>
                            <p className="z-10 bg-white">{service.name}</p>
                            <p className="z-10 bg-white">{service.time}min</p>
                          </div>
                          <div className="flex items-center justify-center gap-3">
                            <p>${service.price}</p>
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
                                    ? c.filter((item) => item.id !== service.id)
                                    : [...c, service]
                                )
                              }
                              type="checkbox"
                              className="size-4 lg:size-5 accent-blue-500 rounded-md"
                            />
                          </div>
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
              openModalOnClick={<Login forword={`/beauticians/${id}`}/>}
            >
              Login & Checkout
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
              Continue to Checkout
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
