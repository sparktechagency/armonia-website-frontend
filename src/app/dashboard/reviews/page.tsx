"use client";
import React from "react";
import Image from "next/image";
import { useReviewsQuery } from "@/redux/features/reviews/review.api";
import { TUniObject } from "@/type/index.type";
import RatingStar from "@/components/ui/RatingStar";
import LoaderWraperComp from "@/components/LoaderWraperComp";

export default function page() {
  const { data, isLoading, isError } = useReviewsQuery([]);
  // const reviews = [
  //   {
  //     name: "Sophia Gupta",
  //     image: "/beautician.jpg",
  //     review:
  //       "I had an amazing experience! The service was top-notch, and the staff was extremely friendly. Highly recommend for anyone looking for a professional beauty experience.",
  //     rating: 5,
  //     createdAt: "01/10/2022 09:30 AM",
  //   },
  //   {
  //     name: "Emma Brooks",
  //     image: "/beautician.jpg",
  //     review:
  //       "A wonderful experience! The atmosphere was calm and relaxing, and the results were exactly what I wanted. I'll definitely be back!",
  //     rating: 4,
  //     createdAt: "02/15/2022 02:15 PM",
  //   },
  //   {
  //     name: "Olivia Smith",
  //     image: "/beautician.jpg",
  //     review:
  //       "Exceptional service and attention to detail. I felt pampered and well taken care of from start to finish. Worth every penny!",
  //     rating: 5,
  //     createdAt: "03/20/2022 11:00 AM",
  //   },
  //   {
  //     name: "Ava Johnson",
  //     image: "/beautician.jpg",
  //     review:
  //       "The experience was good, though I expected a bit more variety in the services offered. Overall, satisfied with the results and will return.",
  //     rating: 4,
  //     createdAt: "04/14/2022 01:00 PM",
  //   },
  //   {
  //     name: "Isabella Lee",
  //     image: "/beautician.jpg",
  //     review:
  //       "I had a great time during my visit. The staff was welcoming, and the service was fast but thorough. I'll be recommending this place to my friends.",
  //     rating: 5,
  //     createdAt: "05/30/2022 10:45 AM",
  //   },
  // ];

  return (
    <section className="bg-yellow-50 w-full">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        Reviews
      </h1>
      <div className="p-4 lg:p-6 space-y-5 lg:space-y-8">
        <div className="max-w-lg w-full flex items-center justify-center bg-white rounded-3xl gap-10 mx-auto py-3">
          <p className="text-xl">Average Rating</p>
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold text-4xl">
              {data?.data?.averageReviews}
            </span>
            <RatingStar rate={data?.data?.averageReviews || 0} />
            <p className="font-semibold">{data?.data?.totalReviews} Reviews</p>
          </div>
        </div>
        <LoaderWraperComp
          isError={isError}
          isLoading={isLoading}
          dataEmpty={data?.data?.reviews?.length < 1}
          className="flex flex-col gap-9 mt-8"
        >
          {data?.data?.reviews?.map((review: TUniObject, index: number) => (
            <div key={index} className="border-b">
              <div className="flex items-center gap-2">
                <Image
                  src={
                    review?.user?.image
                      ? `${process.env.NEXT_PUBLIC_API_URL}${review?.user.image}`
                      : "/profile-demo.png"
                  }
                  alt={review?.user.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <p>{review?.user.name}</p>
                  <div className="flex items-center gap-1">
                    <RatingStar rate={review.rating || 0} />
                  </div>
                </div>
              </div>
              <p className="my-3 text-sm">{review?.review}</p>
            </div>
          ))}
        </LoaderWraperComp>
      </div>
    </section>
  );
}
