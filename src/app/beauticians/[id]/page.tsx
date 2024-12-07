import React from "react";
import Image from "next/image";
import ProfileCategory from "@/components/ProfileCategory";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";
import Checkout from "@/components/Checkout";

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
      <header className="relative h-[350px] flex items-center justify-center bg-[#435981]">
        <Image
          src="/headerBG.png"
          alt="header"
          layout="fill"
          objectFit="cover"
        />
        <h1 className="text-6xl text-center text-white font-Playfair_Display font-bold">
          Beautician Details
        </h1>
      </header>
      <section className="px-36 py-16 flex flex-col gap-10">
        <div className="flex gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-7xl font-Playfair_Display text-blue-500">
              Beauty Akik
            </h3>
            <ProfileCategory category="Classic" withName />
            <p className="flex items-center gap-2 text-3xl text-blue-300">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0C11.0213 0 5.34375 5.67759 5.34375 12.6562C5.34375 15.0141 5.99688 17.3152 7.23298 19.3115L17.2796 35.5014C17.472 35.8116 17.8111 36 18.1757 36C18.1785 36 18.1813 36 18.1841 36C18.5519 35.9971 18.8916 35.8028 19.0806 35.4873L28.8711 19.1405C30.039 17.1863 30.6562 14.9441 30.6562 12.6562C30.6562 5.67759 24.9787 0 18 0ZM27.0609 18.0575L18.1597 32.9193L9.0258 18.2001C7.99692 16.5385 7.43906 14.6215 7.43906 12.6562C7.43906 6.8407 12.1845 2.09531 18 2.09531C23.8155 2.09531 28.5539 6.8407 28.5539 12.6562C28.5539 14.5632 28.0328 16.4312 27.0609 18.0575Z"
                  fill="#141414"
                />
                <path
                  d="M18 6.32812C14.5107 6.32812 11.6719 9.16692 11.6719 12.6562C11.6719 16.1233 14.4645 18.9844 18 18.9844C21.5791 18.9844 24.3281 16.0852 24.3281 12.6562C24.3281 9.16692 21.4893 6.32812 18 6.32812ZM18 16.8891C15.6616 16.8891 13.7672 14.9883 13.7672 12.6562C13.7672 10.33 15.6738 8.42344 18 8.42344C20.3262 8.42344 22.2258 10.33 22.2258 12.6562C22.2258 14.9543 20.3754 16.8891 18 16.8891Z"
                  fill="#141414"
                />
              </svg>
              EC3P
            </p>
            <p className="text-3xl">Available Time: 09:00 AM to 09:00 PM</p>
            <p className="flex items-center gap-2 text-blue-500">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            <p className="text-2xl font-medium text-blue-500">
              I specialize in a wide range of beauty services, including bridal
              and party makeup, hair styling, skincare treatments, manicures,
              pedicures, and more. clients unique needs.s, See More...
            </p>
          </div>
          <div className="w-full flex items-center justify-center overflow-hidden h-[600px] relative">
            <Image
              src="/beautician.jpg"
              alt="beautician"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center py-10">
          <h2 className="text-5xl font-bold font-Playfair_Display">
            Our Services
          </h2>
          <p className="text-xl mt-2">
            Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin
            neque.
          </p>
        </div>
        {Object.entries(categories).map(
          ([key, { image, name, services }], index) => (
            <div
              key={index}
              className={`flex gap-10 items-center ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 flex items-center justify-center overflow-hidden h-[550] relative">
                <Image
                  src={image}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-5xl font-bold text-blue-500">{key}</h3>
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
        <Button
          className="w-1/4 mx-auto bg-blue-500 text-white text-2xl font-bold rounded-2xl my-16"
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
