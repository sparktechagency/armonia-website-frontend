import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    (<footer className="bg-gradient-pink-blue text-blue-300">
      <div className="px-3 xl:px-36 py-8 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-between bg-blue-50 gap-10">
        <div>
          <Image
            src="/logo-footer.png"
            alt="logo"
            width={102}
            height={120}
            // style={{
            //   maxWidth: "100%",
            //   height: "auto"
            // }}
             />
          <p className="font-medium max-w-lg mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 justify-between lg:w-1/2 w-full gap-4">
          <div>
            <h3 className="font-bold font-Playfair_Display text-2xl text-blue-500">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/beauticians">Beauticians</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-Playfair_Display text-2xl text-blue-500">
              Utility Pages
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-Playfair_Display text-2xl text-blue-500">
              Get In Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>Fale Conosco</li>
              <li>Agendar Horário</li>
              <li>(00) 0000-0000</li>
              <li>(00) 00000-0000</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="py-3 text-sm md:text-base text-center font-nunito bg-gradient-to-b from-[#7E8EAC] to-[#142F62] text-white">
        Copyright © <span>{new Date().getFullYear()}</span> Vibely. All Rights
        Reserved
      </p>
    </footer>)
  );
}
