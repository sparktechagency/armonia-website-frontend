import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import BeauticianCart from "@/components/BeauticianCart";
import Testimonials from "@/components/Testimonials";
import Contact from "@/app/(website)/contact/page";

export default function page() {
  return (
    <>
      <header className="flex items-center justify-center py-28 relative bg-gradient-to-b from-[#FFFFFF00] to-[#002B6B]">
        <Image
          src="/paint-brush.png"
          alt="hero"
          className="absolute -z-10 object-cover object-center"
          fill
          sizes="100vw"
        />
        <form className="px-3 py-10 lg:px-10 rounded-xl bg-[#ffffffb3] flex flex-col items-center mx-4">
          <h3 className="font-Playfair_Display font-semibold text-2xl md:text-3xl text-center text-blue-500 mb-10">
            Book five star beauty service, direct to your door
          </h3>
          <select
            name="category"
            className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-3"
          >
            <option hidden>Select Category</option>
            <option value="nails">Nails</option>
            <option value="makeup">Makeup</option>
            <option value="massage">Massage</option>
            <option value="facial">Facial</option>
            <option value="waxing">Waxing</option>
          </select>
          <input
            type="number"
            name="postcode"
            placeholder="Postcode"
            className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-3"
          />
          <input
            type="date"
            name="date"
            className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-5"
          />
          <Button className="w-full max-w-md rounded-2xl" paddingY={12}>
            Book Now
          </Button>
        </form>
      </header>
      <section className="px-3 xl:px-36 py-16 bg-[#fffbef]">
        <h3 className="text-blue-500 text-xl sm:text-4xl lg:text-5xl font-semibold text-center w-3/4 xl:w-2/4 mx-auto">
          We are Experienced in making you very Beautiful
        </h3>
        <div className="grid grid-cols-3 gap-2 lg:gap-6 h-40 lg:h-[614px] rounded-3xl lg:rounded-[40px] w-full max-w-2xl lg:max-w-full mx-auto overflow-hidden mt-10">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className={`${index === 0 ? "row-span-2" : ""} relative`}
            >
              <Image
                key={index}
                src={`/experience/${item}.png`}
                alt="service"
                fill
                className="w-full"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 text-center">
        <p className="text-yellow-500">Popular Beautician</p>
        <h3 className="text-3xl lg:text-5xl  font-semibold text-blue-500 font-Playfair_Display">
          Recommended
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-6 lg:gap-9 px-3 xl:px-36 mt-8 md:mt-14">
          <BeauticianCart />
          <BeauticianCart />
          <BeauticianCart />
        </div>
      </section>
      <Testimonials />
      {/* <Contact /> */}
    </>
  );
}
