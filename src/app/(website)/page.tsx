import React from "react";
// import Image from "next/image";
import Contact from "@/app/(website)/contact/page";
import SearchForm from "@/components/Home/SearchForm";
import Beauticians from "@/components/Home/Beauticians";
import BenefitsSection from "@/components/AppFeatures";
import HowItWorks from "@/components/HowItWork";
import ServiceGrid from "@/components/CategoryList";
import HomeTestimonials from "@/components/Home/HomeTestimonials";

const page = () => {
  // const reviewData = [
  //   {
  //     id: "rev1",
  //     bookingId: "cm71jkr8u0006i0dunxaulunu",
  //     profileId: "cm70cpse90002i0mpfe6aazlt",
  //     rating: 5,
  //     user: { name: "Sophia" },
  //     review:
  //       "The facial treatment was absolutely amazing! My skin feels so soft and glowing. Highly recommend!",
  //     createdAt: "2025-02-12T07:12:31.178Z",
  //   },
  //   {
  //     id: "rev2",
  //     bookingId: "cm71kpuq10001i0a5wemy0y01",
  //     profileId: "cm70cpse90002i0mpfe6aazlt",
  //     rating: 4,
  //     user: { name: "Emma" },
  //     review:
  //       "She is very skilled and professional. Loved the service, but the waiting time was a bit long.",
  //     createdAt: "2025-02-10T10:30:00.000Z",
  //   },
  //   {
  //     id: "rev3",
  //     bookingId: "cm71lqrs50003i0bdhtrgpo98",
  //     profileId: "cm70cpse90002i0mpfe6aazlt",
  //     rating: 5,
  //     user: { name: "Olivia" },
  //     review:
  //       "I got a haircut and it turned out exactly how I wanted! She understood my style perfectly. Loved it!",
  //     createdAt: "2025-02-08T15:45:00.000Z",
  //   },
  //   {
  //     id: "rev4",
  //     bookingId: "cm71zabc80004i0xyzrtyu09",
  //     profileId: "cm70cpse90002i0mpfe6aazlt",
  //     rating: 3,
  //     user: { name: "Ava" },
  //     review:
  //       "The service was good, but I feel like the products used could be of better quality for the price.",
  //     createdAt: "2025-02-06T18:20:00.000Z",
  //   },
  //   {
  //     id: "rev5",
  //     bookingId: "cm71mnop70005i0abcdxyz12",
  //     profileId: "cm70cpse90002i0mpfe6aazlt",
  //     rating: 5,
  //     user: { name: "Isabella" },
  //     review:
  //       "The nail art was absolutely stunning! She took her time and made sure every detail was perfect. Love it!",
  //     createdAt: "2025-02-04T14:10:00.000Z",
  //   },
  // ];
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

      <HomeTestimonials />
      <Contact />
    </>
  );
};

export default page;
