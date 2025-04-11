import Image from "next/image";
import { FC } from "react";

const HomeTestimonials: FC = () => {
  return (
    <section className="bg-[#0C111C] text-[#EDEAE5] py-16 xl:py-20 px-6 md:px-20 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Title and icon */}
        <div className="text-center md:text-left">
          <div className="flex justify-center items-center">
            <Image
              src={"/testmonial1.png"}
              alt="say"
              height={1000}
              width={1000}
              className="max-w-xs lg:max-w-md"
            />
          </div>
        </div>

        {/* Right side - Testimonials */}
        <div className="space-y-10 text-sm sm:text-base">
          {[
            {
              name: "Emma R.",
              country: "London",
              text: "From the moment my therapist arrived, I knew I was in expert hands. The massage was one of the best I’ve ever had—and I didn’t even have to leave my villa. Absolute bliss.",
            },
            {
              name: "Sophie L.",
              country: "Dublin",
              text: "I booked a blow-dry and nails before an event in Quinta do Lago. The service was so professional, the team so warm—I felt like I had my own personal glam squad. Can’t wait to book again!",
            },
            {
              name: "Isabel M.",
              country: "Oslo",
              text: "Having Armonia during our girls’ weekend was such a treat. The facials, massages, and nails were all done beautifully, and the therapists were so lovely and discreet. 10/10.",
            },
          ].map(({ name, country, text }, idx) => (
            <div key={idx}>
              <h3 className="text-xl lg:text-2xl font-semibold font-Playfair_Display mb-3">
                <span className="underline underline-offset-8">— {name}</span> ,{" "}
                <span className="underline underline-offset-8">{country}</span>
              </h3>
              <p className="text-[#d2d2cd] lg:text-lg ">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
