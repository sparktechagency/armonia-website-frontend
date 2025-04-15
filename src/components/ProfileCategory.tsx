import React from "react";

export default function ProfileCategory({
  category,
  withName = false,
  className,
}: {
  category: "armonia_luxe" | "armonia_local";
  className?: string;
  withName?: boolean;
}) {
  if (!withName) {
    return (
      <span
        className={`w-8 sm:w-10 lg:w-[60px] h-8 sm:h-10 lg:h-[60px] flex items-center justify-center text-white rounded-full text-lg lg:text-2xl font-medium capitalize ${
          category === "armonia_luxe"
            ? "bg-yellow-500"
            : category === "armonia_local"
            ? "bg-blue-500"
            : "bg-black"
        } ${className}`}
      >
        {category[0]}
      </span>
    );
  }

  return (
    <p
      className={`flex items-center gap-1.5 sm:gap-3 lg:gap-5 font-medium  text-lg lg:text-2xl capitalize ${
        category === "armonia_local"
          ? "text-yellow-500"
          : category === "armonia_luxe"
          ? "text-blue-500"
          : "text-black"
      } ${className}`}
    >
      <span
        className={`w-8 sm:w-10 lg:w-[60px] h-8 sm:h-10 lg:h-[60px] flex items-center justify-center text-white rounded-full capitalize ${
          category === "armonia_local"
            ? "bg-yellow-500"
            : category === "armonia_luxe"
            ? "bg-blue-500"
            : "bg-black"
        }`}
      >
        {category[0]}
      </span>
      {category}
    </p>
  );
}
