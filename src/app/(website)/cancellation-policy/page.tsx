import Image from "next/image";
import React from "react";

export default async function page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}application?type=cancel_policy`,
    {
      next: {
        revalidate: 60,
      },
      cache: "no-cache",
    }
  );
  const data = await response.json();
  return (
    <>
      <header className="relative h-[350px] flex items-center justify-center bg-[#435981] px">
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
          Cancelation Policy
        </h1>
      </header>
      <section className="max-w-screen-xl mx-auto my-10 px-3 min-h-[calc(100vh-350px)]">
        <div
          dangerouslySetInnerHTML={{ __html: data?.data }}
          className="no-tailwind"
        />
      </section>
    </>
  );
}
