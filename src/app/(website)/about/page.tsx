import FounderSection from "@/components/Founder";
import Image from "next/image";
import React from "react";

export default async function page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}profiles/beauticians?limit=3`,
    {
      next: {
        revalidate: 60,
      },
      cache: "no-cache",
    }
  );
  const data = await response.json();
  console.log(data);
  return (
    <>
      <header className="relative h-[350px] flex items-center justify-center bg-[#435981]">
        <Image
          src="/headerBG.png"
          alt="header"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <h1 className="text-6xl text-center text-white font-Playfair_Display font-bold">
          About Us
        </h1>
      </header>
      <FounderSection />
    </>
  );
}
