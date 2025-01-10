import React from "react";
import Image from "next/image";
import ProfileCategory from "@/components/ProfileCategory";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";
import Checkout from "@/components/Checkout";
import { IoLocationOutline } from "react-icons/io5";

export default function page() {
  const categories = {
    "Make up": {
      image: "/category/make-up.jpg",
      name: "Make Up",
      services: [
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
      ],
    },
    "Hair styling": {
      image: "/category/hair-styling.jpg",
      name: "Hair Styling",
      services: [
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
      ],
    },
    "Nail care": {
      image: "/category/nail-care.jpg",
      name: "Skin Care",
      services: [
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
      ],
    },
    Cosmetology: {
      image: "/category/cosmetology.jpg",
      name: "Manicure",
      services: [
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
      ],
    },
    "SPA procedures": {
      image: "/category/spa-procedures.jpg",
      name: "Manicure",
      services: [
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
        {
          name: "Hair Cut",
          duration: "30min",
          price: "€50",
        },
      ],
    },
  };

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
      <section className="px-5 xl:px-36 py-16 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-4xl lg:text-7xl font-Playfair_Display text-blue-500">
              Beauty Akik
            </h3>
            <ProfileCategory category="Classic" withName />
            <p className="flex items-center gap-2 text-xl lg:text-3xl text-blue-300">
              <IoLocationOutline className="size-6 lg:size-8" />
              EC3P
            </p>
            <p className="text-xl lg:text-3xl">
              Available Time: 09:00 AM to 09:00 PM
            </p>
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
              5.0 (19)
            </p>
            <p className="text-lg lg:text-2xl font-medium text-blue-500">
              I specialize in a wide range of beauty services, including bridal
              and party makeup, hair styling, skincare treatments, manicures,
              pedicures, and more. clients unique needs.s, See More...
            </p>
          </div>
          <div className="w-full flex items-center justify-center overflow-hidden h-[600px] relative">
            <Image
              src="/beautician.jpg"
              alt="beautician"
              className="w-full h-full object-cover"
              fill
              sizes="100vw"
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
            Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin
            neque.
          </p>
        </div>
        <div className="space-y-12 lg:space-y-10">
          {Object.entries(categories).map(
            ([key, { image, name, services }], index) => (
              <div
                key={index}
                className={`flex gap-5 lg:gap-10 items-center ${
                  index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
                }`}
              >
                <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden h-[550] relative">
                  <Image
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl lg:text-5xl font-bold text-blue-500">
                    {key}
                  </h3>
                  <ul className="flex flex-col mt-5 gap-6">
                    {services.map(({ name, duration, price }, index) => (
                      <li className="flex items-center gap-3" key={index}>
                        <div className="flex items-center justify-between max-w-md w-full relative">
                          <span className="border-dotted border w-full absolute bottom-1.5"></span>
                          <p className="z-10 bg-white">{name}</p>
                          <p className="z-10 bg-white">{duration}</p>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                          <p>{price}</p>
                          <input type="checkbox" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
        <Button
          className="md:w-1/4 mx-auto bg-blue-500 text-white lg:text-2xl font-bold rounded-2xl my-16 px-4"
          paddingY={12}
          gradientBorder
          openModalOnClick={<Checkout />}
        >
          Continue to check out
        </Button>
      </section>
      <Testimonials />
    </>
  );
}
