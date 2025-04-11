import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-pink-blue text-blue-300">
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
            Founded by Isabela, a passionate beauty professional, Armonia was
            created to offer something deeply personal: the highest standard of
            care, wherever you are. We bring the spa, salon, and wellness studio
            to your villa, hotel, or home—so you can indulge, unwind, and glow
            on your own terms.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 justify-between lg:w-1/2 w-full gap-4">
          <div>
            <h3 className="font-bold font-Playfair_Display text-2xl text-blue-500">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/treatments">Treatments</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/gift">Gift CARDS</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-Playfair_Display text-2xl text-blue-500">
              ABOUT US
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/privacy">PRVACY POLICY</Link>
              </li>
              <li>
                <Link href="/terms">TERMS OF SERVICE</Link>
              </li>
              <li>
                <Link href="/cancellation-policy">CANCELLATION POLICY</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-Playfair_Display text-2xl text-blue-500">
              Get In Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>BECOME A THERAPIST</li>
              <li>CONTACT US</li>
              <li>+00351 911796101</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="py-3 text-sm md:text-base text-center font-nunito bg-gradient-to-b from-[#7E8EAC] to-[#142F62] text-white">
        Copyright © <span>{new Date().getFullYear()}</span>Armonia. All Rights
        Reserved
      </p>
    </footer>
  );
}
