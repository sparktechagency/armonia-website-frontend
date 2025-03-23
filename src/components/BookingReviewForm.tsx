"use client";
import React, { useContext, useState } from "react";
import RattingStar from "./RattingStar";
import { useAddReviewMutation } from "@/redux/features/reviews/review.api";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { BtnSpenner } from "./Spinner";
import { context } from "@/app/Context";

const BookingReviewForm = ({
  bookingId,
  profileId,
}: {
  bookingId: string;
  profileId: string;
}) => {
  const appContext = useContext(context);
  const [rating, setRating] = useState(0);
  const [mutation, { isLoading }] = useAddReviewMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const payload = {
      profileId: profileId,
      bookingId: bookingId,
      rating: rating,
      review: formData.get("review") as string,
    };
    try {
      if (rating === 0) throw new Error("Please give a rating!");
      await mutation(payload).unwrap();
      appContext?.setModal(null);
      toast.success(`Successfully review added!`);
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Failed!!",
        text:
          error.message ||
          error?.data?.message ||
          "Something went wrong. Please try again later.",
      });
    }
  };
  return (
    <div className="bg-white max-w-[500px] w-full py-10 px-10 relative rounded transition-all">
      <form onSubmit={handleSubmit} className="text-black space-y-5">
        <div className="space-y-4">
          <h1 className="text-[#142F62] text-4xl text-center font-medium font-Playfair_Display">
            Review
          </h1>
          <p className="text-center text-[#697586]">
            Dear Client Please give a feedback for Us, How was feel you in our
            Salon service
          </p>
        </div>
        <RattingStar rating={rating} setRating={setRating} />
        <div>
          <label className="text-[#646464]" htmlFor="comment">
            Comment (Optional)
          </label>
          <textarea
            id="comment"
            name="review"
            required
            placeholder="Add a comment..."
            className="w-full outline-none border p-2 rounded-xl mt-2"
            rows={4}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 rounded-md font-nunito border-blue-500 border-2 p-3 bg-blue-500 text-white flex justify-center items-center gap-2"
          >
            {isLoading ? <BtnSpenner /> : null} <span>Submit Now</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingReviewForm;
