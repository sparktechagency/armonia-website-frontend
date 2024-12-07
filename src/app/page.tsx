import React from "react";
import Image from "next/legacy/image";
import Button from "@/components/Button";
import BeauticianCart from "@/components/BeauticianCart";
import Testimonials from "@/components/Testimonials";
import Contact from "@/app/contact/page";

export default function page() {
  return (
    <>
      <header className="flex items-center justify-center py-28 relative bg-gradient-to-b from-[#FFFFFF00] to-[#002B6B]">
        <Image
          src="/paint-brush.png"
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute -z-10"
        />
        <form className="p-10 rounded-xl bg-[#ffffffb3] flex flex-col items-center">
          <h3 className="font-Playfair_Display font-semibold text-3xl text-blue-500 mb-10">
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
      <section className="px-36 py-16 bg-[#fffbef]">
        <h3 className="text-blue-500 text-5xl font-semibold text-center">
          We are Experienced in making you
          <br />
          very Beautiful
        </h3>
        <div className="grid grid-cols-3 gap-6 h-[614px] rounded-[40px] w-full overflow-hidden mt-6">
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
              />
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 text-center">
        <p className="text-yellow-500">Popular Beautician</p>
        <h3 className="text-5xl font-semibold text-blue-500 font-Playfair_Display">
          Recommended
        </h3>
        <div className="flex items-center gap-9 px-36 mt-14">
          <BeauticianCart />
          <BeauticianCart />
          <BeauticianCart />
        </div>
      </section>
      <Testimonials />
      <Contact />
    </>
  );
}
