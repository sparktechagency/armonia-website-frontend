import React from "react";
// import Image from "next/image";
import SearchForm from "@/components/Home/SearchForm";
import Beauticians from "@/components/Home/Beauticians";
import BenefitsSection from "@/components/AppFeatures";
import HowItWorks from "@/components/HowItWork";
import ServiceGrid from "@/components/CategoryList";
import HomeTestimonials from "@/components/Home/HomeTestimonials";
import AccordionComponent from "@/components/Home/Therapist";

const page = () => {
  return (
    <>
      <header className="flex items-center justify-center py-28 relative bg-gradient-to-b from-[#FFFFFF00] to-[#002B6B] min-h-[calc(100vh-120px)] overflow-hidden">
        {/* <Image
          src="/paint-brush.png"
          alt="hero"
          className="absolute -z-10 object-cover object-center"
          fill
          sizes="100vw"
        /> */}
        <video
          className="absolute -z-10 object-cover h-full w-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/banner-video.mp4" type="video/mp4" />
          {/* Ensure you handle unsupported formats */}
          Your browser does not support the video tag.
        </video>
        <SearchForm />
      </header>
      <section className="px-3 2xl:px-36 py-16 bg-[#fffbef]">
        <h3 className="text-blue-500 text-xl sm:text-4xl lg:text-4xl font-semibold text-center w-3/4 xl:w-2/4 mx-auto">
          The ultimate beauty escape – without ever leaving your home provide by
          top beauticians in Algarve.
        </h3>
        {/* <CategoryList/> */}
        <ServiceGrid />
        {/* <div className="grid grid-cols-3 gap-2 lg:gap-6 h-40 lg:h-[614px] rounded-3xl lg:rounded-[40px] w-full max-w-2xl lg:max-w-full mx-auto overflow-hidden mt-10">
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
        </div> */}
      </section>
      <Beauticians />
      <BenefitsSection />
      <HowItWorks />
      <AccordionComponent />
      <HomeTestimonials />
      {/* <Contact /> */}
    </>
  );
};

export default page;
