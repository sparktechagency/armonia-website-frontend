"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Page = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const faqData = [
    {
      title: "Tailored Luxury",
      description:
        "Every appointment is designed around you. From facials to massages, nails to hair—we bring you five-star service with a personal touch.",
    },
    {
      title: "Effortless Convenience",
      description:
        "We come to you—no travel, no traffic, no waiting. Just premium care, in the comfort of your own space.",
    },
    {
      title: "Exceptional Professionals",
      description:
        "Our team is made up of trusted, hand-picked freelancers—experts in beauty and wellness, committed to excellence.",
    },
    {
      title: "True Connection",
      description:
        "We don’t just deliver treatments—we create meaningful, mindful moments that make you feel seen, heard, and cared for.",
    },
    {
      title: "For Our Professionals",
      description:
        "We’re proud to support a growing community of freelance beauticians, therapists, and wellness specialists who work with flexibility, freedom, and purpose.",
    },
    {
      title: "Be part of a luxury brand that respects your talent",
      description:
        "Choose your own schedule, with full support from our platform.",
    },
    {
      title:
        "Work with high-end clients in Quinta do Lago, Vale do Lobo, Vilamoura & more",
      description: "Grow, thrive, and feel empowered doing what you love.",
    },
    {
      title: "Our Mission",
      description:
        "To bring effortless elegance, professional care, discretion, and meaningful connection to every doorstep we enter. With Armonia, beauty becomes balance—and wellness, a way of life.",
    },
  ];

  return (
    <>
      <section className="py-20 px-3 xl:px-36 text-center bg-yellow-50">
        <p className="font-semibold text-yellow-500 uppercase">
          Wellness Questions Answered
        </p>
        <h2 className="font-bold text-3xl lg:text-5xl text-blue-500 font-Playfair_Display mb-5">
          What We Stand For
        </h2>
        <p className="font-medium text-lg text-blue-300">
          Find answers to frequently asked questions about our beauty and
          wellness services. If you need more help, don’t hesitate to contact
          us!
        </p>
        <div className="bg-white rounded-xl max-w-3xl mx-auto p-4 lg:p-8 xl:p-10 mt-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={cn("border-b", {
                "border-b-0": index === faqData.length - 1,
              })}
            >
              <button
                className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => setIsOpen((c) => (c === index ? null : index))}
              >
                <div className="flex justify-between items-center">
                  <span className=" md:text-lg font-semibold">
                    {item.title}
                  </span>

                  <span>
                    <FaChevronDown
                      className={`transform ${isOpen ? "rotate-180" : ""}`}
                      size={12}
                    />
                  </span>
                </div>
              </button>
              {isOpen === index && (
                <div className="p-4 bg-gray-50 text-start">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
