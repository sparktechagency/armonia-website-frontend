import Image from "next/image";
import React from "react";

export default function page() {
  return (<>
    <header className="relative h-[350px] flex items-center justify-center bg-[#435981] px">
      <Image
        src="/headerBG.png"
        alt="header"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
      <h1 className="text-6xl text-center text-white font-Playfair_Display font-bold">
        Privacy Policy
      </h1>
    </header>
    <section className="max-w-screen-xl mx-auto my-10 px-3">
      <p>
        At [Your Company Name], we value your privacy. This Privacy Policy
        outlines the types of personal information we collect and how we use,
        share, and protect it. By using our services, you agree to the terms
        of this policy.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect personal information that you provide directly to us when
        you use our website, create an account, or interact with our services.
        This may include your name, email address, contact information, and
        any other details you provide during registration or while using our
        services.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We use your personal information to provide, maintain, and improve our
        services, as well as communicate with you about updates, offers, and
        changes to our platform.
      </p>
      <h2>Sharing Your Information</h2>
      <p>
        We do not share your personal information with third parties except as
        necessary to operate our services, comply with the law, or protect our
        rights.
      </p>
      <h2>Data Security</h2>
      <p>
        We take reasonable steps to protect your information from unauthorized
        access, alteration, disclosure, or destruction. However, no method of
        data transmission or storage is completely secure, and we cannot
        guarantee the security of your information.
      </p>
      <h2>Your Choices</h2>
      <p>
        You have the right to access, correct, or delete your personal
        information at any time. You can also opt out of marketing
        communications by following the unsubscribe instructions in our
        emails.
      </p>
      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with the updated date. Please review this
        policy periodically to stay informed about how we are protecting your
        information.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at [Your Company Email Address].
      </p>
    </section>
  </>);
}
