"use client";
import React, { ReactNode, useState } from "react";
import RattingStar from "./RattingStar";

const BookingReviewForm = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="bg-white max-w-[500px] w-full py-10 px-10 relative rounded transition-all">
      <form className="text-black space-y-5">
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
            placeholder="Add a comment..."
            className="w-full outline-none border p-2 rounded-xl mt-2"
            rows={4}
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="w-full mt-6 rounded-md font-nunito border-blue-500 border-2 p-3 bg-blue-500 text-white">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingReviewForm;
