import React from "react";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import Contact from "@/app/(website)/contact/page";
import SearchForm from "@/components/Home/SearchForm";
import Beauticians from "@/components/Home/Beauticians";
// import moduleName from '/profile/img-1';

const page = () => {
  const reviewData = [
    {
      id: "rev1",
      bookingId: "cm71jkr8u0006i0dunxaulunu",
      profileId: "cm70cpse90002i0mpfe6aazlt",
      rating: 5,
      user: { name: "Sophia" },
      review:
        "The facial treatment was absolutely amazing! My skin feels so soft and glowing. Highly recommend!",
      createdAt: "2025-02-12T07:12:31.178Z",
    },
    {
      id: "rev2",
      bookingId: "cm71kpuq10001i0a5wemy0y01",
      profileId: "cm70cpse90002i0mpfe6aazlt",
      rating: 4,
      user: { name: "Emma" },
      review:
        "She is very skilled and professional. Loved the service, but the waiting time was a bit long.",
      createdAt: "2025-02-10T10:30:00.000Z",
    },
    {
      id: "rev3",
      bookingId: "cm71lqrs50003i0bdhtrgpo98",
      profileId: "cm70cpse90002i0mpfe6aazlt",
      rating: 5,
      user: { name: "Olivia" },
      review:
        "I got a haircut and it turned out exactly how I wanted! She understood my style perfectly. Loved it!",
      createdAt: "2025-02-08T15:45:00.000Z",
    },
    {
      id: "rev4",
      bookingId: "cm71zabc80004i0xyzrtyu09",
      profileId: "cm70cpse90002i0mpfe6aazlt",
      rating: 3,
      user: { name: "Ava" },
      review:
        "The service was good, but I feel like the products used could be of better quality for the price.",
      createdAt: "2025-02-06T18:20:00.000Z",
    },
    {
      id: "rev5",
      bookingId: "cm71mnop70005i0abcdxyz12",
      profileId: "cm70cpse90002i0mpfe6aazlt",
      rating: 5,
      user: { name: "Isabella" },
      review:
        "The nail art was absolutely stunning! She took her time and made sure every detail was perfect. Love it!",
      createdAt: "2025-02-04T14:10:00.000Z",
    },
  ];
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
        <SearchForm />
      </header>
      <section className="px-3 2xl:px-36 py-16 bg-[#fffbef]">
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
      <Beauticians />
      <Testimonials data={reviewData} />
      <Contact />
    </>
  );
};

export default page;

// "use client";
// import React from "react";
// import Image from "next/image";
// import Button from "@/components/Button";
// import BeauticianCart from "@/components/BeauticianCart";
// import Testimonials from "@/components/Testimonials";
// import Contact from "@/app/(website)/contact/page";
// import { useTranslation, withTranslation } from "react-google-multi-lang";

// // import { TFunction } from "react-i18next";

// const Page = () => {
//   const { translateText: t,  } = useTranslation();
//   return (
//     <>
//       <header className="flex items-center justify-center py-28 relative bg-gradient-to-b from-[#FFFFFF00] to-[#002B6B]">
//         <Image
//           src="/paint-brush.png"
//           alt="hero"
//           className="absolute -z-10 object-cover object-center"
//           fill
//           sizes="100vw"
//         />
//         <form className="px-3 py-10 lg:px-10 rounded-xl bg-[#ffffffb3] flex flex-col items-center mx-4">
//           <h3 className="font-Playfair_Display font-semibold text-2xl md:text-3xl text-center text-blue-500 mb-10">
//             {t("Book five star beauty service, direct to your door")}
//           </h3>
//           <select
//             name="category"
//             className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-3"
//           >
//             <option hidden>{t("Select Category")}</option>
//             <option value="nails">{t("Nails")}</option>
//             <option value="makeup">{t("Makeup")}</option>
//             <option value="massage">{t("Massage")}</option>
//             <option value="facial">{t("Facial")}</option>
//             <option value="waxing">{t("Waxing")}</option>
//           </select>
//           <input
//             type="number"
//             name="postcode"
//             // placeholder={t("Postcode")}
//             className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-3"
//           />
//           <input
//             type="date"
//             name="date"
//             className="max-w-md h-12 w-full px-5 focus:outline-none rounded-2xl mb-5"
//           />
//           <Button className="w-full max-w-md rounded-2xl" paddingY={12}>
//             {t("Book Now")}
//           </Button>
//         </form>
//       </header>
//       <section className="px-3 xl:px-36 py-16 bg-[#fffbef]">
//         <h3 className="text-blue-500 text-xl sm:text-4xl lg:text-5xl font-semibold text-center w-3/4 xl:w-2/4 mx-auto">
//           {t("We are Experienced in making you very Beautiful")}
//         </h3>
//         <div className="grid grid-cols-3 gap-2 lg:gap-6 h-40 lg:h-[614px] rounded-3xl lg:rounded-[40px] w-full max-w-2xl lg:max-w-full mx-auto overflow-hidden mt-10">
//           {[1, 2, 3, 4, 5].map((item, index) => (
//             <div
//               key={index}
//               className={`${index === 0 ? "row-span-2" : ""} relative`}
//             >
//               <Image
//                 key={index}
//                 src={`/experience/${item}.png`}
//                 alt="service"
//                 fill
//                 className="w-full"
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="py-16 text-center">
//         <p className="text-yellow-500">{t("Popular Beautician")}</p>
//         <h3 className="text-3xl lg:text-5xl font-semibold text-blue-500 font-Playfair_Display">
//           {t("Recommended")}
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-6 lg:gap-9 px-2 sm:px-6 xl:px-36 mt-8 md:mt-14">
//           <BeauticianCart />
//           <BeauticianCart />
//           <BeauticianCart />
//         </div>
//       </section>
//       <Testimonials />
//       <Contact />
//     </>
//   );
// };

// export default withTranslation(Page);
