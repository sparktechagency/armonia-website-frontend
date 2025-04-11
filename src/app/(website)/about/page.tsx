import FounderSection from "@/components/Founder";
import Image from "next/image";
import React from "react";

export default function page() {
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
