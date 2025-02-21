"use client";
import React from "react";
import Image from "next/image";
import { useReviewsQuery } from "@/redux/features/reviews/review.api";

export default function page() {
  const { data, isLoading, isError } = useReviewsQuery([]);
  console.log({ data, isLoading, isError });
  const reviews = [
    {
      name: "Sophia Gupta",
      image: "/beautician.jpg",
      review:
        "I had an amazing experience! The service was top-notch, and the staff was extremely friendly. Highly recommend for anyone looking for a professional beauty experience.",
      rating: 5,
      createdAt: "01/10/2022 09:30 AM",
    },
    {
      name: "Emma Brooks",
      image: "/beautician.jpg",
      review:
        "A wonderful experience! The atmosphere was calm and relaxing, and the results were exactly what I wanted. I'll definitely be back!",
      rating: 4,
      createdAt: "02/15/2022 02:15 PM",
    },
    {
      name: "Olivia Smith",
      image: "/beautician.jpg",
      review:
        "Exceptional service and attention to detail. I felt pampered and well taken care of from start to finish. Worth every penny!",
      rating: 5,
      createdAt: "03/20/2022 11:00 AM",
    },
    {
      name: "Ava Johnson",
      image: "/beautician.jpg",
      review:
        "The experience was good, though I expected a bit more variety in the services offered. Overall, satisfied with the results and will return.",
      rating: 4,
      createdAt: "04/14/2022 01:00 PM",
    },
    {
      name: "Isabella Lee",
      image: "/beautician.jpg",
      review:
        "I had a great time during my visit. The staff was welcoming, and the service was fast but thorough. I'll be recommending this place to my friends.",
      rating: 5,
      createdAt: "05/30/2022 10:45 AM",
    },
  ];

  return (
    <section className="bg-yellow-50 w-full">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        Reviews
      </h1>
      <div className="p-10">
        <div className="max-w-lg w-full flex items-center justify-center bg-white rounded-3xl gap-10 mx-auto py-3">
          <p className="text-xl">Average Rating</p>
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold text-4xl">4.0</span>
            <div className="flex items-center gap-1">
              {[true, true, true, true, false].map((i, index) =>
                i ? (
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={index}
                  >
                    <path
                      d="M5.54894 1.42705C5.8483 0.505738 7.1517 0.50574 7.45106 1.42705L8.0716 3.33688C8.20547 3.7489 8.58943 4.02786 9.02265 4.02786H11.0308C11.9995 4.02786 12.4023 5.26748 11.6186 5.83688L9.99395 7.01722C9.64347 7.27187 9.49681 7.72323 9.63068 8.13525L10.2512 10.0451C10.5506 10.9664 9.4961 11.7325 8.71238 11.1631L7.08778 9.98278C6.7373 9.72813 6.2627 9.72814 5.91221 9.98278L4.28761 11.1631C3.5039 11.7325 2.44942 10.9664 2.74878 10.0451L3.36932 8.13526C3.50319 7.72323 3.35653 7.27186 3.00604 7.01722L1.38144 5.83688C0.597731 5.26748 1.00051 4.02786 1.96923 4.02786H3.97735C4.41057 4.02786 4.79453 3.7489 4.9284 3.33688L5.54894 1.42705Z"
                      fill="#FFD05E"
                    />
                  </svg>
                ) : (
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={index}
                  >
                    <path
                      d="M5.54894 1.42705C5.8483 0.505738 7.1517 0.50574 7.45106 1.42705L8.0716 3.33688C8.20547 3.7489 8.58943 4.02786 9.02265 4.02786H11.0308C11.9995 4.02786 12.4023 5.26748 11.6186 5.83688L9.99395 7.01722C9.64347 7.27187 9.49681 7.72323 9.63068 8.13525L10.2512 10.0451C10.5506 10.9664 9.4961 11.7325 8.71238 11.1631L7.08778 9.98278C6.7373 9.72813 6.2627 9.72814 5.91221 9.98278L4.28761 11.1631C3.5039 11.7325 2.44942 10.9664 2.74878 10.0451L3.36932 8.13526C3.50319 7.72323 3.35653 7.27186 3.00604 7.01722L1.38144 5.83688C0.597731 5.26748 1.00051 4.02786 1.96923 4.02786H3.97735C4.41057 4.02786 4.79453 3.7489 4.9284 3.33688L5.54894 1.42705Z"
                      fill="#9FA0A2"
                    />
                  </svg>
                )
              )}
            </div>
            <p className="font-semibold">52 Reviews</p>
          </div>
        </div>
        <div className="flex flex-col gap-9 mt-8">
          {reviews.map(({ createdAt, image, name, rating, review }, index) => (
            <div key={index} className="border-b">
              <div className="flex items-center gap-2">
                <Image
                  src={image}
                  alt={name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <p>{name}</p>
                  <div className="flex items-center gap-1">
                    {[true, true, true, true, false].map((i, index) =>
                      i ? (
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          key={index}
                        >
                          <path
                            d="M5.54894 1.42705C5.8483 0.505738 7.1517 0.50574 7.45106 1.42705L8.0716 3.33688C8.20547 3.7489 8.58943 4.02786 9.02265 4.02786H11.0308C11.9995 4.02786 12.4023 5.26748 11.6186 5.83688L9.99395 7.01722C9.64347 7.27187 9.49681 7.72323 9.63068 8.13525L10.2512 10.0451C10.5506 10.9664 9.4961 11.7325 8.71238 11.1631L7.08778 9.98278C6.7373 9.72813 6.2627 9.72814 5.91221 9.98278L4.28761 11.1631C3.5039 11.7325 2.44942 10.9664 2.74878 10.0451L3.36932 8.13526C3.50319 7.72323 3.35653 7.27186 3.00604 7.01722L1.38144 5.83688C0.597731 5.26748 1.00051 4.02786 1.96923 4.02786H3.97735C4.41057 4.02786 4.79453 3.7489 4.9284 3.33688L5.54894 1.42705Z"
                            fill="#FFD05E"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          key={index}
                        >
                          <path
                            d="M5.54894 1.42705C5.8483 0.505738 7.1517 0.50574 7.45106 1.42705L8.0716 3.33688C8.20547 3.7489 8.58943 4.02786 9.02265 4.02786H11.0308C11.9995 4.02786 12.4023 5.26748 11.6186 5.83688L9.99395 7.01722C9.64347 7.27187 9.49681 7.72323 9.63068 8.13525L10.2512 10.0451C10.5506 10.9664 9.4961 11.7325 8.71238 11.1631L7.08778 9.98278C6.7373 9.72813 6.2627 9.72814 5.91221 9.98278L4.28761 11.1631C3.5039 11.7325 2.44942 10.9664 2.74878 10.0451L3.36932 8.13526C3.50319 7.72323 3.35653 7.27186 3.00604 7.01722L1.38144 5.83688C0.597731 5.26748 1.00051 4.02786 1.96923 4.02786H3.97735C4.41057 4.02786 4.79453 3.7489 4.9284 3.33688L5.54894 1.42705Z"
                            fill="#9FA0A2"
                          />
                        </svg>
                      )
                    )}
                  </div>
                </div>
              </div>
              <p className="my-3 text-sm">{review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
