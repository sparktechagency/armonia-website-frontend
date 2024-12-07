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
          Terms of Use
        </h1>
      </header>
      <section className="max-w-screen-xl mx-auto my-10">
        <p>
          Welcome to [Your Company Name]. By accessing and using our website or
          services, you agree to comply with and be bound by the following terms
          and conditions. Please read them carefully before using our services.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website or services, you agree to these
          Terms of Use and our Privacy Policy. If you do not agree with any of
          these terms, you should not use our services.
        </p>
        <h2>2. Use of Services</h2>
        <p>
          You are granted a limited, non-exclusive, and non-transferable license
          to access and use our services for personal or internal business
          purposes, in accordance with these Terms of Use. You agree not to use
          the services for any unlawful purpose.
        </p>
        <h2>3. User Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and for all activities under your account. You agree to notify
          us immediately of any unauthorized use of your account.
        </p>
        <h2>4. Prohibited Activities</h2>
        <p>
          You agree not to engage in any of the following activities:
          <ul>
            <li>
              Disrupting or interfering with the operation of the services.
            </li>
            <li>
              Using the services for illegal activities or to infringe on the
              rights of others.
            </li>
            <li>
              Attempting to gain unauthorized access to any part of the website
              or services.
            </li>
          </ul>
        </p>
        <h2>5. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to our
          services at any time, without prior notice, if we believe that you
          have violated any of these Terms of Use.
        </p>
        <h2>6. Disclaimers</h2>
        <p>
          Our services are provided &quot;as is&quot; and &quot;as available.&quot; We make no
          warranties, either express or implied, regarding the availability,
          accuracy, or functionality of the services.
        </p>
        <h2>7. Limitation of Liability</h2>
        <p>
          In no event shall we be liable for any indirect, incidental, special,
          or consequential damages arising out of or related to your use of the
          services.
        </p>
        <h2>8. Indemnification</h2>
        <p>
          You agree to indemnify and hold us harmless from any claims, losses,
          damages, or expenses arising out of your use of our services or
          violation of these Terms of Use.
        </p>
        <h2>9. Governing Law</h2>
        <p>
          These Terms of Use shall be governed by and construed in accordance
          with the laws of [Your Jurisdiction]. Any disputes arising from these
          terms shall be resolved in the appropriate courts in [Your
          Jurisdiction].
        </p>
        <h2>10. Changes to Terms</h2>
        <p>
          We may update or modify these Terms of Use from time to time. Any
          changes will be posted on this page with an updated date. Your
          continued use of our services after such changes constitutes your
          acceptance of the new Terms of Use.
        </p>
        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us
          at [Your Company Email Address].
        </p>
      </section>
    </>
  );
}
