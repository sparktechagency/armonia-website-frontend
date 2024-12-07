import Image from "next/legacy/image";
import React from "react";

export default function page() {
  return (
    <>
      <header className="relative h-[350px] flex items-center justify-center bg-[#435981]">
        <Image
          src="/headerBG.png"
          alt="header"
          layout="fill"
          objectFit="cover"
        />
        <h1 className="text-6xl text-center text-white font-Playfair_Display font-bold">
          About Us
        </h1>
      </header>
      <section className="max-w-screen-xl mx-auto my-10">
        <p>
          Welcome to [Your Company Name], where we are committed to providing
          innovative solutions and exceptional service to our customers. Our
          team is driven by a passion for creating value and making a positive
          impact in the lives of our users.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to [State your company&apos;s mission]. We aim to [mention
          key goals], offering top-notch services that meet the unique needs of
          each individual or organization we work with.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Integrity:</strong> We prioritize honesty and transparency
            in everything we do.
          </li>
          <li>
            <strong>Innovation:</strong> We are constantly seeking new ideas and
            solutions to stay ahead in the industry.
          </li>
          <li>
            <strong>Customer Focus:</strong> Our customers are at the heart of
            everything we do, and we strive to exceed their expectations.
          </li>
          <li>
            <strong>Collaboration:</strong> We believe in the power of teamwork
            to achieve great results.
          </li>
        </ul>
        <h2>Our Team</h2>
        <p>
          At [Your Company Name], we are proud of our talented and dedicated
          team. With diverse backgrounds and expertise, we work together to
          deliver the best results for our clients. Our team members are
          passionate about what they do and are always looking for ways to
          improve and innovate.
        </p>
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! If you have any questions or want to
          learn more about our services, feel free to reach out to us at [Your
          Company Email Address].
        </p>
      </section>
    </>
  );
}
