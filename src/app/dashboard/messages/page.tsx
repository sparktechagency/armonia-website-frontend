import React from "react";
import { TPageProps } from "@/type/index.type";
import { cn } from "@/lib/utils";

const page = async (props: TPageProps) => {
  const { id } = await props.params;
  return (
    <div
      className={cn(
        "w-full bg-[#fafafa] min-h-[85vh] h-full justify-center items-center",
        {
          "hidden lg:flex": !id,
        }
      )}
    >
      <p className="text-gray-500 text-center italic">
        Select a user to view details
      </p>
    </div>
  );
};

export default page;
