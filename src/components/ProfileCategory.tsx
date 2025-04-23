import { cn } from "@/lib/utils";
import Image from "next/image";
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
      <Image
        src={
          category === "armonia_luxe"
            ? "/category/luxe.svg"
            : "/category/local.svg"
        }
        alt="Cate"
        className={cn("w-8 sm:w-10 lg:w-[60px] h-8 sm:h-10 lg:h-[60px] rounded-full", className)}
        width={1000}
        height={1000}
      />
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
      <Image
        src={
          category === "armonia_luxe"
            ? "/category/luxe.svg"
            : "/category/local.svg"
        }
        alt="Cate"
        className="w-8 sm:w-10 lg:w-[60px] h-8 sm:h-10 lg:h-[60px] rounded-full"
        width={1000}
        height={1000}
      />
      {category.split("_")[1]}
    </p>
  );
}
